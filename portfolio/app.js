var navbar = document.getElementById('navbar');
var container = document.getElementById('container-nav');

function openNavbar( ) {
    navbar.style.width = '240px';
    container.style.marginLeft = '240px';
}

function closeNavbar( ) {
    navbar.style.width = '0';
    container.style.margin = 'auto';
}

const loader = document.querySelector('.loader');
const main = document.querySelector('.main-opacity');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1), 50);
    }, 4000);
}

init();
