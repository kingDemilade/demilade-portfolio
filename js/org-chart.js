document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".org-card");

  cards.forEach(card => {
    const nameTag = card.querySelector("p");
    const titleBand = card.querySelector(".band");

    if (nameTag && /vacant/i.test(nameTag.textContent.trim())) {
      // 1. Remove old classes
      card.classList.remove("is-dashed", "bna-row-line");
      
      // 2. Change band color
      if (titleBand) {
        titleBand.className = "band oc-yellow";
      }

      // 3. Add new background style
      card.classList.add("oc-light-yellow");

      // 4. Normalize the label (optional)
      nameTag.textContent = "Vacant";
    }
  });
});

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
    const i = ((index % len) + len) % len;
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

    clearState();

    targetButton.classList.add('active');
    targetButton.setAttribute('aria-selected', 'true');
    targetButton.setAttribute('tabindex', '0');

    targetPanel.classList.add('active');
    targetPanel.removeAttribute('hidden');

    if (save) localStorage.setItem(TAB_KEY, tabName);
    if (updateHash && location.hash !== `#${tabName}`) {
      history.replaceState(null, '', `#${tabName}`);
    }
  }

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.getAttribute('data-tab');
      setActiveTab(tabName);
    });
  });

  if (tablist) {
    tablist.addEventListener('keydown', (e) => {
      const current = document.activeElement;
      if (!current || current.getAttribute('role') !== 'tab') return;

      const currentIndex = indexOfButton(current);
      if (currentIndex < 0) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'Right':
          e.preventDefault();
          focusButtonAt(currentIndex + 1);
          break;
        case 'ArrowLeft':
        case 'Left':
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
        case ' ':
          e.preventDefault();
          const targetName = current.getAttribute('data-tab');
          if (targetName) setActiveTab(targetName);
          break;
      }
    });
  }

  window.addEventListener('hashchange', () => {
    const tabFromHash = location.hash.replace('#', '');
    if (tabFromHash) setActiveTab(tabFromHash, { updateHash: false });
  });

  const initial =
    (location.hash && location.hash.replace('#','')) ||
    localStorage.getItem(TAB_KEY) ||
    'print';

  setActiveTab(initial, { updateHash: true, save: true });
})();