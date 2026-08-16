// Click-to-zoom lightbox for figures
(function () {
  var box = document.querySelector('.lightbox');
  if (!box) return;
  var bigImg = box.querySelector('img');
  var closeBtn = box.querySelector('.lightbox-close');

  function open(src, alt) {
    bigImg.src = src;
    bigImg.alt = alt || '';
    box.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function close() {
    box.hidden = true;
    bigImg.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('img[data-full]').forEach(function (img) {
    img.addEventListener('click', function () {
      open(img.getAttribute('data-full'), img.alt);
    });
  });

  closeBtn.addEventListener('click', close);
  box.addEventListener('click', function (e) {
    if (e.target === box) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !box.hidden) close();
  });
})();
