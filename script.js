(function () {
  var burger = document.querySelector('.rs-burger');
  var links = document.getElementById('rs-links');

  function setMenu(open) {
    links.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  burger.addEventListener('click', function () {
    setMenu(!links.classList.contains('open'));
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 991) { setMenu(false); }
  });

  document.querySelectorAll('.rs-side a[href^="#"], a.rs-btn[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function () {
      setMenu(false);
    });
  });
})();