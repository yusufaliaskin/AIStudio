# Dark Theme

<img width="960" height="497" alt="image" src="https://github.com/user-attachments/assets/a12a4459-9e29-498d-a482-8c4bdbd0693e" />

# White Theme

<img width="960" height="499" alt="image" src="https://github.com/user-attachments/assets/91980253-74b0-488c-b674-18880306fabb" />

**AIStudio** is a cutting-edge, feature-rich conversational AI platform designed to bridge the gap between multiple LLM providers and a seamless user experience. Built with Flask and enhanced with a modern, glassmorphism-inspired UI, it offers a unified interface for interacting with Google Gemini, OpenAI GPT, and Claude models.

Whether you are a developer, a researcher, or an enthusiast, code.AIStudio provides the tools you need for deep research, code generation, and creative writing, all within a secure and personalized environment.

---

## 🌟 Key Features

### 🧠 **Multi-Model Intelligence**
*   **Universal Compatibility**: Seamlessly switch between **Google Gemini**, **OpenAI GPT-4**, and **Claude** models within the same interface.
*   **Custom API Management**: Bring your own keys. Securely manage and switch between different API configurations via the settings dashboard.

### 🔍 **Deep Research & Multimodal Capabilities**
*   **Web Search Integration**: Empower your AI with real-time information using integrated Google Search tools (Deep Research mode).
*   **File Analysis**: Upload images and documents directly into the chat. The AI can analyze, summarize, and extract insights from your attachments.

### 🎨 **Modern & Responsive UI**
*   **Glassmorphism Design**: A sleek, visually stunning interface featuring blur effects, smooth transitions, and a premium feel.
*   **Responsive Layout**: Fully optimized for desktops, tablets, and mobile devices.
*   **Theme Support**: (Coming Soon) Dynamic light and dark mode toggles.

### 🛡️ **Robust Security & Management**
*   **Hybrid Authentication**: Secure user management powered by **Supabase Auth** integrated with a local SQLite database for robust session handling.
*   **Profile Dashboard**: View detailed statistics about your usage, including active chats, completed sessions, and API utilization.

### ⚡ **Productivity Tools**
*   **Saved Prompts**: Create and save your most-used system instructions and prompts for quick access.
*   **Chat History & Search**: Automatically archives conversations. Easily search through past chats to retrieve information.
*   **Feedback System**: Built-in feedback mechanism to track issues and improvements.

---

## 🛠️ Technology Stack

*   **Backend Framework**: Python (Flask)
*   **Database**: SQLAlchemy (SQLite) & Supabase (PostgreSQL/Auth)
*   **Frontend**: HTML5, Vanilla CSS3 (Custom Design System), JavaScript
*   **AI Providers**: Google Generative AI SDK, OpenAI API, Anthropic (via proxy/custom implementation)

---

## 📂 Project Structure

```
code.AIStudio/
├── app.py                 # Main application application entry point & routes
├── requirements.txt       # Python dependencies
├── static/                # Static assets
│   ├── css/               # Custom stylesheets (Glassmorphism design)
│   ├── js/                # Frontend logic (AJAX, UI interactions)
│   └── uploads/           # User uploaded files & profile pictures
├── templates/             # Jinja2 HTML templates
│   ├── base.html          # Base layout
│   ├── chat.html          # Main chat interface
│   ├── profile.html       # User dashboard
│   └── ...
└── instance/              # Local SQLite database
```

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

<img width="950" height="494" alt="image" src="https://github.com/user-attachments/assets/ab3243fc-cab5-48bd-b2a7-6d00c97fbcd8" />


### Prerequisites

*   Python 3.8 or higher
*   Git
*   A [Supabase](https://supabase.com/) account (for authentication)
*   API Keys for your preferred AI models (Google AI Studio, OpenAI Platform)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yusufaliaskin/AIStudio.git
    cd AIStudio
    ```

2.  **Create a Virtual Environment**
    ```bash
    # Windows
    python -m venv venv
    venv\Scripts\activate

    # macOS/Linux
    python3 -m venv venv
    source venv/bin/activate
    ```

3.  **Install Dependencies**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Environment Configuration**
    *   Open `app.py` and update the `SUPABASE_URL` and `SUPABASE_KEY` with your project credentials.
    *   *(Optional)* Set a `SECRET_KEY` in your environment variables for production security.

5.  **Run the Application**
    ```bash
    python app.py
    ```
    The application will start at `http://127.0.0.1:5000`.

---

## 📖 Usage Guide

1.  **Register/Login**: Create an account using the secure Supabase authentication page.
2.  **Configure AI**: Navigate to **Profile > AI Settings**. Enter your API Key (e.g., Gemini API Key) and select the model type.
3.  **Start Chatting**: Go to the Chat page. You can now send messages, upload images, or use the "Deep Research" toggle if enabled.
4.  **Manage History**: Use the sidebar to switch between conversations or use the Search page to find specific topics.

<img width="950" height="498" alt="image" src="https://github.com/user-attachments/assets/d4fd9105-ff60-4d6c-831a-79daf396e9f0" />

---

## 🤝 Contributing

Contributions make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact

**Yusuf Ali Aşkın** - [GitHub Profile](https://github.com/yusufaliaskin)

Project Link: [https://github.com/yusufaliaskin/AIStudio](https://github.com/yusufaliaskin/AIStudio)

