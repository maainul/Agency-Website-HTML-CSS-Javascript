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