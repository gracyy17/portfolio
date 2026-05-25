const revealElements = document.querySelectorAll('.reveal');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main .section');
const track = document.querySelector('[data-track]');
const projectCards = track ? Array.from(track.querySelectorAll('.project-card')) : [];

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

if (track && projectCards.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let currentIndex = 0;

  const slideTo = (index) => {
    const cardWidth = projectCards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const offset = (cardWidth + gap) * index;

    track.style.transform = `translateX(-${offset}px)`;
  };

  slideTo(currentIndex);

  window.setInterval(() => {
    currentIndex = (currentIndex + 1) % projectCards.length;
    slideTo(currentIndex);
  }, 3600);
}

window.addEventListener('scroll', activateNavLink, { passive: true });
activateNavLink();

document.getElementById('year').textContent = new Date().getFullYear();
