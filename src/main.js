import './css/html.scss';
import './css/community.scss';
import './css/contattaci.scss';
import './css/header.scss';
import './css/main.scss';
import './css/progetti.scss';
import './css/teams.scss';
import './css/cover.scss';

import './img/logo.png';

import projectsData from './data/projects.json';
import teamsData from './data/teams.json';

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
window.onscroll = scrollEvent;

function init() {
    header.innerHTML += templateNavbar();
    header.innerHTML += templateCover();

    main.innerHTML += templateChisiamo();
    main.innerHTML += templateCommunitylinks();
    main.innerHTML += templateProjects(projectsData);
    main.innerHTML += templateTeams(teamsData);
    main.innerHTML += templateContattaci();
};

function scrollEvent(e) {
    const nav = header.getElementsByTagName('nav')[0];
    if (window.pageYOffset > 100) {
        navbarChanger(nav,true);
    } else {
        navbarChanger(nav,false);
    }
};


function navbarChanger(navbar, state) {
    const links = Array.from(navbar.getElementsByTagName('a'));

    if (state) {
        navbar.classList.add('withbg');
        links.forEach(link => {
            link.classList.add('withbg');
        });
    } else {
        navbar.classList.remove('withbg');
        links.forEach(link => {
            link.classList.remove('withbg');
        });
    }

};