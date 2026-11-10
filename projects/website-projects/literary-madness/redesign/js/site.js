document.documentElement.classList.add("js");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setupMobileNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const navigation = document.getElementById("primary-navigation");
  if (!header || !toggle || !navigation) return;

  const mobileQuery = window.matchMedia("(max-width: 52rem)");

  function setMenuState(isOpen) {
    header.classList.toggle("is-nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  }

  toggle.addEventListener("click", () => {
    setMenuState(!header.classList.contains("is-nav-open"));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });

  mobileQuery.addEventListener("change", (event) => {
    if (!event.matches) setMenuState(false);
  });
}

function setupRevealMotion() {
  const revealTargets = [
    ...document.querySelectorAll("main > section:not(.hero), .league-card, #heroes-matchups, #villains-matchups")
  ];

  revealTargets.forEach((target) => target.setAttribute("data-reveal", ""));

  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10%", threshold: 0.08 }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
}

function setupActiveNavigation() {
  if (!("IntersectionObserver" in window)) return;

  const navigationLinks = [...document.querySelectorAll('nav a[href^="#"]')];
  const observedSections = navigationLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!observedSections.length) return;

  function setCurrentSection(sectionId) {
    navigationLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${sectionId}`;
      if (isCurrent) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry) setCurrentSection(visibleEntry.target.id);
    },
    { rootMargin: "-20% 0px -60%", threshold: [0, 0.1, 0.25, 0.5] }
  );

  observedSections.forEach((section) => sectionObserver.observe(section));
}

function setupLeagueChampionTabs() {
  const showcase = document.querySelector(".league-showcase");
  if (!showcase) return;

  const tabGroup = showcase.querySelector(".league-champion-tabs");
  if (!tabGroup) return;

  const tabs = [...tabGroup.querySelectorAll('[role="tab"]')];
  const panels = tabs
    .map((tab) => document.getElementById(tab.getAttribute("aria-controls")))
    .filter(Boolean);

  if (!tabs.length || !panels.length) return;

  function setEmptyState() {
    showcase.dataset.championState = "empty";
    tabs.forEach((tab) => {
      tab.setAttribute("aria-selected", "false");
      tab.tabIndex = 0;
    });
  }

  function activateChampion(activeTab, shouldFocus = false) {
    const selectedLeague = activeTab.dataset.league;

    showcase.dataset.championState = selectedLeague;

    tabs.forEach((tab) => {
      const isActive = tab === activeTab;
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel) => {
      const isActivePanel = panel.id === activeTab.getAttribute("aria-controls");
      if (isActivePanel) panel.classList.add("is-visible");
    });

    if (shouldFocus) activeTab.focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateChampion(tab));

    tab.addEventListener("keydown", (event) => {
      const keyMap = {
        ArrowLeft: index - 1,
        ArrowRight: index + 1,
        Home: 0,
        End: tabs.length - 1
      };

      if (!(event.key in keyMap)) return;
      event.preventDefault();

      const nextIndex = (keyMap[event.key] + tabs.length) % tabs.length;
      activateChampion(tabs[nextIndex], true);
    });
  });

  setEmptyState();
}

function setupRoundSpotlight() {
  const bracket = document.querySelector(".visual-bracket");
  if (!bracket) return;

  const controls = document.createElement("div");
  controls.className = "round-spotlight";
  controls.setAttribute("role", "group");
  controls.setAttribute("aria-label", "Spotlight a tournament round");

  const label = document.createElement("span");
  label.textContent = "Spotlight round";
  controls.append(label);

  const status = document.createElement("p");
  status.className = "spotlight-status";
  status.setAttribute("aria-live", "polite");

  const rounds = [
    ["all", "Full bracket", "bracket-all"],
    ["opening", "Opening", "bracket-opening"],
    ["semifinal", "Semifinals", "bracket-semifinals"],
    ["league-final", "League finals", "bracket-league-finals"],
    ["championship", "Championship", "bracket-championship"],
    ["champion", "Champion", "bracket-champion"]
  ];

  function scrollMobileBracketToRound(value) {
    if (!window.matchMedia("(max-width: 52rem)").matches) return;

    const targetSelector = {
      all: ".combined-bracket__title",
      opening: ".heroes-bracket .opening-round",
      semifinal: ".heroes-bracket .semifinal-round",
      "league-final": ".heroes-bracket .league-final-round",
      championship: ".championship-clash",
      champion: ".championship-result"
    }[value];

    const target = targetSelector ? bracket.querySelector(targetSelector) : null;
    if (!target) return;

    target.scrollIntoView({
      block: "nearest",
      inline: "start",
      behavior: prefersReducedMotion.matches ? "auto" : "smooth"
    });
  }

  function activateRound(activeButton, shouldUpdateHash = true, shouldScroll = true) {
    const value = activeButton.dataset.round;
    const text = activeButton.textContent;

    bracket.dataset.focus = value;
    controls.querySelectorAll("button").forEach((control) => {
      control.setAttribute("aria-pressed", String(control === activeButton));
    });

    status.textContent = value === "all"
      ? "The full bracket is highlighted."
      : `${text} highlighted in the visual bracket.`;

    if (shouldUpdateHash) {
      history.pushState(null, "", `#${activeButton.id}`);
    }

    if (shouldScroll) scrollMobileBracketToRound(value);
  }

  rounds.forEach(([value, text, id], index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.id = id;
    button.textContent = text;
    button.dataset.round = value;
    button.setAttribute("aria-controls", "visual-bracket");
    button.setAttribute("aria-pressed", String(index === 0));

    button.addEventListener("click", () => {
      activateRound(button);
    });

    controls.append(button);
  });

  bracket.dataset.focus = "all";
  bracket.before(controls);
  controls.after(status);

  const hashButton = document.getElementById(window.location.hash.slice(1));
  if (hashButton?.closest(".round-spotlight") === controls) {
    activateRound(hashButton, false);
    hashButton.scrollIntoView({
      block: "center",
      behavior: prefersReducedMotion.matches ? "auto" : "smooth"
    });
  }

  window.addEventListener("hashchange", () => {
    const nextButton = document.getElementById(window.location.hash.slice(1));
    if (nextButton?.closest(".round-spotlight") === controls) {
      activateRound(nextButton, false);
    }
  });
}

