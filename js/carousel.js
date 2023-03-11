const btnControl = document.querySelector('.btn-control');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const numCurrent = document.querySelector('.num-current');
const numTotal = document.querySelector('.num-total');
const progressGageSm = document.querySelector('.sm-gage');
const progressGageLg = document.querySelector('.lg-gage');

const carouselList = document.querySelector('.carousel-list');
const carouselItemsLength = document.querySelectorAll('.carousel-list-item').length;
const controlBox = document.querySelector('.control-box');

let index = 0;
let cIntervId;

/**
 * TODO
 * 마우스 드래그 기능
 * 처음에서 마지막, 마지막에서 처음 이동 수정
 */


init();

controlBox.addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON') {
        return;
    }
    const target = e.target;
    if (target.classList.contains('btn-control')) {
        btnControl.classList.toggle('stop');
        btnControl.classList.contains('stop') ? stopCarousel() : playCarousel();
    } else if (target.classList.contains('btn-prev')) {
        slideImg('prev');
    } else if (target.classList.contains('btn-next')) {
        slideImg();
    }
});

function moveGage() {
    progressGageSm.style.width = `${((index + 1) / carouselItemsLength) * 100}%`;
    progressGageLg.style.width = `${((index + 1) / carouselItemsLength) * 100}%`;
}

function printCurrentNum() {
    numCurrent.textContent = index + 1;
}

function playCarousel() {
    cIntervId = setInterval(slideImg, 3000);
}

function stopCarousel() {
    clearInterval(cIntervId);
}

function restartCarousel() {
    stopCarousel();
    playCarousel();
}

function slideImg(type = 'next') {
    !btnControl.classList.contains('stop') ? restartCarousel() : null;

    if (type === 'prev') {
        index = index > 0 ? (index - 1) : (carouselItemsLength - 1);
    } else if (type === 'next') {
        index = index < (carouselItemsLength - 1) ? (index + 1) : 0;
    }

    printCurrentNum()
    carouselList.style.transform = `translateX(-${index}00%)`;
    moveGage();
}

function init() {
    numTotal.textContent = carouselItemsLength;
    printCurrentNum();
    moveGage();
    playCarousel();
}
let startTouchX = 0;
let endTouchX = 0;

carouselList.addEventListener('touchstart', function (event) {
    startTouchX = event.touches[0].clientX;
});

carouselList.addEventListener('touchmove', function (event) {
    endTouchX = event.touches[0].clientX;
});

carouselList.addEventListener('touchend', function (event) {
    if (endTouchX - startTouchX > 50) {
        slideImg('prev')
    } else if (startTouchX - endTouchX > 50) {
        slideImg();
    }
});