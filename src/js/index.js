// Variables
const cardBtns       = document.querySelectorAll('.card__btn');
const modal         = document.querySelector('.modal');
const modalOverlay  = document.querySelector('.modal__overlay');
const modalCloseBtn = document.querySelector('.card-modal__close-btn');
const burgerWrap    = document.querySelector('.burger-wrap');
const burger        = document.querySelector('.burger');
const navMenu       = document.querySelector('.page-nav__items');


// Function
const showModal = () => {

  if ( modal.classList.contains('modal--hide') ) {
    document.body.style.overflow = 'hidden';
    modal.classList.remove('modal--hide');
    return
  }

  document.body.style.overflow = '';
  modal.classList.add('modal--hide');
  return
}
const showMobileMenu = () => {

  if ( burger.classList.contains('burger--active') ) {
    document.body.style.overflow = '';
    burger.classList.remove('burger--active');
    navMenu.classList.remove('page-nav__items--mobile-menu');
    return
  }

  document.body.style.overflow = 'hidden';
  burger.classList.add('burger--active');
  navMenu.classList.add('page-nav__items--mobile-menu');
  return
}

// Events
document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return document.documentElement.classList.add('touch');
  }

  return document.documentElement.classList.add('no-touch');
})
document.addEventListener('keydown', (e) => {
  const keycode = e.keyCode || e.which;

  if (keycode === 27) { // key 'Esc'
    e.preventDefault;
    showModal();
  }
})
for (let i = 0; i < cardBtns.length; i += 1) {
  cardBtns[i].addEventListener('click', showModal);
}
modalOverlay.addEventListener('click', showModal);
modalCloseBtn.addEventListener('click', showModal);

burgerWrap.addEventListener('click', showMobileMenu);
