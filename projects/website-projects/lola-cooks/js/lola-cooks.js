const ctaButton = document.querySelector('.button-pop');

if (ctaButton) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ctaButton.classList.add('active');
        } else {
          ctaButton.classList.remove('active');
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(ctaButton);
}