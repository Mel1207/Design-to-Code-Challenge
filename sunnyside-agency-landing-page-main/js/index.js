const navbarMenu = document.querySelector('.navbar-menu');
const menuContainer = document.querySelector('.mobile-menu-container');

const showMenu = () => {
    menuContainer.classList.toggle('mobile-menu-show');
    navbarMenu.classList.toggle('navbar-menu-clicked');
}
navbarMenu.addEventListener('click', showMenu)

// GSAP
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

tl.from('.header-text', {
    y: '-50%',
    opacity: 0,
    duration: 1
})