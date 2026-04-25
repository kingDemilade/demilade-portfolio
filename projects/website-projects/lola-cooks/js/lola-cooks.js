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

const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Load preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (!localStorage.getItem('theme') && prefersDark) {
  document.body.classList.add('dark-mode');
}