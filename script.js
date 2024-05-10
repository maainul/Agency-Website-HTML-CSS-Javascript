// Scroll to Top

const scrolltp = document.getElementById('scrolltp')
scrolltp.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})

window.addEventListener('scroll', function () {
    if (window.scrollY >= 700) {
        scrolltp.style.opacity = 1
    } else {
        scrolltp.style.opacity = 0
    }
})

// Theme Change
const themeToggle = document.querySelector('.checkbox')
const body = document.querySelector('body')
// Check what save in localstorage 
// if darkmode save then add classlist darkmode
const darkMode = localStorage.getItem('dark')
if (darkMode) {
    body.classList.add('dark')
    themeToggle.checked = true
}

themeToggle.addEventListener('change', function () {
    body.classList.toggle('dark')
    // save data local storage to save theme type
    if (body.classList.contains('dark')) {
        localStorage.setItem('dark', 'active')
    } else {
        localStorage.removeItem('dark')
    }


})