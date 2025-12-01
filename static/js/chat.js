const container = document.querySelector(".content-wrapper");
const chatsContainer = document.querySelector(".chats-container");
const promptArea = document.querySelector(".prompt-area");
const promptForm = document.querySelector(".prompt-form");
const promptInput = promptForm ? promptForm.querySelector(".prompt-input") : null;
const fileInput = promptForm ? promptForm.querySelector("#file-input") : null;
const fileUploadWrapper = promptForm ? promptForm.querySelector(".file-upload-wrapper") : null;
const modelSelector = document.getElementById("model-selector");
const chatTokenInput = document.getElementById("chat-token");
const welcomeContainer = document.querySelector(".welcome-container");

let controller, typingInterval;
const userData = { message: "", file: {} };

// Tools Menu Logic
const toolsBtn = document.getElementById("tools-btn");
const toolsMenu = document.getElementById("tools-menu");
const toolItems = document.querySelectorAll(".tool-item");
let selectedTool = null; // 'web_search', 'deep_research', or null

if (toolsBtn && toolsMenu) {
    toolsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toolsMenu.classList.toggle("active");
        toolsBtn.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!toolsBtn.contains(e.target) && !toolsMenu.contains(e.target)) {
            toolsMenu.classList.remove("active");
            toolsBtn.classList.remove("active");
        }
    });

    toolItems.forEach(item => {
        item.addEventListener("click", () => {
            const tool = item.dataset.tool;

            // Toggle logic
            if (selectedTool === tool) {
                selectedTool = null;
                item.classList.remove("active");
            } else {
                selectedTool = tool;
                toolItems.forEach(i => i.classList.remove("active"));
                item.classList.add("active");
            }

            // Update button state
            if (selectedTool) {
                toolsBtn.style.color = "#4caf50"; // Green when active
                toolsBtn.classList.add("active");
            } else {
                toolsBtn.style.color = "";
                toolsBtn.classList.remove("active");
            }

            toolsMenu.classList.remove("active");
        });
    });
}

// Set initial theme from local storage
const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === 'dark') {
    document.body.classList.add("dark-theme");
}

// Function to create message elements
const createMessageElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
};

// Scroll to the bottom of the container
const scrollToBottom = () => container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });

// Simulate typing effect for bot responses
const typingEffect = (text, textElement, botMsgDiv) => {
    textElement.textContent = "";
    const words = text.split(" ");
    let wordIndex = 0;

    // Set an interval to type each word
    typingInterval = setInterval(() => {
        if (wordIndex < words.length) {
            textElement.textContent += (wordIndex === 0 ? "" : " ") + words[wordIndex++];
            scrollToBottom();
        } else {
            clearInterval(typingInterval);
            botMsgDiv.classList.remove("loading");
            document.body.classList.remove("bot-responding");
        }
    }, 40); // 40 ms delay
};

// Make the API call and generate the bot's response
const generateResponse = async (botMsgDiv) => {
    const textElement = botMsgDiv.querySelector(".message-text");
    controller = new AbortController();

    let chatToken = chatTokenInput ? chatTokenInput.value : null;
    const aiId = modelSelector ? modelSelector.value : null;

    try {
        const response = await fetch("/api/send_message", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                message: userData.message,
                chat_token: chatToken,
                ai_id: aiId,
                file_data: userData.file.data,
                file_type: userData.file.mime_type,
                file_name: userData.file.fileName,
                use_search: selectedTool === 'web_search' || selectedTool === 'deep_research',
                tool: selectedTool
            }),
            signal: controller.signal,
        });

        const data = await response.json();
        if (!response.ok || data.status !== 'success') throw new Error(data.error || "Bir hata oluştu.");

        // Update chat token if it's a new chat
        if (data.chat_token && (!chatToken || chatToken !== data.chat_token)) {
            if (chatTokenInput) chatTokenInput.value = data.chat_token;
            // Update URL without reloading
            window.history.pushState({}, "", `/chat/${data.chat_token}`);
        }

        // Process the response text and display with typing effect
        const responseText = data.response.replace(/\*\*([^*]+)\*\*/g, "$1").trim();
        typingEffect(responseText, textElement, botMsgDiv);

    } catch (error) {
        if (error.name === "AbortError") {
            textElement.textContent = "Yanıt oluşturma durduruldu.";
        } else {
            textElement.textContent = error.message;
            textElement.style.color = "#d62939";
        }
        botMsgDiv.classList.remove("loading");
        document.body.classList.remove("bot-responding");
        scrollToBottom();
    } finally {
        userData.file = {};
    }
};

