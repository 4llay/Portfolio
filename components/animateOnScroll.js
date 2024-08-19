'use client'

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add(`mostrar`)
        } else {
            entry.target.classList.remove('mostrar')
        }
    })
});

const hiddenElements = document.querySelectorAll('.animateOnScroll');
hiddenElements.forEach((el) => observer.observe(el))


