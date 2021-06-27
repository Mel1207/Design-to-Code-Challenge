const navbarMenu = document.querySelector('.navbar-menu');
const menuContainer = document.querySelector('.mobile-menu-container');


const showMenu = () => {
    menuContainer.classList.toggle('mobile-menu-show');
    navbarMenu.classList.toggle('navbar-menu-clicked');
}
navbarMenu.addEventListener('click', showMenu)