const btnOpen = document.querySelector('.global-header .gnb-btn');
const btnClose = document.querySelector('.gnb-menu .gnb-btn');
const gnbMenu = document.querySelector('.gnb-menu');
const details = document.querySelectorAll('.gnb-menu details');

btnOpen.addEventListener('click', () => {
    gnbMenu.classList.add('is-open');
    bodyOverflow();
})

btnClose.addEventListener('click', () => {
    gnbMenu.classList.remove('is-open');
    bodyOverflow();
    details.forEach(detail => {
        detail.open = false;
    })
})

function bodyOverflow() {
    if (gnbMenu.classList.contains('is-open')) {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'auto';
    }
}