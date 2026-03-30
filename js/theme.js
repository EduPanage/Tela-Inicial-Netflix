const button = document.getElementById('theme-button');

button.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});