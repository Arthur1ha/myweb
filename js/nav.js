(function () {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove('active'));
          const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { rootMargin: '-25% 0px -65% 0px' }
  );

  sections.forEach((s) => observer.observe(s));

  // Hamburger toggle
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinksEl = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinksEl.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu on link click (mobile)
  navLinksEl.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinksEl.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
})();
