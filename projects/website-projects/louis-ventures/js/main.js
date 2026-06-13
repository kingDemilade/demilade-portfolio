const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle?.querySelector('i');
const savedTheme = localStorage.getItem('rlPathwaysTheme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);

  if (!themeToggle || !themeIcon) return;

  const isDark = theme === 'dark';

  themeIcon.classList.toggle('fa-moon', !isDark);
  themeIcon.classList.toggle('fa-sun', isDark);
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
applyTheme(initialTheme);

themeToggle?.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  localStorage.setItem('rlPathwaysTheme', nextTheme);
  applyTheme(nextTheme);
});
