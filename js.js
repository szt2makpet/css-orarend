function toggleDarkMode() {
    const currentMode = localStorage.getItem('mode')
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
   if (body.classList.contains('light-mode')) {
    localStorage.setItem('mode', 'light')
   }else{
    body.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark-mode');
   }
}

