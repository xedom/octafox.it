import './css/style.scss';

window.addEventListener('load', menuSlider);

function menuSlider() {
    const navButton = document.querySelector('header nav #logo #menuicon');
    const navContainer = document.querySelector('header nav');

    navButton.addEventListener('click', x => {
        if (navContainer.classList.contains('exp')) navContainer.classList.remove('exp');
        else navContainer.classList.add('exp');
    });
}