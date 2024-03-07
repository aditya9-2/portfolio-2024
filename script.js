var typed = new Typed('#element', {
    strings: ['Web Developer', 'Enthusiast Lerner', 'Software Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul.nav-links');
const socialLinks = document.querySelector('.social');

menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
});
