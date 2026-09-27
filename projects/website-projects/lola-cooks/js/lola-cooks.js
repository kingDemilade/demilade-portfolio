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

  const isDark = document.body.classList.contains('dark-mode');
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  const tooltip = isDark ? 'Serve light mode' : 'Serve dark mode';

  toggle.setAttribute('aria-label', label);
  toggle.setAttribute('title', tooltip);
  toggle.setAttribute('aria-pressed', String(isDark));

  const hiddenLabel = toggle.querySelector('.theme-toggle__label');
  if (hiddenLabel) hiddenLabel.textContent = label;
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

// =========================
// Mobile Navigation
// =========================
const menuToggle = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');

function setMenuState(isOpen, returnFocus = false) {
  if (!menuToggle || !primaryNav) return;

  const label = isOpen ? 'Close navigation menu' : 'Open navigation menu';
  primaryNav.classList.toggle('is-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', label);

  const hiddenLabel = menuToggle.querySelector('.menu-toggle__label');
  if (hiddenLabel) hiddenLabel.textContent = label;
  if (returnFocus) menuToggle.focus();
}

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuState(false, true);
    }
  });

  const desktopNavQuery = window.matchMedia('(min-width: 769px)');
  desktopNavQuery.addEventListener('change', (event) => {
    if (event.matches) setMenuState(false);
  });
}

// =========================
// Scroll to Top
// =========================
const scrollTopButton = document.querySelector('.scroll-top');

if (scrollTopButton) {
  let scrollUpdatePending = false;

  const updateScrollTopButton = () => {
    const shouldShow = window.scrollY > 500;
    scrollTopButton.classList.toggle('is-visible', shouldShow);
    scrollUpdatePending = false;
  };

  window.addEventListener('scroll', () => {
    if (!scrollUpdatePending) {
      window.requestAnimationFrame(updateScrollTopButton);
      scrollUpdatePending = true;
    }
  }, { passive: true });

  scrollTopButton.addEventListener('click', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
    scrollTopButton.blur();
  });

  updateScrollTopButton();
}
