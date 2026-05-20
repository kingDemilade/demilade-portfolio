document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('[data-department-search]');
  const filterButtons = document.querySelectorAll('[data-department-filter]');
  const resetButton = document.querySelector('[data-department-reset]');
  const departmentCards = Array.from(document.querySelectorAll('[data-department-card]'));
  const startState = document.querySelector('[data-department-start]');
  const emptyState = document.querySelector('[data-department-empty]');
  const pager = document.querySelector('[data-department-pager]');
  const resultsStatus = document.getElementById('departmentResultsStatus');
  const pageSize = 9;

  if (!departmentCards.length) return;

  let activeFilter = 'none';
  let currentPage = 1;
  let hasInteracted = false;

  function normalize(value) {
    return String(value || '').trim().toLowerCase();
  }

  function getFilterLabel() {
    if (activeFilter === 'all') return 'all service areas';
    const activeButton = document.querySelector(`[data-department-filter="${activeFilter}"]`);
    return activeButton ? activeButton.textContent : 'selected service area';
  }

  function getMatches() {
    const query = normalize(searchInput ? searchInput.value : '');

    if (!hasInteracted) {
      return [];
    }

    return departmentCards.filter(card => {
      const category = card.getAttribute('data-category');
      const haystack = normalize(`${card.textContent} ${card.getAttribute('data-search')}`);
      const matchesFilter = activeFilter === 'all' || activeFilter === 'none' || category === activeFilter;
      const matchesQuery = !query || haystack.includes(query);
      return matchesFilter && matchesQuery;
    });
  }

  function createPagerButton(label, page, options = {}) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = options.className || 'department-pager-btn';
    button.textContent = label;

    if (options.icon) {
      button.innerHTML = options.icon;
    }

    if (options.disabled) {
      button.disabled = true;
    }

    if (options.current) {
      button.classList.add('is-current');
      button.setAttribute('aria-current', 'page');
    }

    if (options.label) {
      button.setAttribute('aria-label', options.label);
    }

    button.addEventListener('click', () => {
      currentPage = page;
      updateDepartments();
      document.getElementById('departmentDirectory').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return button;
  }

  function createPagerEllipsis() {
    const ellipsis = document.createElement('span');
    ellipsis.className = 'department-pager-ellipsis';
    ellipsis.textContent = '...';
    ellipsis.setAttribute('aria-hidden', 'true');
    return ellipsis;
  }

  function getPageNumbers(totalPages) {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 'ellipsis-end', totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [1, 'ellipsis-start', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, 'ellipsis-start', currentPage - 1, currentPage, currentPage + 1, 'ellipsis-end', totalPages];
  }

  function renderPager(totalPages) {
    if (!pager) return;

    pager.innerHTML = '';
    pager.hidden = totalPages <= 1;

    if (totalPages <= 1) return;

    pager.appendChild(createPagerButton('', Math.max(1, currentPage - 1), {
      className: 'department-pager-text',
      disabled: currentPage === 1,
      icon: '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i><span>Prev</span>',
      label: 'Previous page'
    }));

    getPageNumbers(totalPages).forEach(page => {
      if (typeof page === 'string') {
        pager.appendChild(createPagerEllipsis());
        return;
      }

      pager.appendChild(createPagerButton(String(page), page, {
        current: page === currentPage,
        label: `Page ${page}`
      }));
    });

    pager.appendChild(createPagerButton('', Math.min(totalPages, currentPage + 1), {
      className: 'department-pager-text',
      disabled: currentPage === totalPages,
      icon: '<span>Next</span><i class="fa-solid fa-chevron-right" aria-hidden="true"></i>',
      label: 'Next page'
    }));
  }

  function setActiveFilter(filterValue) {
    activeFilter = filterValue;

    filterButtons.forEach(button => {
      const isActive = button.getAttribute('data-department-filter') === activeFilter;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }

  function updateDepartments() {
    const query = normalize(searchInput ? searchInput.value : '');
    const matches = getMatches();
    const totalPages = Math.max(1, Math.ceil(matches.length / pageSize));

    currentPage = Math.min(currentPage, totalPages);

    const start = (currentPage - 1) * pageSize;
    const pageMatches = matches.slice(start, start + pageSize);

    departmentCards.forEach(card => {
      card.hidden = !pageMatches.includes(card);
    });

    if (startState) {
      startState.hidden = hasInteracted;
    }

    if (emptyState) {
      emptyState.hidden = !hasInteracted || matches.length !== 0;
      if (hasInteracted && matches.length === 0) {
        emptyState.querySelector('h3').textContent = 'No departments found';
        emptyState.querySelector('p').textContent = 'Try a different keyword or choose All Departments to broaden the directory.';
      }
    }

    if (resultsStatus) {
      if (!hasInteracted) {
        resultsStatus.textContent = 'Search or choose a category to browse departments.';
      } else if (matches.length === 0) {
        resultsStatus.textContent = 'No departments match the current search and filter.';
      } else {
        const resultWord = matches.length === 1 ? 'result' : 'results';
        const queryText = query ? ` matching "${query}"` : '';
        resultsStatus.textContent = `Showing ${start + 1}-${start + pageMatches.length} of ${matches.length} ${resultWord} in ${getFilterLabel()}${queryText}.`;
      }
    }

    renderPager(matches.length ? totalPages : 0);
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      hasInteracted = true;
      currentPage = 1;
      setActiveFilter(button.getAttribute('data-department-filter'));
      updateDepartments();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      hasInteracted = true;
      currentPage = 1;

      if (activeFilter === 'none') {
        setActiveFilter('all');
      }

      updateDepartments();
    });
  }

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      hasInteracted = false;
      currentPage = 1;
      setActiveFilter('none');

      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }

      updateDepartments();
    });
  }

  setActiveFilter('none');
  updateDepartments();
});
