const revealElements = document.querySelectorAll('.reveal');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main .section');
const track = document.querySelector('[data-track]');
const nextButton = document.querySelector('[data-next]');
const prevButton = document.querySelector('[data-prev]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealElements.forEach((item) => observer.observe(item));

const activateNavLink = () => {
  let current = '';

  sections.forEach((section) => {
    const top = section.offsetTop - 140;
    const height = section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < top + height) {
      current = section.getAttribute('id') || '';
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${current}`);
  });
};

if (track && nextButton && prevButton) {
  const scrollAmount = () => Math.max(track.clientWidth * 0.82, 320);

  nextButton.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });

  prevButton.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });
}

window.addEventListener('scroll', activateNavLink, { passive: true });
activateNavLink();

document.getElementById('year').textContent = new Date().getFullYear();
