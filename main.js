
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const arrowButtonUp = document.getElementById('footer_button_arrow');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

arrowButtonUp.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"});
} )

