/* SELECT ELEMENTS */
const mainNav = document.querySelector('.navigation ul');
const hamButton = document.querySelector('#menu');
const navLinks = document.querySelectorAll('.navigation a');

/* TOGGLE MENU */
hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamButton.classList.toggle('open');
    document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : 'auto';
});

/* CLOSE MENU WHEN A LINK IS CLICKED */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        hamButton.classList.remove('open');
    });
});