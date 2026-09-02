/* --- Mobile nav toggle --- */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('open');
    });
  });
})();

/* --- Noun Project service icons --- */
(function () {
  var pageIcons = document.querySelectorAll('.service-icon');
  var icons = location.pathname.endsWith('sluzby.html')
    ? ['icon-coffee-cup.png', 'icon-love-dog.png', 'icon-pet-shop.png', 'icon-sun.png']
    : location.pathname.endsWith('index.html') || location.pathname.endsWith('/')
      ? ['icon-dog-groom.png', 'icon-consultation.png', 'icon-pet-book.png']
      : [];

  icons.forEach(function (icon, index) {
    if (!pageIcons[index]) return;
    pageIcons[index].innerHTML = '<img src="' + icon + '" alt="">';
  });
})();

/* --- Image fallback: swap to placeholder when image is missing --- */
(function () {
  var imgSlots = document.querySelectorAll('.img-slot');

  imgSlots.forEach(function (slot) {
    var img = slot.querySelector('img');
    if (!img) return;

    // If image has no src/data-src, apply placeholder immediately
    var src = img.getAttribute('data-src') || img.getAttribute('src');
    if (!src) {
      slot.classList.add('slot-placeholder');
      return;
    }

    if (!img.getAttribute('src')) img.src = src;
    var testImg = new Image();
    testImg.onload = function () {
      img.style.opacity = '1';
      slot.style.background = 'none';
    };
    testImg.onerror = function () {
      slot.classList.add('slot-placeholder');
      img.style.display = 'none';
    };
    testImg.src = src;
  });
})();

/* --- Scroll reveal --- */
(function () {
  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(function (el) { observer.observe(el); });
})();
