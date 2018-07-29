// Variables
const cardBtn      = document.querySelectorAll('.card__btn');
const modal        = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const modalCloseBtn  = document.querySelector('.card-modal__close-btn');


// Function
const showModal = () => {
  console.log('click');

  if ( modal.classList.contains('modal--hide') ) {
    document.body.style.overflow = 'hidden';
    modal.classList.remove('modal--hide');
    return
  }

  document.body.style.overflow = '';
  modal.classList.add('modal--hide');
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
for (let i = 0; i < cardBtn.length; i += 1) {
  cardBtn[i].addEventListener('click', showModal);
}
modalOverlay.addEventListener('click', showModal);
modalCloseBtn.addEventListener('click', showModal);
