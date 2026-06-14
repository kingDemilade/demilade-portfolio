// Footer year auto-update
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Toggle Buttons for Dark Mode (with persistence)
const toggleButtons = document.querySelectorAll('.theme-toggle');
const THEME_KEY = 'theme-preference';

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButtons.forEach(btn => btn.setAttribute('aria-pressed', 'true'));
  } else {
    document.body.classList.remove('dark-mode');
    toggleButtons.forEach(btn => btn.setAttribute('aria-pressed', 'false'));
  }
}

// Load saved theme on page load
const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme) {
  applyTheme(savedTheme);
}

// Toggle on click (mobile + desktop buttons)
toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    const newTheme = isDark ? 'dark' : 'light';
    localStorage.setItem(THEME_KEY, newTheme);
    toggleButtons.forEach(b => b.setAttribute('aria-pressed', isDark ? 'true' : 'false'));
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

/*
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
})(); */


document.addEventListener("DOMContentLoaded", () => {
  const motionVideos = document.querySelectorAll(".motion-video");

  function getPlayButton(video) {
    const mediaWrap = video.closest('.project-media');
    return mediaWrap ? mediaWrap.querySelector('.video-play-btn') : null;
  }

  function loadVideo(video) {
    if (video.dataset.loaded) return;

    const src = video.dataset.src;
    if (!src) return;

    // Ensure poster is respected before loading video
    const poster = video.getAttribute('poster');
    if (poster) video.setAttribute('poster', poster);

    video.preload = "metadata";
    video.src = src;
    video.load();
    video.dataset.loaded = "true";
  }

  function playVideo(video) {
    loadVideo(video);

    video.controls = true;

    if (video.dataset.ready === 'true') {
      video.play().catch(() => {});
      return;
    }

    video.addEventListener(
      "loadeddata",
      () => {
        if (video.currentTime === 0) {
          video.currentTime = 0.01;
        }

        video.dataset.ready = 'true';
        video.classList.add("is-ready");
        video.play().catch(() => {});
      },
      { once: true }
    );
  }

  document.querySelectorAll('.video-play-btn').forEach(button => {
    button.addEventListener('click', () => {
      const mediaWrap = button.closest('.project-media');
      const video = mediaWrap ? mediaWrap.querySelector('.motion-video') : null;
      if (!video) return;

      playVideo(video);
      button.hidden = true;
      mediaWrap.classList.add('is-playing');
    });
  });

  if (!("IntersectionObserver" in window)) {
    // Fallback: load all videos except those with play buttons
    motionVideos.forEach(video => {
      if (getPlayButton(video)) return;
      loadVideo(video);
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        const video = entry.target;

        // ⛔ Skip hero video entirely  
        if (video.classList.contains("hero-video")) return;
        // Videos with an overlay play button should not autoplay
        if (getPlayButton(video)) return;
        
        if (entry.isIntersecting) {
          if (!video.dataset.loaded) {
            playVideo(video);
          } else if (video.paused) {
            video.play().catch(() => {});
          }
        } else {
          if (!video.paused) video.pause();
        }
      });
    },
    {
      rootMargin: "0px 0px -20% 0px",
      threshold: 0.25
    }
  );

  motionVideos.forEach(video => observer.observe(video));
});

