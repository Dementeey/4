document.addEventListener('DOMContentLoaded', function() {
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
  return alert('this is a touch device');
}

alert('this is not a touch device');
document.documentElement.classList.add('no-touch');
})

