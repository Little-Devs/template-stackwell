(function () {
  var body = document.body;
  var btn = document.querySelector('.nav-toggle');
  var menu = document.getElementById('site-menu');

  function setOpen(open) {
    body.classList.toggle('menu-open', open);
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  if (btn && menu) {
    btn.addEventListener('click', function () {
      setOpen(!body.classList.contains('menu-open'));
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  var path = location.pathname.replace(/\/+$/, '') || '/';
  var links = document.querySelectorAll('.site-nav a[href], .foot-nav a[href]');
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute('href').replace(/\/+$/, '') || '/';
    if (href === path) links[i].setAttribute('aria-current', 'page');
  }
})();
