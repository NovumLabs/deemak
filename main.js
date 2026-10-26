/* दीमक पत्रिका | language switch, mobile menu, sub-menu highlight, feedback form */
(function () {
  var root = document.documentElement, saved = 'hi';
  try { saved = localStorage.getItem('deemak-lang') || 'hi'; } catch (e) {}
  function setLang(l) {
    root.setAttribute('data-lang', l);
    root.lang = l === 'en' ? 'en' : 'hi';
    document.querySelectorAll('.pill button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.lang === l);
    });
    try { localStorage.setItem('deemak-lang', l); } catch (e) {}
  }
  setLang(saved);
  document.querySelectorAll('.pill button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });

  var scrim = document.getElementById('sc'), mb = document.getElementById('mb');
  if (mb) mb.addEventListener('click', function () { document.body.classList.add('open'); });
  if (scrim) scrim.addEventListener('click', function () { document.body.classList.remove('open'); });
  document.querySelectorAll('.dr a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('open'); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') document.body.classList.remove('open'); });

  var links = document.querySelectorAll('.sub a[href^="#"]');
  if (links.length && 'IntersectionObserver' in window) {
    var map = {};
    links.forEach(function (l) { map[l.getAttribute('href').slice(1)] = l; });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('on'); });
          map[en.target.id].classList.add('on');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    Object.keys(map).forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
  }

  var form = document.getElementById('fb');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var body = f.msg.value + '\n\n— ' + f.name.value + (f.email.value ? ' <' + f.email.value + '>' : '');
    location.href = 'mailto:' + form.dataset.to + '?subject=' + encodeURIComponent(f.topic.value) + '&body=' + encodeURIComponent(body);
  });
})();