import './css/style.scss';

import cards from './data/cards.json';
import teams from './data/teams.json';

const navContainer = document.querySelector('header nav');
const navButton = navContainer.querySelector('#logo #menuicon');
const navItemsContainer = navContainer.querySelector('ul');
const sections = document.querySelectorAll('main section');
const sProgetti = document.querySelector('section#progetti .content .cards');
const sTeams = document.querySelector('section#teams .content ul');

window.addEventListener('load', init);

function init() {
    navButton.addEventListener('click', menuSlider);
    navItemsContainer.addEventListener('click', hideMenu);

    addMenuItem();
    createCard(cards.progetti[0]);
    createItem(sTeams, teams.teams);
};

function menuSlider(x) {
    if (navContainer.classList.contains('exp')) navContainer.classList.remove('exp');
    else navContainer.classList.add('exp');
};

function hideMenu(x) {
    if (x.target.tagName === 'A') {
        navContainer.classList.remove('exp');
    };
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
    sProgetti.innerHTML = "";

    const ccCard = document.createElement('DIV');
    ccCard.className = 'card';
    const cccImg = document.createElement('IMG');
    cccImg.src = image;

    const cccTit = document.createElement('H3');
    cccTit.textContent = title;

    const cccDes = document.createElement('P');
    cccDes.textContent = description;

    ccCard.appendChild(cccImg);
    ccCard.appendChild(cccTit);
    ccCard.appendChild(cccDes);

    sProgetti.appendChild(ccCard);
};

function createItem(container, teams) {
    container.innerHTML = "";

    teams.forEach(team => {
        const li = document.createElement('LI');
        const img = document.createElement('IMG');
        const span = document.createElement('span');

        img.src = team.logo;
        span.textContent += team.name;

        li.appendChild(img);
        li.appendChild(span);

        container.appendChild(li);
    });

};