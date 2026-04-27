// Hamburger menu
function toggleDrawer() {
  const drawer = document.getElementById('navDrawer');
  const hamburger = document.getElementById('hamburger');
  drawer.classList.toggle('open');
  hamburger.classList.toggle('open');
  document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// Staggered reveal for grids
document.querySelectorAll('.why-grid .why-card, .who-grid .who-card, .offer-grid .offer-item').forEach((el, i) => {
  el.style.transitionDelay = (i * 80) + 'ms';
});
