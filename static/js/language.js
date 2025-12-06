const translations = {
    'en': {
        // Sidebar & Common
        'new_chat': 'New Chat',
        'discover_gems': 'Discover Gems',
        'recent': 'Recent',
        'about_us': 'About Us',
        'language': 'Language',
        'user_feedback': 'User Feedback',
        'settings': 'Settings',
        'mobile_app': 'Mobile App',
        'tester': 'Demo',
        'select_language': 'Select Language',
        'turkish': 'Turkish',
        'english': 'English',
        'close': 'Close',
        'guest': 'Guest',
        'cancel': 'Cancel',
        'save': 'Save',
        'delete': 'Delete',
        'edit': 'Edit',
        'active': 'Active',
        'completed': 'Completed',
        'archived': 'Archived',

        // Settings Page
        'profile': 'My Profile',
        'general': 'General',
        'theme': 'Theme',
        'system': 'System',
        'dark': 'Dark',
        'light': 'Light',
        'chat_settings': 'Chat',
        'saved_prompts': 'Saved Prompts',
        'expand_sidebar': 'Expand Sidebar on Search',
        'manage': 'Manage',
        'subscription': 'Subscription',
        'terms_of_service': 'Terms of Service',
        'privacy_policy': 'Privacy Policy',
        'logout': 'Log Out',
        'name': 'Name',
        'email': 'Email',
        'phone': 'Number',
        'save_changes': 'Save Changes',
        'logout_all': 'Log Out from all devices',
        'close_session': 'Close Session',
        'delete_account': 'Delete Account',
        'delete_action': 'Delete',

        // Profile Page
        'back_to_chat': 'Back to Chat',
        'active_chats': 'Active Chats',
        'connected_apis': 'Connected APIs',
        'ai_models': 'AI Models',
        'add_new': 'Add New',
        'no_api': 'No API added yet.',
        'recent_activity': 'Recent Activity',
        'view': 'View',
        'no_history': 'No chat history yet.',
        'edit_model': 'Edit Model',
        'update': 'Update',
        'model_name': 'Model Name',
        'model_type': 'Model Type',
        'api_key': 'API Key',
        'api_url': 'API URL (Optional)',

        // Chat Page
        'ask_ai': 'Ask AI..',
        'thinking': 'Thinking',
        'no_model': 'No Model',
        'disclaimer': 'AI can make mistakes, please verify information.',

        // AI Settings Page
        'add_ai': 'Add AI',
        'back_to_profile': 'Back to Profile',
        'add_new_model': 'Add New Model',
        'model_name_label': 'Model Name (e.g. Work Assistant)',
        'model_name_placeholder': 'Enter a name for the model',
        'api_key_placeholder': 'Paste your API key',
        'api_url_label': 'API URL (Optional)',
        'api_url_placeholder': 'Enter if using a custom API endpoint',
        'api_url_help': 'Required for OpenAI compatible proxy servers. Leave empty for standard use.',
        'add_model_btn': 'Add Model',

        // Search Page
        'search_placeholder': 'Search chats',

        // Feedback Page
        'feedback_title': 'Feedback',
        'feedback_subtitle': 'Help us improve your experience',
        'feedback_label': "What's on your mind?",
        'feedback_placeholder': "Tell us what you like, what you don't, or what you'd like to see...",
        'attachments': 'Attachments (Optional)',
        'drag_drop': 'Click or drag images here',
        'max_size': 'Max file size: 5MB',
        'send_feedback': 'Send Feedback',
        'thank_you': 'Thank You!',
        'feedback_received': 'Your feedback has been received. We appreciate your input.',
        'send_another': 'Send Another',

        // About Page
        'about_title': 'About Us',
        'about_subtitle': 'Learn more about our mission and vision',
        'about_system_title': 'Our System',
        'about_system_desc': 'AI Studio is a cutting-edge platform designed to integrate multiple AI models into a single, seamless interface. We provide a robust environment for users to interact with advanced language models, manage their prompts, and enhance their productivity through intelligent assistance.',
        'about_mission_title': 'Our Mission',
        'about_mission_desc': 'Our mission is to democratize access to artificial intelligence. We believe in building tools that empower individuals and businesses to leverage the power of AI without the complexity. We strive for simplicity, efficiency, and innovation in everything we build.',
        'about_founder_title': 'The Founder',
        'about_founder_role': 'Lead Developer & Creator',
        'about_founder_desc': 'Passionate about bridging the gap between human creativity and machine intelligence. Dedicated to creating intuitive user experiences and robust backend systems.',

        // New About Page Sections
        'about_hero_title': 'Revolutionizing AI Interaction',
        'about_hero_subtitle': 'One platform, infinite possibilities. Experience the power of multiple advanced AI models in a single, unified workspace.',
        'stat_models': 'AI Models',
        'stat_users': 'Active Users',
        'stat_uptime': 'Uptime',
        'vision_title': 'Our Vision',
        'vision_desc': 'To create a world where advanced artificial intelligence is accessible, understandable, and beneficial for everyone, fostering a future of human-AI collaboration.',
        'features_title': 'Why Choose AI Studio?',
        'feat_multi_title': 'Multi-Model Support',
        'feat_multi_desc': 'Seamlessly switch between GPT-4, Gemini, Claude, and more without losing context.',
        'feat_secure_title': 'Secure & Private',
        'feat_secure_desc': 'Enterprise-grade encryption ensures your conversations and data remain private.',
        'feat_custom_title': 'Fully Customizable',
        'feat_custom_desc': 'Tailor the interface, prompts, and AI behaviors to match your specific workflow.',
        'tech_stack_title': 'Powered By Modern Tech',
        'roadmap_title': 'Future Roadmap',
        'roadmap_q1': 'Mobile App Launch',
        'roadmap_q2': 'Voice Interface',
        'roadmap_q3': 'Team Collaboration',
        'join_us_title': 'Ready to experience the future?',
        'join_us_btn': 'Start Chatting Now',

        // New Sections - Values & FAQ
        'values_title': 'Our Core Values',
        'val_innovation': 'Innovation',
        'val_innovation_desc': 'Constantly pushing the boundaries of what is possible with AI.',
        'val_privacy': 'Privacy First',
        'val_privacy_desc': 'Your data is yours. We prioritize security and confidentiality above all.',
        'val_user': 'User Centric',
        'val_user_desc': 'We build for you. Every feature is designed to enhance your experience.',
        'val_excellence': 'Excellence',
        'val_excellence_desc': 'We do not settle for good. We strive for the best in every line of code.',

        'faq_title': 'Frequently Asked Questions',
        'faq_q1': 'Is AI Studio free to use?',
        'faq_a1': 'We offer a generous free tier for everyone. Premium features are available for power users.',
        'faq_q2': 'Which AI models are supported?',
        'faq_a2': 'We currently support GPT-4, Gemini Pro, Claude 3, and are constantly adding more.',
        'faq_q3': 'Is my data secure?',
        'faq_a3': 'Yes, we use industry-standard encryption and do not share your personal data with third parties.',
        'faq_q4': 'Do you have a mobile app?',
        'faq_a4': 'We are currently developing our mobile application, scheduled for release in Q1 2026.'
    },
    'tr': {
        // Sidebar & Common
        'new_chat': 'Yeni Sohbet',
        'discover_gems': 'Gem\'leri Keşfedin',
        'recent': 'En Son',
        'about_us': 'Hakkımızda',
        'language': 'Dil',
        'user_feedback': 'Kullanıcı Geri Bildirimi',
        'settings': 'Ayarlar',
        'mobile_app': 'Mobil Uygulama',
        'tester': 'Demo',
        'select_language': 'Dil Seçin',
        'turkish': 'Türkçe',
        'english': 'İngilizce',
        'close': 'Kapat',
        'guest': 'Misafir',
        'cancel': 'İptal',
        'save': 'Kaydet',
        'delete': 'Sil',
        'edit': 'Düzenle',
        'active': 'Aktif',
        'completed': 'Tamamlanan',
        'archived': 'Arşivlenmiş',

        // Settings Page
        'profile': 'Profilim',
        'general': 'Genel',
        'theme': 'Tema',
        'system': 'Sistem',
        'dark': 'Koyu',
        'light': 'Açık',
        'chat_settings': 'Sohbet',
        'saved_prompts': 'Kaydedilen İstemler',
        'expand_sidebar': 'Aramada Kenar Çubuğunu Genişlet',
        'manage': 'Yönet',
        'subscription': 'Abonelik',
        'terms_of_service': 'Hizmet Şartları',
        'privacy_policy': 'Gizlilik Politikası',
        'logout': 'Çıkış Yap',
        'name': 'İsim',
        'email': 'E-posta',
        'phone': 'Numara',
        'save_changes': 'Değişiklikleri Kaydet',
        'logout_all': 'Tüm cihazlardan çıkış yap',
        'close_session': 'Oturumu Kapat',
        'delete_account': 'Hesabı Sil',
        'delete_action': 'Sil',

        // Profile Page
        'back_to_chat': 'Sohbet\'e Dön',
        'active_chats': 'Aktif Sohbet',
        'connected_apis': 'Bağlı API',
        'ai_models': 'Yapay Zeka Modelleri',
        'add_new': 'Yeni Ekle',
        'no_api': 'Henüz eklenmiş bir API yok.',
        'recent_activity': 'Son Aktiviteler',
        'view': 'Görüntüle',
        'no_history': 'Henüz sohbet geçmişi yok.',
        'edit_model': 'Model Düzenle',
        'update': 'Güncelle',
        'model_name': 'Model Adı',
        'model_type': 'Model Tipi',
        'api_key': 'API Anahtarı',
        'api_url': 'API URL (Opsiyonel)',

        // Chat Page
        'ask_ai': 'Yapay Zeka\'ya sorun..',
        'choose': 'Seçim',
        'no_model': 'Model Yok',
        'disclaimer': 'Yapay zeka hata yapabilir, lütfen bilgileri doğrulayın.',

        // AI Settings Page
        'add_ai': 'Yapay Zeka Ekle',
        'back_to_profile': 'Profile Dön',
        'add_new_model': 'Yeni Model Ekle',
        'model_name_label': 'Model Adı (Örn: İş Asistanı)',
        'model_name_placeholder': 'Model için bir isim belirleyin',
        'api_key_placeholder': 'API anahtarınızı yapıştırın',
        'api_url_label': 'API URL (Opsiyonel)',
        'api_url_placeholder': 'Özel bir API endpoint kullanıyorsanız girin',
        'api_url_help': 'OpenAI uyumlu proxy sunucular için gereklidir. Standart kullanım için boş bırakın.',
        'add_model_btn': 'Modeli Ekle',

        // Search Page
        'search_placeholder': 'Sohbet arayın',

        // Feedback Page
        'feedback_title': 'Geri Bildirim',
        'feedback_subtitle': 'Deneyiminizi geliştirmemize yardımcı olun',
        'feedback_label': 'Aklınızda ne var?',
        'feedback_placeholder': 'Neyi beğendiğinizi, neyi beğenmediğinizi veya ne görmek istediğinizi bize bildirin...',
        'attachments': 'Ekler (İsteğe Bağlı)',
        'drag_drop': 'Resimleri buraya sürükleyin veya tıklayın',
        'max_size': 'Maksimum dosya boyutu: 5MB',
        'send_feedback': 'Geri Bildirim Gönder',
        'thank_you': 'Teşekkürler!',
        'feedback_received': 'Geri bildiriminiz alındı. Katkılarınız için teşekkür ederiz.',
        'send_another': 'Başka Gönder',

        // About Page
        'about_title': 'Hakkımızda',
        'about_subtitle': 'Misyonumuz ve vizyonumuz hakkında daha fazla bilgi edinin',
        'about_system_title': 'Sistemimiz',
        'about_system_desc': 'AI Studio, birden fazla yapay zeka modelini tek ve sorunsuz bir arayüze entegre etmek için tasarlanmış son teknoloji bir platformdur. Kullanıcıların gelişmiş dil modelleriyle etkileşime girmesi, istemlerini yönetmesi ve akıllı asistanlık yoluyla üretkenliklerini artırması için sağlam bir ortam sağlıyoruz.',
        'about_mission_title': 'Misyonumuz',
        'about_mission_desc': 'Misyonumuz yapay zekaya erişimi demokratikleştirmektir. Bireyleri ve işletmeleri karmaşıklık olmadan yapay zekanın gücünden yararlanmaları için güçlendiren araçlar oluşturmaya inanıyoruz. İnşa ettiğimiz her şeyde basitlik, verimlilik ve yenilik için çabalıyoruz.',
        'about_founder_title': 'Kurucu',
        'about_founder_role': 'Baş Geliştirici & Kurucu',
        'about_founder_desc': 'İnsan yaratıcılığı ile makine zekası arasındaki boşluğu doldurmaya tutkulu. Sezgisel kullanıcı deneyimleri ve sağlam arka uç sistemleri oluşturmaya kendini adamıştır.',

        // New About Page Sections
        'about_hero_title': 'Yapay Zeka Etkileşiminde Devrim',
        'about_hero_subtitle': 'Tek platform, sonsuz olasılıklar. Birden fazla gelişmiş yapay zeka modelinin gücünü tek bir birleşik çalışma alanında deneyimleyin.',
        'stat_models': 'Yapay Zeka Modeli',
        'stat_users': 'Aktif Kullanıcı',
        'stat_uptime': 'Çalışma Süresi',
        'vision_title': 'Vizyonumuz',
        'vision_desc': 'Gelişmiş yapay zekanın herkes için erişilebilir, anlaşılır ve faydalı olduğu bir dünya yaratarak, insan-YZ işbirliğinin geleceğini teşvik etmek.',
        'features_title': 'Neden AI Studio?',
        'feat_multi_title': 'Çoklu Model Desteği',
        'feat_multi_desc': 'Bağlamı kaybetmeden GPT-4, Gemini, Claude ve daha fazlası arasında sorunsuz geçiş yapın.',
        'feat_secure_title': 'Güvenli ve Özel',
        'feat_secure_desc': 'Kurumsal düzeyde şifreleme, konuşmalarınızın ve verilerinizin gizli kalmasını sağlar.',
        'feat_custom_title': 'Tamamen Özelleştirilebilir',
        'feat_custom_desc': 'Arayüzü, istemleri ve YZ davranışlarını özel iş akışınıza uyacak şekilde uyarlayın.',
        'tech_stack_title': 'Modern Teknolojilerle Güçlendirildi',
        'roadmap_title': 'Gelecek Yol Haritası',
        'roadmap_q1': 'Mobil Uygulama Lansmanı',
        'roadmap_q2': 'Sesli Arayüz',
        'roadmap_q3': 'Takım İşbirliği',
        'join_us_title': 'Geleceği deneyimlemeye hazır mısınız?',
        'join_us_btn': 'Sohbete Başla',

        // New Sections - Values & FAQ
        'values_title': 'Temel Değerlerimiz',
        'val_innovation': 'İnovasyon',
        'val_innovation_desc': 'Yapay zeka ile mümkün olanın sınırlarını sürekli zorluyoruz.',
        'val_privacy': 'Önce Gizlilik',
        'val_privacy_desc': 'Verileriniz sizindir. Güvenliği ve gizliliği her şeyin üzerinde tutuyoruz.',
        'val_user': 'Kullanıcı Odaklı',
        'val_user_desc': 'Sizin için inşa ediyoruz. Her özellik deneyiminizi geliştirmek için tasarlandı.',
        'val_excellence': 'Mükemmeliyet',
        'val_excellence_desc': 'İyi ile yetinmiyoruz. Her kod satırında en iyisi için çabalıyoruz.',

        'faq_title': 'Sıkça Sorulan Sorular',
        'faq_q1': 'AI Studio kullanımı ücretsiz mi?',
        'faq_a1': 'Herkes için cömert bir ücretsiz katman sunuyoruz. Premium özellikler güç kullanıcıları için mevcuttur.',
        'faq_q2': 'Hangi yapay zeka modelleri destekleniyor?',
        'faq_a2': 'Şu anda GPT-4, Gemini Pro, Claude 3\'ü destekliyoruz ve sürekli yenilerini ekliyoruz.',
        'faq_q3': 'Verilerim güvende mi?',
        'faq_a3': 'Evet, endüstri standardı şifreleme kullanıyoruz ve kişisel verilerinizi üçüncü taraflarla paylaşmıyoruz.',
        'faq_q4': 'Mobil uygulamanız var mı?',
        'faq_a4': 'Şu anda mobil uygulamamızı geliştiriyoruz, 2026\'nın ilk çeyreğinde yayınlanması planlanıyor.'
    },
};

function updateLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = translations[lang][key];
                }
            } else {
                // Check if element has children that are not text nodes (like icons)
                const icon = element.querySelector('i, span.icon, span.material-symbols-rounded');
                if (icon) {
                    // If there is an icon, we assume the text is in a text node or a specific span
                    // But in my base.html I used <span class="text"> for text, which is good.
                    // For buttons like "Back to Profile" which has <i class="fas fa-arrow-left"></i> Profile Dön
                    // We need to be careful.
                    // Simplest way: wrap text in a span with data-i18n if possible, or handle here.
                    // Let's try to just update the text node if possible.

                    // Actually, for mixed content, it's better to structure HTML to have text in a span.
                    // I will update HTML to wrap text in spans where needed.
                    // But for now, if I replace innerHTML, I lose the icon.
                    // So I will only update textContent if no children, or look for specific structure.

                    // In base.html I used <span class="text" data-i18n="..."> so it's fine there.
                    // In ai_settings.html I need to be careful.

                    // If the element has data-i18n, I will replace its content. 
                    // If it has an icon, I should probably put data-i18n on a span NEXT to the icon.
                    element.textContent = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        }
    });

    // Update active class in modal if it exists
    const buttons = document.querySelectorAll('.lang-option');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const savedLang = localStorage.getItem('language') || 'tr'; // Default to Turkish as per user request context implies Turkish user
    updateLanguage(savedLang);

    // Modal Logic
    const langModal = document.getElementById('language-modal');
    const langTrigger = document.getElementById('language-trigger');
    const closeModal = document.getElementById('close-lang-modal');
    const langOptions = document.querySelectorAll('.lang-option');

    if (langTrigger) {
        langTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            if (langModal) langModal.classList.add('active');
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            if (langModal) langModal.classList.remove('active');
        });
    }

    if (langModal) {
        langModal.addEventListener('click', (e) => {
            if (e.target === langModal) {
                langModal.classList.remove('active');
            }
        });
    }

    langOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
            if (langModal) langModal.classList.remove('active');
        });
    });
});
