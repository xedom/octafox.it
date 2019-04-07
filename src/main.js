import './css/style.scss';

window.addEventListener('load', function () {

    const navButton = document.querySelector('header nav #logo #menuicon');
    const navContainer = document.querySelector('header nav');

    navButton.addEventListener('click', (x) => {
        if (navContainer.classList.contains('exp')) {
            console.log(navContainer.classList.contains('exp'))
            navContainer.classList.remove('exp')
        } else {
            console.log(navContainer.classList.contains('exp'))
            navContainer.classList.add('exp')
        }
    });
})

