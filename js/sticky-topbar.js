window.addEventListener('scroll', function (scroll) {
    if (window.scrollY > 0) {
        sticky.classList.add('sticky')
    } else {
        sticky.classList.remove('sticky')
    }
})