document.addEventListener("DOMContentLoaded", function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = btn.dataset.filter;

            items.forEach(item => {
                item.style.display = 'none';

                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                }
            });

            filterBtns.forEach(btn => {
                btn.classList.remove('active');
            });

            btn.classList.add('active');
        });
    });
});