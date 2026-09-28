/**
 * Shikha Gheyee — Portfolio Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Set current year in footer
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- Theme Toggle Logic ---
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('sg_portfolio_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  document.body.setAttribute('data-theme', currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = document.body.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('sg_portfolio_theme', newTheme);
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  }

  // --- Mobile Menu Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking any nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // --- Work Sample Tabs ---
  const tabBtns = document.querySelectorAll('.sample-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      // Update active tab buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update active panes
      tabPanes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });

      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  });

  // --- Scroll Spy for Navbar ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  });
});

// --- Toast & Copy Functionality ---
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

function copyContact() {
  const email = 'shikha.gheyee@gmail.com';
  const phone = '+91-8500273942';
  const textToCopy = `Shikha Gheyee — Lead Technical Writer\nEmail: ${email}\nPhone: ${phone}\nPortfolio: ${window.location.href}`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email address copied to clipboard!');
      updateCopyButtons();
    }).catch(() => {
      fallbackCopy(email);
    });
  } else {
    fallbackCopy(email);
  }
}

function fallbackCopy(text) {
  const tempInput = document.createElement('textarea');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand('copy');
    showToast('Email copied to clipboard!');
    updateCopyButtons();
  } catch (err) {
    showToast('Could not copy automatically. Contact: shikha.gheyee@gmail.com');
  }
  document.body.removeChild(tempInput);
}

function updateCopyButtons() {
  const copyText = document.getElementById('copyText');
  const copyBtnText2 = document.getElementById('copyBtnText2');

  if (copyText) {
    copyText.textContent = 'Copied!';
    setTimeout(() => { copyText.textContent = 'Copy Email'; }, 2500);
  }

  if (copyBtnText2) {
    copyBtnText2.textContent = 'Copied to Clipboard!';
    setTimeout(() => { copyBtnText2.textContent = 'Copy Contact Details'; }, 2500);
  }
}
