// ---- Interactive Timeline (expand/collapse + filters + a11y) ----
(() => {
  const timeline = document.querySelector('#project-timeline .timeline');
  if (!timeline) return;

  const items = timeline.querySelectorAll('.tl-item');
  const cards = timeline.querySelectorAll('.tl-card');

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
    updateOpenCardsSlider();
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
        updateOpenCardsSlider();
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

  const timelineSlider = document.getElementById('timelineSlider');
  const timelineSliderCurrent = document.getElementById('timelineSliderCurrent');
  const timelineSliderTotal = document.getElementById('timelineSliderTotal');

  const tlSlider = document.querySelector('.tl-slider');
  const tlSliderCount = document.querySelector('.tl-slider-count');
  const tlSliderFill = document.querySelector('.tl-slider-fill');

  function updateOpenCardsSlider() {
    if (!tlSliderCount || !tlSliderFill) return;

    // Only count items that are currently visible (filters may hide some)
    const visibleItems = Array.from(items).filter(item => item.style.display !== 'none');
    const total = visibleItems.length;

    // A card is considered "open" when its toggle is aria-expanded="true"
    const openCount = visibleItems.reduce((acc, item) => {
      const btn = item.querySelector('.tl-toggle');

      if (!btn) return acc;

      const panelId = btn.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;

      // A card is considered open if the panel is visible (no "hidden" attribute)
      const isOpen = panel && !panel.hasAttribute('hidden');

      return acc + (isOpen ? 1 : 0);
    }, 0);

    const currentEl = document.getElementById('tl-current');
    const totalEl = document.getElementById('tl-total');

    if (currentEl) currentEl.textContent = openCount;
    if (totalEl) totalEl.textContent = total;
    tlSliderFill.style.width = total ? `${Math.round((openCount / total) * 100)}%` : '0%';

    // Pulse hook (optional)
    if (tlSlider) {
      tlSlider.classList.add('is-active');
      tlSlider.classList.remove('tl-slider-pulse');
      void tlSlider.offsetWidth;
      tlSlider.classList.add('tl-slider-pulse');
    }
  }

  // Initialize display-only timeline slider
  const totalLeaders = items.length;

  if (timelineSlider && timelineSliderCurrent && timelineSliderTotal && totalLeaders) {
    timelineSlider.min = '1';
    timelineSlider.max = String(totalLeaders);
    timelineSlider.value = '1';
    timelineSliderCurrent.textContent = '1';
    timelineSliderTotal.textContent = `of ${totalLeaders}`;
  }
  // Initialize the OPEN-cards slider UI
  updateOpenCardsSlider();

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

  if ('IntersectionObserver' in window) {
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Active card + parent timeline item highlight
          cards.forEach(card => card.classList.remove('is-active'));
          items.forEach(item => item.classList.remove('is-active'));

          entry.target.classList.add('is-active');

          const parentItem = entry.target.closest('.tl-item');
          if (parentItem) parentItem.classList.add('is-active');

          // Mobile behavior: slider tracks scroll progress (cards passed)
          const isMobile = window.matchMedia('(max-width: 768px)').matches;

          if (isMobile) {
            const index = Array.from(cards).indexOf(entry.target) + 1;
            const total = cards.length;

            const currentEl = document.getElementById('tl-current');
            const totalEl = document.getElementById('tl-total');

            if (currentEl) currentEl.textContent = index;
            if (totalEl) totalEl.textContent = total;

            if (tlSliderFill) {
              tlSliderFill.style.width = `${Math.round((index / total) * 100)}%`;
            }
          } else {
            // Desktop keeps original open-card logic
            updateOpenCardsSlider();
          }
        }
      });
    }, {
      threshold: 0.35,
      rootMargin: '-20% 0px -40% 0px'
    });

    cards.forEach(card => activeObserver.observe(card));
  }

})();