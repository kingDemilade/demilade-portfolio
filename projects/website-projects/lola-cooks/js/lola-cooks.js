const ctaButton = document.querySelector('.button-pop');

window.addEventListener('scroll', () => {
  const rect = ctaButton.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) {
    ctaButton.classList.add('active');
  }
});