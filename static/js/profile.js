document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = themeToggleBtn ? themeToggleBtn.querySelector('span') : null;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            const currentTheme = localStorage.getItem('theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
            document.body.classList.add('dark-theme');
            if (icon) {
                icon.textContent = 'light_mode';
            }
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            document.body.classList.remove('dark-theme');
            if (icon) {
                icon.textContent = 'dark_mode';
            }
        }
        localStorage.setItem('theme', theme);
    }

    // --- New Functionality ---

    // Delete AI
    document.querySelectorAll('.delete-ai-btn').forEach(btn => {
        btn.addEventListener('click', async function () {
            if (!confirm('Bu yapay zeka modelini silmek istediğinize emin misiniz?')) return;
            const id = this.dataset.id;
            try {
                const res = await fetch(`/api/ai/${id}`, { method: 'DELETE' });
                const data = await res.json();
                if (data.success) {
                    location.reload();
                } else {
                    alert('Hata: ' + (data.error || 'Silinemedi'));
                }
            } catch (e) {
                alert('Bir hata oluştu: ' + e);
            }
        });
    });

    // Delete Chat
    document.querySelectorAll('.delete-chat-btn').forEach(btn => {
        btn.addEventListener('click', async function () {
            if (!confirm('Bu sohbeti silmek istediğinize emin misiniz?')) return;
            const id = this.dataset.id;
            try {
                const res = await fetch(`/api/chat/${id}`, { method: 'DELETE' });
                const data = await res.json();
                if (data.success) {
                    location.reload();
                } else {
                    alert('Hata: ' + (data.error || 'Silinemedi'));
                }
            } catch (e) {
                alert('Bir hata oluştu: ' + e);
            }
        });
    });

    // Edit AI Modal Logic
    const modal = document.getElementById('editAiModal');
    const closeBtns = document.querySelectorAll('.close-modal, .close-modal-btn');
    const editForm = document.getElementById('editAiForm');

    if (modal) {
        // Open Modal
        document.querySelectorAll('.edit-ai-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = this.dataset.id;
                const name = this.dataset.name;
                const model = this.dataset.model;
                const key = this.dataset.key;
                const url = this.dataset.url;

                document.getElementById('edit_api_id').value = id;
                document.getElementById('edit_api_name').value = name;
                document.getElementById('edit_api_model').value = model;
                document.getElementById('edit_api_key').value = key;
                document.getElementById('edit_api_url').value = url;

                modal.classList.add('show');
            });
        });

        // Close Modal
        closeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.classList.remove('show');
            });
        });

        // Close on outside click
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });

        // Submit Edit Form
        if (editForm) {
            editForm.addEventListener('submit', async function (e) {
                e.preventDefault();
                const formData = new FormData(this);

                try {
                    const res = await fetch('/api/add_api', {
                        method: 'POST',
                        body: formData
                    });
                    const data = await res.json();
                    if (data.success) {
                        location.reload();
                    } else {
                        alert('Hata: ' + (data.error || 'Güncellenemedi'));
                    }
                } catch (e) {
                    alert('Bir hata oluştu: ' + e);
                }
            });
        }
    }

    // Profile Form Submission
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const formData = new FormData(this);

            try {
                const res = await fetch('/api/update_profile', {
                    method: 'POST',
                    body: formData
                });
                const data = await res.json();
                if (data.success) {
                    alert('Profil başarıyla güncellendi.');
                    location.reload();
                } else {
                    alert('Hata: ' + (data.error || 'Güncellenemedi'));
                }
            } catch (e) {
                alert('Bir hata oluştu: ' + e);
            }
        });
    }

});
