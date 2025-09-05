const menu = document.querySelector('.fa-bars');
const navbar = document.querySelector('.small-screen');

function openNavBar() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}