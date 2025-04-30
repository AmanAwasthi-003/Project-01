window.addEventListener('click', (e) => {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(e.target)) {
        document.querySelector('.dropdown-menu').style.display = 'none';
    }
});

const dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.addEventListener('click', (e) => {
    e.preventDefault();
    const menu = document.querySelector('.dropdown-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});