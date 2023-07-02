const btnMenu = document.querySelector('.btn-menu');
const btnClose = document.querySelector('.btn-close');
const menu = document.querySelector('.global-header-menu');

btnMenu.addEventListener('click', () => {
  menu.classList.add('is-active');
});

btnClose.addEventListener('click', () => {
  menu.classList.remove('is-active');
});
