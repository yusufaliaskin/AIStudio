document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const resultsList = document.getElementById('results-list');
    const items = resultsList.querySelectorAll('.result-item');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        items.forEach(item => {
            const title = item.getAttribute('data-title').toLowerCase();
            if (title.includes(query)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
