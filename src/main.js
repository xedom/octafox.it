import './css/html.scss';
import './css/community.scss';
import './css/contattaci.scss';
import './css/header.scss';
import './css/main.scss';
import './css/progetti.scss';
import './css/teams.scss';
import './css/cover.scss';

import cards from './data/cards.json';
import teams from './data/teams.json';

import templateChisiamo from './components/chisiamo.pug';
import templateCommunitylinks from './components/communitylinks.pug';
import templateContattaci from './components/contattaci.pug';
import templateCover from './components/cover.pug';
import templateNavbar from './components/navbar.pug';
import templateProjects from './components/projects.pug';
import templateTeams from './components/teams.pug';

const header = document.querySelector('header');
const main = document.querySelector('main');

window.addEventListener('load', init);

function init() {

    header.innerHTML += templateNavbar();
    header.innerHTML += templateCover();

    main.innerHTML += templateChisiamo();
    main.innerHTML += templateCommunitylinks();
    main.innerHTML += templateProjects();
    main.innerHTML += templateTeams();
    main.innerHTML += templateContattaci();

    // navButton.addEventListener('click', menuSlider);
    // navItemsContainer.addEventListener('click', hideMenu);
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