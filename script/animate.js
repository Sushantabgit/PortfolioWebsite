window.addEventListener('scroll', () => {
    let profileContent = document.querySelector('.profile');
    let profileContentPosition = profileContent.getBoundingClientRect().top;
    let profileScreenPosition = window.innerHeight / 2;
    if (profileContentPosition < profileScreenPosition) {
        profileContent.classList.add('profile-active');
    }

});

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
