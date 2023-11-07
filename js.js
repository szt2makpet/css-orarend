function toggleDarkMode() {
    const body = document.querySelector('body');
    const isLightMode = body.classList.contains('light-mode');

    if (isLightMode) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('mode', 'light');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const storedMode = localStorage.getItem('mode');
    if (storedMode === 'dark') {
        document.querySelector('body').classList.add('dark-mode');
    }
});
