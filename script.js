
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Project Card Animation
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
