<<<<<<< HEAD
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


=======
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


>>>>>>> b7e050231fd2f52901f2694ec368c349b8f0fd42
