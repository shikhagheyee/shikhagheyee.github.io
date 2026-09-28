/**
 * Shikha Gheyee — Online Resume / Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Set current year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Theme Toggle: Defaults to 'light'
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('sg_theme');
  const initialTheme = savedTheme || 'light';
  document.body.setAttribute('data-theme', initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', nextTheme);
      localStorage.setItem('sg_theme', nextTheme);
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  }
});
