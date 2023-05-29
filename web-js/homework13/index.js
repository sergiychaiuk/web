const themeToggler = document.querySelector(".theme-toggler")
const darkMode = localStorage.getItem('dark-mode')

if (darkMode) {
    document.body.classList.add(darkMode)
}

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    const darkMode = document.body.classList.contains('dark-theme-variables') ? 'dark-theme-variables' : '';

    localStorage.setItem('dark-mode', darkMode);
})