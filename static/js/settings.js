document.addEventListener('DOMContentLoaded', function () {
    // Theme Selection
    const themeSelect = document.getElementById('theme-select');
    const htmlElement = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (themeSelect) {
        themeSelect.value = savedTheme;
        applyTheme(savedTheme);

        themeSelect.addEventListener('change', function () {
            const selectedTheme = this.value;
            if (selectedTheme === 'system') {
                // Simple system detection
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                applyTheme(systemTheme);
                localStorage.setItem('theme', systemTheme);
            } else {
                applyTheme(selectedTheme);
            }
        });
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
            document.body.classList.add('dark-theme');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            document.body.classList.remove('dark-theme');
        }
        localStorage.setItem('theme', theme);
    }

    // Sidebar Expand on Search Toggle
    const sidebarToggle = document.getElementById('sidebar-expand-toggle');
    if (sidebarToggle) {
        const expandOnSearch = localStorage.getItem('expandSidebarOnSearch') !== 'false'; // Default true
        sidebarToggle.checked = expandOnSearch;

        sidebarToggle.addEventListener('change', function () {
            localStorage.setItem('expandSidebarOnSearch', this.checked);
        });
    }

    // Language Selection
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        const savedLang = localStorage.getItem('language') || 'tr';
        languageSelect.value = savedLang;

        languageSelect.addEventListener('change', function () {
            const lang = this.value;
            if (typeof updateLanguage === 'function') {
                updateLanguage(lang);
            } else {
                localStorage.setItem('language', lang);
                location.reload();
            }
        });
    }

    // Account Settings Modal Logic
    const accountModal = document.getElementById('account-settings-modal');
    const profileTrigger = document.getElementById('profile-card-trigger');
    const closeAccountModal = document.getElementById('close-account-modal');

    // Form Logic
    const accountForm = document.getElementById('account-settings-form');
    const saveRow = document.getElementById('save-changes-row');
    const usernameInput = document.getElementById('username-input');
    const phoneInput = document.getElementById('phone-input');

    // Store initial values to check for changes
    let initialUsername = usernameInput ? usernameInput.value : '';
    let initialPhone = phoneInput ? phoneInput.value : '';

    function checkForChanges() {
        if (!usernameInput || !phoneInput) return;

        const currentUsername = usernameInput.value;
        const currentPhone = phoneInput.value;

        if (currentUsername !== initialUsername || currentPhone !== initialPhone) {
            saveRow.style.display = 'flex';
        } else {
            saveRow.style.display = 'none';
        }
    }

    if (usernameInput) {
        usernameInput.addEventListener('input', checkForChanges);
    }

    if (phoneInput) {
        phoneInput.addEventListener('input', checkForChanges);
    }

    if (accountForm) {
        accountForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData();
            if (usernameInput) formData.append('username', usernameInput.value);
            if (phoneInput) formData.append('phone', phoneInput.value);

            fetch('/api/update_profile', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        initialUsername = usernameInput.value;
                        initialPhone = phoneInput.value;
                        saveRow.style.display = 'none';
                        alert('Değişiklikler başarıyla kaydedildi.');
                        // Update UI text elsewhere if needed
                        const profileName = document.querySelector('.profile-info .username');
                        if (profileName) profileName.textContent = initialUsername;
                    } else {
                        alert('Hata: ' + (data.error || 'Bilinmeyen bir hata oluştu.'));
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Bir hata oluştu.');
                });
        });
    }

    // Delete Account Logic
    // Select the delete button more specifically if possible, or rely on structure
    const deleteBtn = document.querySelector('.modal-action-row button.red-outline:last-of-type');

    if (deleteBtn) {
        deleteBtn.addEventListener('click', function () {
            // Use a generic message or translated one if possible, for now hardcoded or simple
            if (confirm('Hesabınızı silmek istediğinizden emin misiniz? / Are you sure you want to delete your account?')) {
                fetch('/api/delete_account', {
                    method: 'POST'
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            window.location.href = '/login';
                        } else {
                            alert('Hata: ' + (data.error || 'Hesap silinemedi.'));
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert('Bir hata oluştu.');
                    });
            }
        });
    }

    if (profileTrigger && accountModal) {
        profileTrigger.addEventListener('click', function () {
            accountModal.classList.add('active');
        });
    }

    if (closeAccountModal && accountModal) {
        closeAccountModal.addEventListener('click', function () {
            accountModal.classList.remove('active');
        });
    }

    if (accountModal) {
        accountModal.addEventListener('click', function (e) {
            if (e.target === accountModal) {
                accountModal.classList.remove('active');
            }
        });
    }

    // Saved Prompts Logic
    const promptsModal = document.getElementById('saved-prompts-modal');
    const promptsTrigger = document.getElementById('saved-prompts-trigger');
    const closePromptsModal = document.getElementById('close-prompts-modal');
    const promptsList = document.getElementById('prompts-list');
    const addPromptBtn = document.getElementById('add-prompt-btn');
    const cancelPromptBtn = document.getElementById('cancel-prompt-btn');
    const promptFormView = document.getElementById('prompt-form-view');
    const promptsListView = document.getElementById('prompts-list-view');
    const promptForm = document.getElementById('prompt-form');

    if (promptsTrigger && promptsModal) {
        promptsTrigger.addEventListener('click', function () {
            promptsModal.classList.add('active');
            loadPrompts();
        });
    }

    if (closePromptsModal && promptsModal) {
        closePromptsModal.addEventListener('click', function () {
            promptsModal.classList.remove('active');
            resetPromptForm();
        });
    }

    if (promptsModal) {
        promptsModal.addEventListener('click', function (e) {
            if (e.target === promptsModal) {
                promptsModal.classList.remove('active');
                resetPromptForm();
            }
        });
    }

    if (addPromptBtn) {
        addPromptBtn.addEventListener('click', function () {
            showPromptForm();
        });
    }

    if (cancelPromptBtn) {
        cancelPromptBtn.addEventListener('click', function () {
            showPromptsList();
        });
    }

    if (promptForm) {
        promptForm.addEventListener('submit', function (e) {
            e.preventDefault();
            savePrompt();
        });
    }

    function loadPrompts() {
        if (!promptsList) return;

        promptsList.innerHTML = '<div style="text-align:center; padding: 20px;">Loading...</div>';

        fetch('/api/prompts')
            .then(response => response.json())
            .then(prompts => {
                renderPrompts(prompts);
            })
            .catch(error => {
                console.error('Error loading prompts:', error);
                promptsList.innerHTML = '<div style="color:red; text-align:center;">Error loading prompts</div>';
            });
    }

    function renderPrompts(prompts) {
        promptsList.innerHTML = '';

        if (prompts.length === 0) {
            promptsList.innerHTML = '<div style="text-align:center; padding: 20px; color: var(--subheading-color);">No saved prompts yet.</div>';
            return;
        }

        prompts.forEach(prompt => {
            const item = document.createElement('div');
            item.className = `prompt-item ${prompt.is_active ? 'active' : ''}`;
            item.innerHTML = `
                <div class="prompt-info" onclick="activatePrompt(${prompt.id})">
                    <div class="prompt-title-row">
                        <span class="prompt-title">${prompt.title}</span>
                        ${prompt.is_active ? '<span class="active-badge">Active</span>' : ''}
                    </div>
                    <div class="prompt-preview">${prompt.content.substring(0, 60)}${prompt.content.length > 60 ? '...' : ''}</div>
                </div>
                <div class="prompt-actions">
                    <button class="icon-btn edit-prompt-btn" title="Edit">
                        <span class="material-symbols-rounded">edit</span>
                    </button>
                    <button class="icon-btn delete-prompt-btn" title="Delete">
                        <span class="material-symbols-rounded">delete</span>
                    </button>
                </div>
            `;

            // Edit button
            item.querySelector('.edit-prompt-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                editPrompt(prompt);
            });

            // Delete button
            item.querySelector('.delete-prompt-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                deletePrompt(prompt.id);
            });

            promptsList.appendChild(item);
        });
    }

    window.activatePrompt = function (id) {
        fetch(`/api/prompts/${id}/activate`, { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    loadPrompts();
                }
            });
    };

    function savePrompt() {
        const id = document.getElementById('prompt-id').value;
        const title = document.getElementById('prompt-title').value;
        const content = document.getElementById('prompt-content').value;

        const url = id ? `/api/prompts/${id}` : '/api/prompts';
        const method = id ? 'PUT' : 'POST';

        fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showPromptsList();
                    loadPrompts();
                } else {
                    alert('Error: ' + data.error);
                }
            })
            .catch(error => console.error('Error:', error));
    }

    function deletePrompt(id) {
        if (!confirm('Are you sure you want to delete this prompt?')) return;

        fetch(`/api/prompts/${id}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    loadPrompts();
                } else {
                    alert('Error deleting prompt');
                }
            });
    }

    function editPrompt(prompt) {
        document.getElementById('prompt-id').value = prompt.id;
        document.getElementById('prompt-title').value = prompt.title;
        document.getElementById('prompt-content').value = prompt.content;
        showPromptForm();
    }

    function showPromptForm() {
        promptsListView.style.display = 'none';
        promptFormView.style.display = 'block';
    }

    function showPromptsList() {
        promptFormView.style.display = 'none';
        promptsListView.style.display = 'block';
        resetPromptForm();
    }

    function resetPromptForm() {
        document.getElementById('prompt-id').value = '';
        document.getElementById('prompt-title').value = '';
        document.getElementById('prompt-content').value = '';
    }
});
