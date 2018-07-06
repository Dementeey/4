document.addEventListener('DOMContentLoaded', function() {
  // eslint-disable-next-line
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return document.documentElement.classList.add('touch');
  }

  return document.documentElement.classList.add('no-touch');
})
