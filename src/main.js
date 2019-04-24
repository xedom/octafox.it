import './css/style.scss';

const navContainer = document.querySelector('header nav');
const navButton = navContainer.querySelector('#logo #menuicon');
const navItemsContainer = navContainer.querySelector('ul');
const sections = document.querySelectorAll('main section');

window.addEventListener('load', init);

function init() {
    navButton.addEventListener('click', x => {
        if (navContainer.classList.contains('exp')) navContainer.classList.remove('exp');
        else navContainer.classList.add('exp');
    });

    addMenuItem();
};

function addMenuItem() {
    navItemsContainer.innerHTML = "";

    sections.forEach(menuLink => {
        const li = document.createElement('LI');
        const a = document.createElement('A');
        a.href = `#${menuLink.id}`;
        a.textContent = (menuLink.id).toUpperCase();
        li.appendChild(a);
        navItemsContainer.appendChild(li);
    });
};

function createCard({ image, title, description }) {

};