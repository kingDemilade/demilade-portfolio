/* === Unified DOM Ready === */
document.addEventListener('DOMContentLoaded', function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* === Dynamic Footer Year === */
  const footerCurrentYear = document.getElementById('footerCurrentYear');

  if (footerCurrentYear) {
    footerCurrentYear.textContent = new Date().getFullYear();
  }

  /* === Scroll To Top Button === */
  const scrollTopButton = document.createElement('button');
  scrollTopButton.type = 'button';
  scrollTopButton.className = 'scroll-to-top-button';
  scrollTopButton.setAttribute('aria-label', 'Scroll to top');
  scrollTopButton.innerHTML = '<i class="fa-solid fa-arrow-up" aria-hidden="true"></i>';
  document.body.appendChild(scrollTopButton);

  function toggleScrollTopButton() {
    scrollTopButton.classList.toggle('is-visible', window.scrollY > 450);
  }

  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  });

  window.addEventListener('scroll', toggleScrollTopButton, { passive: true });
  toggleScrollTopButton();

  /* === Scroll Reveal for Cards === */
  const cards = document.querySelectorAll('.card');

  const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach((card, index) => {
    if (!prefersReducedMotion) {
      card.style.opacity = 0;
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.6s ease';
      card.style.transitionDelay = `${index * 60}ms`;
      cardObserver.observe(card);
    } else {
      card.style.transition = 'none';
      card.style.opacity = 1;
      card.style.transform = 'none';
    }

    // Hover + Focus (a11y)
    card.addEventListener('mouseenter', () => card.classList.add('is-hover'));
    card.addEventListener('mouseleave', () => card.classList.remove('is-hover'));
    card.addEventListener('focusin', () => card.classList.add('is-hover'));
    card.addEventListener('focusout', () => card.classList.remove('is-hover'));
  });

  /* === By The Numbers Counter Animation === */
  const counters = document.querySelectorAll('.counter');

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target); // run once
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(counter => {
    counter.innerText = '0';
    counterObserver.observe(counter);
  });

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);

    let current = 0;
    const duration = 1200; // total animation time (ms)
    const start = performance.now();

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      current = target * eased;

      const value = decimals > 0
        ? current.toFixed(decimals)
        : Math.floor(current).toLocaleString();

      el.innerText = value + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        const finalValue = decimals > 0
          ? target.toFixed(decimals)
          : target.toLocaleString();
        el.innerText = finalValue + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  /* === BCC Staff District Filter === */
  const staffFilterButtons = document.querySelectorAll('[data-staff-filter]');
  const staffCards = document.querySelectorAll('[data-staff-district]');
  const staffFilterStatus = document.getElementById('staffFilterStatus');
  const staffEmptyState = document.getElementById('staffEmptyState');
  const staffCardGrid = document.getElementById('staffCardGrid');

  function setStaffFilter(filterValue) {
    const showAll = filterValue === 'all';
    const showNone = filterValue === 'none';

    staffCards.forEach(card => {
      const isVisible = !showNone && (showAll || card.getAttribute('data-staff-district') === filterValue);
      card.hidden = !isVisible;
    });

    if (staffEmptyState) {
      staffEmptyState.hidden = !showNone;
    }

    if (staffCardGrid) {
      staffCardGrid.classList.toggle('is-single-result', !showNone && !showAll);
    }

    staffFilterButtons.forEach(button => {
      const buttonValue = button.getAttribute('data-staff-filter');
      const isActive = buttonValue === filterValue;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    if (staffFilterStatus) {
      if (showNone) {
        staffFilterStatus.textContent = 'Select a district or choose All to view staff.';
      } else {
        staffFilterStatus.textContent = showAll
          ? 'Showing all districts'
          : `Showing District ${filterValue}`;
      }
    }
  }

  staffFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
      setStaffFilter(button.getAttribute('data-staff-filter'));
    });
  });

  /* === News Carousel Controls === */
  const newsCarousel = document.querySelector('[data-news-carousel]');
  const newsCarouselPrev = document.querySelector('[data-news-carousel-prev]');
  const newsCarouselNext = document.querySelector('[data-news-carousel-next]');

  function scrollNewsCarousel(direction) {
    if (!newsCarousel) return;

    const firstSlide = newsCarousel.querySelector('.news-carousel-slide');
    const slideWidth = firstSlide ? firstSlide.getBoundingClientRect().width : newsCarousel.clientWidth;
    const gap = 16;

    newsCarousel.scrollBy({
      left: direction * (slideWidth + gap),
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  }

  if (newsCarouselPrev && newsCarouselNext) {
    newsCarouselPrev.addEventListener('click', () => scrollNewsCarousel(-1));
    newsCarouselNext.addEventListener('click', () => scrollNewsCarousel(1));
  }

});
