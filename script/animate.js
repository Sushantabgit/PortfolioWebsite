/* Profile Animation */
window.addEventListener('scroll', () => {
    let profileContent = document.querySelector('.profile');
    let profileContentPosition = profileContent.getBoundingClientRect().top;
    let profileScreenPosition = window.innerHeight / 2;
    if (profileContentPosition < profileScreenPosition) {
        profileContent.classList.add('profile-active');
    }

});

/* Tools Animation */
window.addEventListener('scroll', () => {
    let Econtent = document.querySelector('.abilities');
    let EcontentPosition = Econtent.getBoundingClientRect().top;
    let EscreenPosition = window.innerHeight / 4;
    if (EcontentPosition < EscreenPosition) {
        Econtent.classList.add('abilities-active');
    }

});

window.addEventListener('scroll', () => {
    let Econtent = document.querySelector('.abilities2');
    let EcontentPosition = Econtent.getBoundingClientRect().top;
    let EscreenPosition = window.innerHeight / 4;
    if (EcontentPosition < EscreenPosition) {
        Econtent.classList.add('abilities-active');
    }

});

/* Education Animation */
window.addEventListener('scroll', () => {
    let Econtent = document.querySelector('#e1');
    let EcontentPosition = Econtent.getBoundingClientRect().top;
    let EscreenPosition = window.innerHeight / 2;
    if (EcontentPosition < EscreenPosition) {
        Econtent.classList.add('e-row-active');
    }

});

window.addEventListener('scroll', () => {
    let Econtent = document.querySelector('#e2');
    let EcontentPosition = Econtent.getBoundingClientRect().top;
    let EscreenPosition = window.innerHeight / 2;
    if (EcontentPosition < EscreenPosition) {
        Econtent.classList.add('e-row-active');
    }

});

window.addEventListener('scroll', () => {
    let Econtent = document.querySelector('#e3');
    let EcontentPosition = Econtent.getBoundingClientRect().top;
    let EscreenPosition = window.innerHeight / 2;
    if (EcontentPosition < EscreenPosition) {
        Econtent.classList.add('e-row-active');
    }

});

/* Project Cards Animation */

window.addEventListener('scroll', () => {
    let Econtent = document.querySelector('#cc1');
    let EcontentPosition = Econtent.getBoundingClientRect().top;
    let EscreenPosition = window.innerHeight / 1.1;
    if (EcontentPosition < EscreenPosition) {
        Econtent.classList.add('card-container-active');
    }

});

window.addEventListener('scroll', () => {
    let Econtent = document.querySelector('#cc2');
    let EcontentPosition = Econtent.getBoundingClientRect().top;
    let EscreenPosition = window.innerHeight / 1.3;
    if (EcontentPosition < EscreenPosition) {
        Econtent.classList.add('card-container-active');
    }

});

window.addEventListener('scroll', () => {
    let Econtent = document.querySelector('#cc3');
    let EcontentPosition = Econtent.getBoundingClientRect().top;
    let EscreenPosition = window.innerHeight / 1.5;
    if (EcontentPosition < EscreenPosition) {
        Econtent.classList.add('card-container-active');
    }

});