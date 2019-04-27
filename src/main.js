import './css/community.scss';
import './css/contattaci.scss';
import './css/header.scss';
import './css/main.scss';
import './css/progetti.scss';
import './css/teams.scss';

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

    addMenuItemByID(navItemsContainer, sections);
    createCard(sProgetti, cards.progetti);
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

function addMenuItemByID(container, sect) {
    container.innerHTML = "";

    sect.forEach(menuLink => {
        const li = document.createElement('LI');
        const a = document.createElement('A');
        a.href = `#${menuLink.id}`;
        a.textContent = (menuLink.id).toUpperCase();
        li.appendChild(a);
        container.appendChild(li);
    });
};

function createCard(container, cards) {
    container.innerHTML = "";

    cards.forEach(card => {
        const ccCard = document.createElement('DIV');
        const cccImg = document.createElement('IMG');
        const cccTit = document.createElement('H3');
        const cccDes = document.createElement('P');

        ccCard.className = 'card';
        cccImg.src = card.image;
        cccTit.textContent = card.title;
        cccDes.textContent = card.description;

        ccCard.appendChild(cccImg);
        ccCard.appendChild(cccTit);
        ccCard.appendChild(cccDes);

        container.appendChild(ccCard);
    });
};

function createItem(container, teams) {
    container.innerHTML = "";

    teams.forEach(team => {
        const tcLi = document.createElement('LI');
        const tcImg = document.createElement('IMG');
        const tcSpan = document.createElement('SPAN');
        const tcA = document.createElement('A');

        tcA.href = team.site;
        tcLi.id = team.tag;
        tcImg.src = team.logo;
        tcSpan.textContent += team.name;

        tcLi.appendChild(tcImg);
        tcLi.appendChild(tcSpan);
        tcA.appendChild(tcLi);

        container.appendChild(tcA);
    });
};