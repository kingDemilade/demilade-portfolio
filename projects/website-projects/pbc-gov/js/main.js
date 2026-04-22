

/* === Scroll Reveal for Cards === */
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
  });
});

/* === Stagger + Reduced Motion === */
document.addEventListener('DOMContentLoaded', function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cards = document.querySelectorAll('.card');

  cards.forEach((card, index) => {
    if (!prefersReducedMotion) {
      card.style.transitionDelay = `${index * 60}ms`;
    } else {
      card.style.transition = 'none';
      card.style.opacity = 1;
      card.style.transform = 'none';
    }
  });
});

/* === Hover/Focus State (a11y friendly) === */
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('is-hover'));
    card.addEventListener('mouseleave', () => card.classList.remove('is-hover'));
    card.addEventListener('focusin', () => card.classList.add('is-hover'));
    card.addEventListener('focusout', () => card.classList.remove('is-hover'));
  });
});