// =========================
// Services Page: Website Package Tabs
// =========================
document.addEventListener('DOMContentLoaded', () => {
  const packageTabs = document.querySelectorAll('[data-package-tab]');
  const packagePanels = document.querySelectorAll('[data-package-panel]');
  const packageGrid = document.querySelector('[data-package-grid]');
  const packageSkeleton = document.querySelector('[data-package-skeleton]');
  const packageViewAllTab = document.querySelector('[data-package-tab="all"]');

  if (!packageTabs.length || !packagePanels.length) return;

  function updatePackageViewAllLabel(isReset) {
    if (packageViewAllTab) {
      packageViewAllTab.textContent = isReset ? 'Reset' : 'View All';
    }
  }

  function activatePackage(selectedPackage) {
    const isViewAll = selectedPackage === 'all';

    if (packageGrid) {
      packageGrid.classList.toggle('is-view-all', isViewAll);
    }

    if (packageSkeleton) {
      packageSkeleton.hidden = true;
    }

    packageTabs.forEach((tab) => {
      const isActive = tab.dataset.packageTab === selectedPackage;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    packagePanels.forEach((panel) => {
      const isActive = isViewAll || panel.dataset.packagePanel === selectedPackage;
      panel.classList.toggle('is-active', isActive);
      panel.hidden = !isActive;
    });

    updatePackageViewAllLabel(isViewAll);

    window.setPackageComparisonExpanded?.(true);
  }

  function resetPackageTabs() {
    if (packageGrid) {
      packageGrid.classList.remove('is-view-all');
    }

    if (packageSkeleton) {
      packageSkeleton.hidden = false;
    }

    packageTabs.forEach((tab) => {
      tab.classList.remove('is-active');
      tab.setAttribute('aria-selected', 'false');
    });

    packagePanels.forEach((panel) => {
      panel.classList.remove('is-active');
      panel.hidden = true;
    });

    updatePackageViewAllLabel(false);
    window.setPackageComparisonExpanded?.(false);
  }

  packageTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      if (tab.dataset.packageTab === 'all' && tab.classList.contains('is-active')) {
        resetPackageTabs();
        return;
      }

      activatePackage(tab.dataset.packageTab);
    });
  });
});

// =========================
// Services Page: Creative Service Filter Tabs
// =========================
document.addEventListener('DOMContentLoaded', () => {
  const serviceTabs = document.querySelectorAll('[data-service-tab]');
  const serviceCards = document.querySelectorAll('[data-service-card]');
  const serviceGrid = document.querySelector('[data-service-grid]');
  const serviceSkeleton = document.querySelector('[data-service-skeleton]');
  const serviceViewAllTab = document.querySelector('[data-service-tab="all"]');

  if (!serviceTabs.length || !serviceCards.length) return;

  function updateServiceViewAllLabel(isReset) {
    if (serviceViewAllTab) {
      serviceViewAllTab.textContent = isReset ? 'Reset' : 'View All';
    }
  }

  function activateServiceTab(selectedService) {
    const isViewAll = selectedService === 'all';

    if (serviceGrid) {
      serviceGrid.classList.toggle('is-filtered', !isViewAll);
    }

    if (serviceSkeleton) {
      serviceSkeleton.hidden = true;
    }

    serviceTabs.forEach((tab) => {
      const isActive = tab.dataset.serviceTab === selectedService;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    serviceCards.forEach((card) => {
      const shouldShow = isViewAll || card.dataset.serviceCard === selectedService;
      card.hidden = !shouldShow;
    });

    updateServiceViewAllLabel(isViewAll);
  }

  function resetServiceTabs() {
    if (serviceGrid) {
      serviceGrid.classList.remove('is-filtered');
    }

    if (serviceSkeleton) {
      serviceSkeleton.hidden = false;
    }

    serviceTabs.forEach((tab) => {
      tab.classList.remove('is-active');
      tab.setAttribute('aria-selected', 'false');
    });

    serviceCards.forEach((card) => {
      card.hidden = true;
    });

    updateServiceViewAllLabel(false);
  }

  serviceTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      if (tab.dataset.serviceTab === 'all' && tab.classList.contains('is-active')) {
        resetServiceTabs();
        return;
      }

      activateServiceTab(tab.dataset.serviceTab);
    });
  });
});

// =========================
// Services Page: Combined Package Filter Tabs
// =========================
document.addEventListener('DOMContentLoaded', () => {
  const bundleTabs = document.querySelectorAll('[data-bundle-tab]');
  const bundleCards = document.querySelectorAll('[data-bundle-card]');
  const bundleGrid = document.querySelector('[data-bundle-grid]');
  const bundleSkeleton = document.querySelector('[data-bundle-skeleton]');
  const bundleViewAllTab = document.querySelector('[data-bundle-tab="all"]');

  if (!bundleTabs.length || !bundleCards.length) return;

  function updateBundleViewAllLabel(isReset) {
    if (bundleViewAllTab) {
      bundleViewAllTab.textContent = isReset ? 'Reset' : 'View All';
    }
  }

  function activateBundleTab(selectedBundle) {
    const isViewAll = selectedBundle === 'all';

    if (bundleGrid) {
      bundleGrid.classList.toggle('is-filtered', !isViewAll);
    }

    if (bundleSkeleton) {
      bundleSkeleton.hidden = true;
    }

    bundleTabs.forEach((tab) => {
      const isActive = tab.dataset.bundleTab === selectedBundle;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    bundleCards.forEach((card) => {
      const shouldShow = isViewAll || card.dataset.bundleCard === selectedBundle;
      card.hidden = !shouldShow;
    });

    updateBundleViewAllLabel(isViewAll);
  }

  function resetBundleTabs() {
    if (bundleGrid) {
      bundleGrid.classList.remove('is-filtered');
    }

    if (bundleSkeleton) {
      bundleSkeleton.hidden = false;
    }

    bundleTabs.forEach((tab) => {
      tab.classList.remove('is-active');
      tab.setAttribute('aria-selected', 'false');
    });

    bundleCards.forEach((card) => {
      card.hidden = true;
    });

    updateBundleViewAllLabel(false);
  }

  bundleTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      if (tab.dataset.bundleTab === 'all' && tab.classList.contains('is-active')) {
        resetBundleTabs();
        return;
      }

      activateBundleTab(tab.dataset.bundleTab);
    });
  });
});

