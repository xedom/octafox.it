import './css/community.scss';
import './css/contattaci.scss';
import './css/header.scss';
import './css/main.scss';
import './css/progetti.scss';
import './css/teams.scss';

import cards from './data/cards.json';
import teams from './data/teams.json';

window.addEventListener('load', init);

function init() {
    navButton.addEventListener('click', menuSlider);
    navItemsContainer.addEventListener('click', hideMenu);
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