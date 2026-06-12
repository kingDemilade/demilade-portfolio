// Wait for DOM to be ready
window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');

  if (!toggle || !nav) {
    console.warn('Navbar elements not found. Check IDs: #menu-toggle and #nav-links');
    return;
  }

  // Accessibility: track expanded state
  toggle.setAttribute('aria-expanded', 'false');

  const openMenu = () => {
    nav.classList.add('active');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  };

  const closeMenu = () => {
    nav.classList.remove('active');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  const toggleMenu = () => {
    const isOpen = nav.classList.contains('active');
    if (isOpen) closeMenu(); else openMenu();
  };

  // Click hamburger
  toggle.addEventListener('click', toggleMenu);

  // Close when clicking a nav link (mobile UX)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

// Sticky navbar scroll effect
const navbar = document.querySelector('.navbar');

const handleNavbarScroll = () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', handleNavbarScroll);

const themeToggles = document.querySelectorAll('#theme-toggle, #mobile-theme-toggle');

if (themeToggles.length) {
  // Load saved theme
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Sync all theme toggle buttons
  themeToggles.forEach(toggleBtn => {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      // Save preference
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  });
}

// =========================
// Booking UI Interactions
// =========================
const dateButtons = document.querySelectorAll('.date-grid button');
const timeButtons = document.querySelectorAll('.time-grid button');

let selectedDate = null;
let selectedTime = null;

// Load saved selections (for booking page or return visits)
const savedDate = localStorage.getItem('bookingDate');
const savedTime = localStorage.getItem('bookingTime');

if (savedDate && dateButtons.length) {
  dateButtons.forEach(btn => {
    if (btn.textContent.trim() === savedDate) {
      btn.classList.add('active');
      selectedDate = savedDate;
    }
  });
}

if (savedTime && timeButtons.length) {
  timeButtons.forEach(btn => {
    if (btn.textContent.trim() === savedTime) {
      btn.classList.add('active');
      selectedTime = savedTime;
    }
  });
}

const setActive = (buttons, clicked) => {
  buttons.forEach(btn => btn.classList.remove('active'));
  clicked.classList.add('active');
};

// Date selection
if (dateButtons.length) {
  dateButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setActive(dateButtons, btn);
      selectedDate = btn.textContent;
      localStorage.setItem('bookingDate', selectedDate);
      if (selectedDate && selectedTime) {
        console.log(`Selected: ${selectedDate} @ ${selectedTime}`);
      }
    });
  });
}

// Time selection
if (timeButtons.length) {
  timeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      setActive(timeButtons, btn);
      selectedTime = btn.textContent;
      localStorage.setItem('bookingTime', selectedTime);
      if (selectedDate && selectedTime) {
        console.log(`Selected: ${selectedDate} @ ${selectedTime}`);
      }
    });
  });
}

// =========================
// Booking Confirmation UI
// =========================
const renderBookingConfirmation = () => {
  const date = localStorage.getItem('bookingDate');
  const time = localStorage.getItem('bookingTime');

  if (!date || !time) return;

  const confirmationHTML = `
    <div class="booking-confirmation">
      Booking for: <span>${date}</span> @ <span>${time}</span>
    </div>
  `;

  // (Homepage block removed)

  // Booking page (top of booking section)
  const bookingPage = document.querySelector('.booking-page .container');
  if (bookingPage && !bookingPage.querySelector('.booking-confirmation')) {
    bookingPage.insertAdjacentHTML('afterbegin', confirmationHTML);
  }
};

renderBookingConfirmation();

// =========================
// Services Package Tabs
// =========================
const packageTabs = document.querySelectorAll('[data-package-tab]');
const packagePanels = document.querySelectorAll('[data-package-panel]');

if (packageTabs.length && packagePanels.length) {
  const activatePackage = (selectedPackage) => {
    packageTabs.forEach((tab) => {
      const isActive = tab.dataset.packageTab === selectedPackage;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    packagePanels.forEach((panel) => {
      const isActive = panel.dataset.packagePanel === selectedPackage;
      panel.classList.toggle('is-active', isActive);
      panel.hidden = !isActive;
    });
  };

  packageTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activatePackage(tab.dataset.packageTab);
    });
  });
}

});