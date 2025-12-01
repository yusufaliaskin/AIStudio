document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const htmlElement = document.documentElement;

    // Function to apply theme
    window.applyTheme = function (theme) {
        if (theme === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
            document.body.classList.add('dark-theme');
            if (themeToggleBtn) {
                themeToggleBtn.querySelector('.icon').textContent = 'light_mode';
                // Optional: Update text if needed, but "Theme" is generic enough
            }
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            document.body.classList.remove('dark-theme');
            if (themeToggleBtn) {
                themeToggleBtn.querySelector('.icon').textContent = 'dark_mode';
            }
        }
        localStorage.setItem('theme', theme);

        // Update settings select if it exists
        const themeSelect = document.getElementById('theme-select');
        if (themeSelect) {
            themeSelect.value = theme;
        }
    };

    // Initial load
    const savedTheme = localStorage.getItem('theme') || 'light';
    window.applyTheme(savedTheme);

    // Event listener for sidebar button
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTheme = localStorage.getItem('theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            window.applyTheme(newTheme);
        });
    }
});
