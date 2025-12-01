import json
from app import app, db, User, AISettings, Chat, Message

def setup_db():
    with app.app_context():
        db.create_all()
        user = User.query.get(1)
        if not user:
            user = User(id=1, username="TestUser", email="test@example.com")
            db.session.add(user)
            db.session.commit()

def run_checks():
    setup_db()
    client = app.test_client()

    # Index redirects to /chat
    resp = client.get('/')
    assert resp.status_code in (301, 302)

    # Profile page renders
    resp = client.get('/profile')
    assert resp.status_code == 200

    # AI settings page renders
    resp = client.get('/profile/ai')
    assert resp.status_code == 200

    # Add API via form
    resp = client.post('/api/add_api', data={
        'api_name': 'TestAPI',
        'api_key': 'x' * 20,
        'api_url': '',
        'api_model': 'gemini-2.5-flash'
    })
    assert resp.status_code == 200
    data = resp.get_json()
    assert data and data.get('success') is True

    # List APIs
    resp = client.get('/api/get_ai_list')
    assert resp.status_code == 200
    ai_list = resp.get_json()
    assert isinstance(ai_list, list) and len(ai_list) >= 1

    # Start chat with first AI
    ai_id = ai_list[0]['id']
    resp = client.post('/chat/start', data={'ai_id': ai_id})
    assert resp.status_code in (301, 302)

    resp = client.post('/api/validate_api', data={
        'api_key': 'x' * 24,
        'api_model': 'gemini-2.5-flash',
        'api_url': ''
    })
    assert resp.status_code == 200
    v = resp.get_json()
    assert v.get('success') is True

    with app.app_context():
        chat = Chat.query.filter_by(user_id=1).order_by(Chat.created_at.desc()).first()
        assert chat is not None
        token = chat.token
    resp = client.post('/api/send_message', json={'chat_token': token, 'message': 'hello'})
    assert resp.status_code == 200
    with app.app_context():
        chat = Chat.query.filter_by(user_id=1).order_by(Chat.created_at.desc()).first()
        msg = Message.query.filter_by(chat_id=chat.id).order_by(Message.timestamp.asc()).first()
        assert msg is not None
        msg_id = msg.id
        chat_id = chat.id
    resp = client.get(f'/api/chat/{chat_id}/messages')
    assert resp.status_code == 200
    messages = resp.get_json()
    assert isinstance(messages, list) and len(messages) >= 1
    resp = client.put(f'/api/message/{msg_id}', json={'content': 'edited'})
    assert resp.status_code == 200
    resp = client.put(f'/api/chat/{chat_id}', json={'title': 'Yeni Başlık'})
    assert resp.status_code == 200

    print("OK")

if __name__ == '__main__':
    run_checks()