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
})();