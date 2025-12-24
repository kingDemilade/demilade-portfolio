// Footer year auto-update
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Toggle Button for Dark Mode
const toggleBtn = document.getElementById('toggleDarkMode');
if (toggleBtn) {
  toggleBtn.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
  });
}

// ---- Tabs: deep-link + remember last tab + ARIA state sync ----
(() => {
  const tabButtons = document.querySelectorAll('#tab-buttons [role="tab"]') // buttons
  const tabPanels  = document.querySelectorAll('.tab-panel[role="tabpanel"]')
  const TAB_KEY = 'activeTab';

  const tablist = document.getElementById('tab-buttons');

  function indexOfButton(btn) {
    return Array.from(tabButtons).indexOf(btn);
  }

  function focusButtonAt(index) {
    const buttons = Array.from(tabButtons);
    const len = buttons.length;
    if (!len) return;
    // wrap index
    const i = ((index % len) + len) % len;
    // update roving tabindex only (do not activate panel here)
    buttons.forEach(b => b.setAttribute('tabindex', '-1'));
    buttons[i].setAttribute('tabindex', '0');
    buttons[i].focus();
  }

  if (!tabButtons.length || !tabPanels.length) return;

  function clearState() {
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
      btn.setAttribute('tabindex', '-1');
    });
    tabPanels.forEach(panel => {
      panel.classList.remove('active');
      panel.setAttribute('hidden', '');
    });
  }

  function setActiveTab(tabName, { updateHash = true, save = true } = {}) {
    const targetButton = document.querySelector(`#tab-buttons [role="tab"][data-tab="${tabName}"]`);
    const targetPanel  = document.querySelector(`.tab-panel[role="tabpanel"][data-content="${tabName}"]`);
    if (!targetButton || !targetPanel) return;

    // Reset
    clearState();

    // Activate target
    targetButton.classList.add('active');
    targetButton.setAttribute('aria-selected', 'true');
    targetButton.setAttribute('tabindex', '0');

    targetPanel.classList.add('active');
    targetPanel.removeAttribute('hidden');

    // Persist + URL (no extra history entries)
    if (save) localStorage.setItem(TAB_KEY, tabName);
    if (updateHash && location.hash !== `#${tabName}`) {
      history.replaceState(null, '', `#${tabName}`);
    }
  }

  // Click handlers
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.getAttribute('data-tab');
      setActiveTab(tabName);
    });
  });

  // Keyboard navigation for tabs (ARIA best practices)
  if (tablist) {
    tablist.addEventListener('keydown', (e) => {
      const current = document.activeElement;
      if (!current || current.getAttribute('role') !== 'tab') return;

      const currentIndex = indexOfButton(current);
      if (currentIndex < 0) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'Right': // legacy
          e.preventDefault();
          focusButtonAt(currentIndex + 1);
          break;
        case 'ArrowLeft':
        case 'Left': // legacy
          e.preventDefault();
          focusButtonAt(currentIndex - 1);
          break;
        case 'Home':
          e.preventDefault();
          focusButtonAt(0);
          break;
        case 'End':
          e.preventDefault();
          focusButtonAt(tabButtons.length - 1);
          break;
        case 'Enter':
        case ' ': // Space
          e.preventDefault();
          const targetName = current.getAttribute('data-tab');
          if (targetName) setActiveTab(targetName);
          break;
        default:
          break;
      }
    });
  }

  // Back/forward or manual hash edits
  window.addEventListener('hashchange', () => {
    const tabFromHash = location.hash.replace('#', '');
    if (tabFromHash) setActiveTab(tabFromHash, { updateHash: false });
  });

  // Initial load: hash > localStorage > default ('print')
  const initial =
    (location.hash && location.hash.replace('#','')) ||
    localStorage.getItem(TAB_KEY) ||
    'print';

  setActiveTab(initial, { updateHash: true, save: true });
})();

// ---- Lightbox for project images ----
(() => {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <div class="lightbox-content" role="dialog" aria-modal="true" aria-label="Image viewer">
      <button class="lightbox-close" aria-label="Close">×</button>
      <div class="lightbox-nav">
        <button class="lightbox-btn" data-dir="prev" aria-label="Previous">‹</button>
        <button class="lightbox-btn" data-dir="next" aria-label="Next">›</button>
      </div>
      <img class="lightbox-img" alt="Expanded project image" />
      <div class="lightbox-caption" hidden></div>
    </div>`;
  document.body.appendChild(overlay);

  const imgEl = overlay.querySelector('.lightbox-img');
  const captionEl = overlay.querySelector('.lightbox-caption');
  const closeBtn = overlay.querySelector('.lightbox-close');
  const prevBtn = overlay.querySelector('[data-dir="prev"]');
  const nextBtn = overlay.querySelector('[data-dir="next"]');

  let images = [];
  let index = 0;

  function openAt(i, list) {
    images = list;
    index = i;
    const img = images[index];
    const src = img.dataset.full || img.currentSrc || img.src;
    const cap = img.dataset.caption || img.alt || '';

    imgEl.src = src;
    captionEl.textContent = cap;
    captionEl.toggleAttribute('hidden', !cap);

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('open');
    imgEl.removeAttribute('src');
    document.body.style.overflow = '';
  }

  function step(delta) {
    if (!images.length) return;
    index = (index + delta + images.length) % images.length;
    const img = images[index];
    const src = img.dataset.full || img.currentSrc || img.src;
    const cap = img.dataset.caption || img.alt || '';
    imgEl.src = src;
    captionEl.textContent = cap;
    captionEl.toggleAttribute('hidden', !cap);
  }

  // Delegated click from any active tab panel
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.matches('.tab-panel.active .card-img-top, .tab-panel.active picture img')) {
      const panel = target.closest('.tab-panel');
      const list = Array.from(panel.querySelectorAll('.card-img-top, picture img'));
      const i = list.indexOf(target);
      if (i > -1) openAt(i, list);
    }
  });

  // Controls
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  prevBtn.addEventListener('click', () => step(-1));
  nextBtn.addEventListener('click', () => step(1));

  // Keyboard
  window.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
})();