// Handle the form submission
const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = promptInput.value.trim();
    if (!userMessage || document.body.classList.contains("bot-responding")) return;

    userData.message = userMessage;
    promptInput.value = "";
    document.body.classList.add("chats-active", "bot-responding");
    fileUploadWrapper.classList.remove("file-attached", "img-attached", "active");

    // UI Updates for new message
    if (welcomeContainer) welcomeContainer.style.display = "none";
    if (promptArea) promptArea.classList.remove("centered");

    // Generate user message HTML with optional file attachment
    const userMsgHTML = `
    <div class="message-content">
        ${userData.file.data ? (userData.file.isImage ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="img-attachment" style="max-width: 100%; border-radius: 12px; margin-bottom: 8px; display: block;" />` : `<p class="file-attachment"><span class="material-symbols-rounded">description</span>${userData.file.fileName}</p>`) : ""}
        <div class="message-text"></div>
    </div>
    `;

    const userMsgDiv = createMessageElement(userMsgHTML, "user-message");
    userMsgDiv.querySelector(".message-text").textContent = userData.message;
    chatsContainer.appendChild(userMsgDiv);
    scrollToBottom();

    setTimeout(() => {
        // Generate bot message HTML and add in the chat container
        const botMsgHTML = `
        <div class="avatar-container">
            <img class="avatar" src="/static/image/gemini.svg" />
        </div>
        <div class="message-content">
            <div class="message-text">Düşünüyor...</div>
            <div class="message-actions">
                <button class="action-btn material-symbols-rounded" title="Beğen">thumb_up</button>
                <button class="action-btn material-symbols-rounded" title="Beğenme">thumb_down</button>
                <button class="action-btn material-symbols-rounded" title="Yeniden oluştur">refresh</button>
                <button class="action-btn material-symbols-rounded" title="Paylaş">share</button>
                <button class="action-btn material-symbols-rounded" title="Kopyala">content_copy</button>
                <button class="action-btn material-symbols-rounded" title="Diğer">more_vert</button>
            </div>
        </div>`;

        const botMsgDiv = createMessageElement(botMsgHTML, "bot-message", "loading");
        chatsContainer.appendChild(botMsgDiv);
        scrollToBottom();
        generateResponse(botMsgDiv);
    }, 600); // 600 ms delay
};

// Handle file input change (file upload)
if (fileInput) {
    fileInput.addEventListener("change", () => {
        const file = fileInput.files[0];
        if (!file) return;
        const isImage = file.type.startsWith("image/");
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            fileInput.value = "";
            const base64String = e.target.result.split(",")[1];
            fileUploadWrapper.querySelector(".file-preview").src = e.target.result;
            fileUploadWrapper.classList.add("active", isImage ? "img-attached" : "file-attached");
            userData.file = { fileName: file.name, data: base64String, mime_type: file.type, isImage };
        };
    });
}

// Cancel file upload
const cancelFileBtn = document.querySelector("#cancel-file-btn");
if (cancelFileBtn) {
    cancelFileBtn.addEventListener("click", () => {
        userData.file = {};
        if (fileUploadWrapper) fileUploadWrapper.classList.remove("file-attached", "img-attached", "active");
    });
}

// Stop Bot Response
const stopResponseBtn = document.querySelector("#stop-response-btn");
if (stopResponseBtn) {
    stopResponseBtn.addEventListener("click", () => {
        controller?.abort();
        userData.file = {};
        clearInterval(typingInterval);
        if (chatsContainer) {
            const loadingMsg = chatsContainer.querySelector(".bot-message.loading");
            if (loadingMsg) loadingMsg.classList.remove("loading");
        }
        document.body.classList.remove("bot-responding");
    });
}

// Add event listeners for form submission and file input click
if (promptForm) {
    promptForm.addEventListener("submit", handleFormSubmit);
    const addFileBtn = promptForm.querySelector("#add-file-btn");
    if (addFileBtn && fileInput) {
        addFileBtn.addEventListener("click", () => fileInput.click());
    }
}

// Auto-scroll on load if messages exist
document.addEventListener("DOMContentLoaded", () => {
    if (chatsContainer && chatsContainer.children.length > 0) {
        scrollToBottom();
        document.body.classList.add("chats-active");
        if (welcomeContainer) welcomeContainer.style.display = "none";
        if (promptArea) promptArea.classList.remove("centered");
    }
});

// Sidebar Toggle Logic
const sidebar = document.getElementById('sidebar');
const sidebarMenuBtn = document.getElementById('sidebar-menu-btn');
const mainMenuBtn = document.getElementById('main-menu-btn');

const toggleSidebar = () => {
    const isClosed = document.body.classList.toggle('sidebar-closed');
    sidebar.classList.toggle('closed', isClosed);
    localStorage.setItem('sidebarState', isClosed ? 'closed' : 'open');
};

if (sidebar && sidebarMenuBtn && mainMenuBtn) {
    // Load sidebar state from local storage
    const savedState = localStorage.getItem('sidebarState');
    // Default to open if not set, or respect saved state
    const isClosed = savedState === 'closed';

    if (isClosed) {
        document.body.classList.add('sidebar-closed');
        sidebar.classList.add('closed');

    } else {
        document.body.classList.remove('sidebar-closed');
        sidebar.classList.remove('closed');
    }

    sidebarMenuBtn.addEventListener('click', toggleSidebar);
    mainMenuBtn.addEventListener('click', toggleSidebar);
}

// Event Delegation for Message Actions (Copy, Like, Dislike)
if (chatsContainer) {
    chatsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.action-btn');
        if (!btn) return;

        const messageContent = btn.closest('.message-content');
        const textElement = messageContent.querySelector('.message-text');
        const text = textElement.textContent;

        // Copy Button
        if (btn.textContent === 'content_copy') {
            navigator.clipboard.writeText(text).then(() => {
                const originalIcon = btn.textContent;
                btn.textContent = 'check';
                setTimeout(() => btn.textContent = originalIcon, 2000);
            });
        }

        // Like/Dislike Buttons
        if (btn.textContent === 'thumb_up' || btn.textContent === 'thumb_down') {
            // Remove active class from sibling buttons
            const siblings = btn.parentElement.querySelectorAll('.action-btn');
            siblings.forEach(sib => {
                if (sib !== btn && (sib.textContent === 'thumb_up' || sib.textContent === 'thumb_down')) {
                    sib.classList.remove('active');
                    sib.style.color = ''; // Reset color
                }
            });

            // Toggle current button
            btn.classList.toggle('active');
            if (btn.classList.contains('active')) {
                btn.style.color = btn.textContent === 'thumb_up' ? '#4caf50' : '#f44336';
            } else {
                btn.style.color = '';
            }
        }

        // Refresh Button (Placeholder)
        if (btn.textContent === 'refresh') {
            // Logic to regenerate response could go here
            console.log('Regenerate requested');
        }
    });
}

// User Profile Menu Toggle
const userProfileTrigger = document.getElementById('user-profile-trigger');
const userProfileMenu = document.getElementById('user-profile-menu');

if (userProfileTrigger && userProfileMenu) {
    userProfileTrigger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        userProfileMenu.classList.toggle('active');
        userProfileTrigger.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!userProfileTrigger.contains(e.target) && !userProfileMenu.contains(e.target)) {
            userProfileMenu.classList.remove('active');
            userProfileTrigger.classList.remove('active');
        }
    });
}
