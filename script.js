/**
 * Shikha Gheyee — Lead Technical Writer Portfolio Scripts
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

  // Theme Toggle: Defaults to 'light' for editorial reading experience
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('sg_editorial_theme');
  const initialTheme = savedTheme || 'light';
  document.body.setAttribute('data-theme', initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', nextTheme);
      localStorage.setItem('sg_editorial_theme', nextTheme);
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  }

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
});

// Toast & Copy Email Function
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const span = toast.querySelector('span');
  if (span) span.textContent = message;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function copyContact() {
  const email = 'shikha.gheyee@gmail.com';
  const copyBtnText = document.getElementById('copyBtnText');

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email address copied to clipboard!');
      if (copyBtnText) {
        copyBtnText.textContent = 'Copied!';
        setTimeout(() => { copyBtnText.textContent = 'Copy Email Address'; }, 2500);
      }
    }).catch(() => {
      fallbackCopy(email);
    });
  } else {
    fallbackCopy(email);
  }
}

function fallbackCopy(text) {
  const temp = document.createElement('textarea');
  temp.value = text;
  document.body.appendChild(temp);
  temp.select();
  try {
    document.execCommand('copy');
    showToast('Email copied to clipboard!');
  } catch (e) {
    showToast('Contact: shikha.gheyee@gmail.com');
  }
  document.body.removeChild(temp);
}