// =========================
// Services Page: Package Comparison Toggle
// =========================
document.addEventListener('DOMContentLoaded', () => {
  const comparisonToggle = document.querySelector('[data-comparison-toggle]');
  const comparisonContent = document.querySelector('[data-comparison-content]');

  if (!comparisonToggle || !comparisonContent) return;

  const toggleLabel = comparisonToggle.querySelector('span');

  function setPackageComparisonExpanded(shouldExpand, options = {}) {
    const shouldShowToggle = options.showToggle ?? true;
    comparisonToggle.setAttribute('aria-expanded', shouldExpand ? 'true' : 'false');
    comparisonToggle.classList.toggle('is-collapsed', !shouldExpand);
    comparisonToggle.hidden = !shouldShowToggle;
    comparisonContent.hidden = !shouldExpand;

    if (toggleLabel) {
      toggleLabel.textContent = shouldExpand ? 'Hide Comparison' : 'Show Comparison';
    }
  }

  window.setPackageComparisonExpanded = setPackageComparisonExpanded;

  setPackageComparisonExpanded(false);

  comparisonToggle.addEventListener('click', () => {
    const isExpanded = comparisonToggle.getAttribute('aria-expanded') === 'true';
    setPackageComparisonExpanded(!isExpanded, { showToggle: true });
  });
});

// =========================
// Services Page: Add-On Services Toggle
// =========================
document.addEventListener('DOMContentLoaded', () => {
  const addOnToggle = document.querySelector('[data-add-on-toggle]');
  const addOnContent = document.querySelector('[data-add-on-content]');

  if (!addOnToggle || !addOnContent) return;

  const toggleLabel = addOnToggle.querySelector('span');

  function setAddOnsExpanded(shouldExpand) {
    addOnToggle.setAttribute('aria-expanded', shouldExpand ? 'true' : 'false');
    addOnToggle.classList.toggle('is-collapsed', !shouldExpand);
    addOnContent.hidden = !shouldExpand;

    if (toggleLabel) {
      toggleLabel.textContent = shouldExpand ? 'Hide Add-Ons' : 'Show Add-Ons';
    }
  }

  setAddOnsExpanded(false);

  addOnToggle.addEventListener('click', () => {
    const isExpanded = addOnToggle.getAttribute('aria-expanded') === 'true';
    setAddOnsExpanded(!isExpanded);
  });
});

// =========================
// Global Scroll To Top
// =========================
document.addEventListener('DOMContentLoaded', () => {
  let scrollTopButton = document.querySelector('[data-scroll-top], .scroll-top');

  if (!scrollTopButton) {
    scrollTopButton = document.createElement('button');
    scrollTopButton.className = 'scroll-top';
    scrollTopButton.type = 'button';
    scrollTopButton.setAttribute('aria-label', 'Scroll to top');
    scrollTopButton.dataset.scrollTop = '';
    scrollTopButton.innerHTML = '<span class="scroll-arrow" aria-hidden="true">↑</span>';
    document.body.appendChild(scrollTopButton);
  }

  if (scrollTopButton.dataset.scrollBound === 'true') return;

  scrollTopButton.dataset.scrollBound = 'true';

  function updateScrollTopVisibility() {
    scrollTopButton.classList.toggle('show', window.scrollY > 180);
  }

  updateScrollTopVisibility();

  window.addEventListener('scroll', updateScrollTopVisibility);

  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
