// ---- Interactive Timeline (expand/collapse + filters + a11y) ----
(() => {
  const timeline = document.querySelector('#project-timeline .timeline');
  if (!timeline) return;

  // Expand / collapse (click on the center dot button)
  timeline.addEventListener('click', (e) => {
    const btn = e.target.closest('.tl-toggle');
    if (!btn) return;

    const panelId = btn.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    if (!panel) return;

    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));

    if (expanded) {
      panel.setAttribute('hidden', '');
      panel.removeAttribute('data-open');
    } else {
      panel.removeAttribute('hidden');
      // allow next frame to enable transition (for CSS grid reveal)
      requestAnimationFrame(() => panel.setAttribute('data-open', 'true'));
    }
  });

  // Keyboard support for toggles (Enter/Space)
  timeline.addEventListener('keydown', (e) => {
    const btn = e.target.closest('.tl-toggle');
    if (!btn) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });

  // Filters (by tag on the toggle button)
  const filtersWrap = document.querySelector('#project-timeline .timeline-filters');
  if (filtersWrap) {
    const buttons = filtersWrap.querySelectorAll('.timeline-filter');
    buttons.forEach(b => {
      b.addEventListener('click', () => {
        buttons.forEach(x => x.classList.remove('active'));
        b.classList.add('active');

        const value = b.dataset.filter;
        const items = timeline.querySelectorAll('.tl-item .tl-toggle');
        items.forEach(tgl => {
          const tags = (tgl.dataset.tags || '').split(',').map(s => s.trim()).filter(Boolean);
          const match = value === 'all' || tags.includes(value);
          tgl.closest('.tl-item').style.display = match ? '' : 'none';
        });
      });
    });
    // default to 'all'
    const defaultBtn = filtersWrap.querySelector('[data-filter="all"]');
    if (defaultBtn) defaultBtn.click();
  }

  // Deep-link: if URL hash points to a card id (e.g., #tl-card-3), open it on load
  if (location.hash && location.hash.startsWith('#tl-card-')) {
    const panel = document.querySelector(location.hash);
    if (panel) {
      const btn = timeline.querySelector(`.tl-toggle[aria-controls="${panel.id}"]`);
      if (btn) {
        btn.setAttribute('aria-expanded', 'true');
        panel.removeAttribute('hidden');
        requestAnimationFrame(() => panel.setAttribute('data-open', 'true'));
        // Optional: bring into view and focus the toggle
        panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
        btn.focus({ preventScroll: true });
      }
    }
  }
  // ---- Micro‑motion reveal (Option 3) ----
  // Reveal each timeline card when it enters the viewport
  const cards = timeline.querySelectorAll('.tl-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          // Option B: animate every time it re-enters viewport
          entry.target.classList.remove('is-visible');
        }
      });
    }, {
      root: null,
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    });

    cards.forEach(card => observer.observe(card));
  } else {
    // Fallback for older browsers
    cards.forEach(card => card.classList.add('is-visible'));
  }

  // Highlight active timeline leader + progress sync
  const progressBar = document.querySelector('.tl-progress-bar');

  if ('IntersectionObserver' in window) {
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Active card highlight
          cards.forEach(card => card.classList.remove('is-active'));
          entry.target.classList.add('is-active');

          // Smooth focus effect (subtle)
          entry.target.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });

          // Progress bar update (based on order)
          if (progressBar) {
            const index = [...cards].indexOf(entry.target);
            const percent = ((index + 1) / cards.length) * 100;
            progressBar.style.transform = `scaleX(${percent / 100})`;
          }
        }
      });
    }, {
      threshold: 0.6,
      rootMargin: '-10% 0px -30% 0px'
    });

    cards.forEach(card => activeObserver.observe(card));
  }

})();