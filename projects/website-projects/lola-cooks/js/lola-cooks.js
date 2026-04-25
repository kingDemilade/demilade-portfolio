// =========================
// CTA Button Observer
// =========================
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

// =========================
// Theme Toggle System
// =========================
const toggle = document.getElementById('theme-toggle');

// Helper to update icon
function updateThemeIcon() {
  if (!toggle) return;

  if (document.body.classList.contains('dark-mode')) {
    toggle.textContent = '☀️ Light Mode';
  } else {
    toggle.textContent = '🌙 Dark Mode';
  }
}

if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    updateThemeIcon();
  });
}

// Load saved preference
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

// Auto-detect system theme (only if no saved preference)
if (!savedTheme) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    document.body.classList.add('dark-mode');
  }
}

// Set initial icon state
updateThemeIcon();

// =========================
// Optional: Listen for system theme changes
// =========================
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

mediaQuery.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    document.body.classList.toggle('dark-mode', e.matches);
    updateThemeIcon();
  }
});