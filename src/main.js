const style = require('./css/style.scss');

const navButton = document.querySelector('header nav #logo #menuicon');
const navContainer = document.querySelector('header nav');

navButton.addEventListener('click', (x) => {
    if (navContainer.classList.contains('exp'))
        return navContainer.classList.remove('exp');
    return navContainer.classList.add('exp');
});
