const topbar = document.querySelector('.topbar');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const hero = document.querySelector('.hero');

addEventListener('scroll', () => topbar.classList.toggle('is-scrolled', scrollY > 24), { passive: true });

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menu.setAttribute('aria-expanded', String(open));
});

nav?.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menu?.setAttribute('aria-expanded', 'false');
});

document.querySelector('#replay')?.addEventListener('click', () => {
  const animated = [
    document.querySelector('.logo-morph'),
    document.querySelector('.logo-aura'),
    document.querySelector('.hero-goat')
  ].filter(Boolean);
  animated.forEach((el) => { el.style.animation = 'none'; });
  void hero.offsetWidth;
  animated.forEach((el) => { el.style.animation = ''; });
});

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: .14 });

document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));