function setupMatchupTabs() {
  const tabGroups = [...document.querySelectorAll(".matchup-tabs")];
  if (!tabGroups.length) return;

  tabGroups.forEach((tabGroup) => {
    const tabs = [...tabGroup.querySelectorAll('[role="tab"]')];
    const panels = tabs
      .map((tab) => document.getElementById(tab.getAttribute("aria-controls")))
      .filter(Boolean);

    if (!tabs.length || !panels.length) return;

    function activateTab(activeTab, shouldFocus = false) {
      tabs.forEach((tab) => {
        const isActive = tab === activeTab;
        const panel = document.getElementById(tab.getAttribute("aria-controls"));

        tab.setAttribute("aria-selected", String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
        if (panel) panel.hidden = !isActive;
      });

      if (shouldFocus) activeTab.focus();
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activateTab(tab));

      tab.addEventListener("keydown", (event) => {
        const keyMap = {
          ArrowLeft: index - 1,
          ArrowRight: index + 1,
          Home: 0,
          End: tabs.length - 1
        };

        if (!(event.key in keyMap)) return;
        event.preventDefault();

        const nextIndex = (keyMap[event.key] + tabs.length) % tabs.length;
        activateTab(tabs[nextIndex], true);
      });
    });

    activateTab(tabs.find((tab) => tab.getAttribute("aria-selected") === "true") || tabs[0]);
  });
}

function setupScrollTop() {
  const scrollTopButton = document.querySelector(".scroll-top");
  if (!scrollTopButton) return;

  let scrollUpdatePending = false;

  function updateScrollTopButton() {
    scrollTopButton.classList.toggle("is-visible", window.scrollY > 500);
    scrollUpdatePending = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (scrollUpdatePending) return;
      window.requestAnimationFrame(updateScrollTopButton);
      scrollUpdatePending = true;
    },
    { passive: true }
  );

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion.matches ? "auto" : "smooth"
    });
    scrollTopButton.blur();
  });

  updateScrollTopButton();
}

setupMobileNavigation();
setupLeagueChampionTabs();
setupRevealMotion();
setupActiveNavigation();
setupRoundSpotlight();
setupMatchupTabs();
setupScrollTop();
