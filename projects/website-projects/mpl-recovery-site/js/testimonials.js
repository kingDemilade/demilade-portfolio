window.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('testimonial-list');
  const filters = document.querySelectorAll('[data-testimonial-filter]');

  if (!list) return;

  const config = window.MPL_TESTIMONIALS_CONFIG || {};
  const fallbackJsonUrl = config.fallbackJsonUrl || 'data/testimonials.json';
  let testimonials = [];

  const normalizeKey = (key) => key.toLowerCase().replace(/[^a-z0-9]/g, '');
  const approvedValues = new Set(['yes', 'y', 'true', 'approved', '1']);

  const escapeHtml = (value = '') => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const parseCsv = (text) => {
    const rows = [];
    let row = [];
    let value = '';
    let inQuotes = false;

    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];
      const next = text[i + 1];

      if (char === '"' && inQuotes && next === '"') {
        value += '"';
        i += 1;
      } else if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        row.push(value);
        value = '';
      } else if ((char === '\n' || char === '\r') && !inQuotes) {
        if (value || row.length) {
          row.push(value);
          rows.push(row);
          row = [];
          value = '';
        }
        if (char === '\r' && next === '\n') i += 1;
      } else {
        value += char;
      }
    }

    if (value || row.length) {
      row.push(value);
      rows.push(row);
    }

    const headers = (rows.shift() || []).map(normalizeKey);

    return rows.map((cells) => {
      const entry = {};
      headers.forEach((header, index) => {
        entry[header] = (cells[index] || '').trim();
      });
      return entry;
    });
  };

  const fromSheetRow = (row) => ({
    approved: row.approved || row.status || '',
    name: row.name || row.displayname || 'MPL Recovery Client',
    role: row.role || row.category || 'Athlete',
    title: row.title || row.displaytitle || row.relationship || row.role || '',
    rating: row.rating || '',
    service: row.service || row.serviceused || '',
    testimonial: row.testimonial || row.feedback || row.review || '',
    photo: row.photo || row.photourl || row.image || row.imageurl || ''
  });

  const isApproved = (item) => approvedValues.has(String(item.approved || '').trim().toLowerCase());

  const ratingStars = (rating) => {
    const count = Math.max(0, Math.min(5, Number.parseInt(rating, 10) || 0));
    return count ? `<div class="testimonial-stars" aria-label="${count} out of 5 stars">${'★'.repeat(count)}</div>` : '';
  };

  const photoMarkup = (item, index) => {
    const photo = item.photo || `images/testimonials/testimonial-${index + 1}.jpg`;
    const label = `${item.role || 'Client'} Photo`;
    const filename = photo.split('/').pop();

    return `
      <div class="testimonial-photo image-slot" data-image-slot="Upload: ${escapeHtml(photo)}">
        <img class="slot-image" src="${escapeHtml(photo)}" alt="${escapeHtml(item.name)}" onload="this.closest('.image-slot').classList.add('has-image')" onerror="this.hidden=true">
        <div class="image-placeholder">
          <i class="fa-solid fa-image"></i>
          <span>${escapeHtml(label)}</span>
          <small>${escapeHtml(filename)}</small>
        </div>
      </div>
    `;
  };

  const render = (items, filter = 'all') => {
    const visible = items.filter((item) => (
      filter === 'all' || String(item.role || '').toLowerCase() === filter
    ));

    if (!visible.length) {
      list.innerHTML = `
        <div class="testimonial-empty">
          <h3>No Testimonials Yet</h3>
          <p>Approved responses for this category will appear here automatically.</p>
        </div>
      `;
      return;
    }

    list.innerHTML = visible.map((item, index) => `
      <article class="testimonial-card reveal testimonial-delay-${(index % 4) + 1}">
        ${photoMarkup(item, index)}
        <div class="testimonial-quote">
          ${ratingStars(item.rating)}
          <p>"${escapeHtml(item.testimonial)}"</p>
          <div>
            <strong>${escapeHtml(item.name)}</strong>
            <span>${escapeHtml(item.title || item.role || item.service)}</span>
          </div>
        </div>
      </article>
    `).join('');

    if (window.MPLReveal && typeof window.MPLReveal.refresh === 'function') {
      window.MPLReveal.refresh();
    }
  };

  const loadTestimonials = async () => {
    list.innerHTML = '<div class="testimonial-empty"><p>Loading testimonials...</p></div>';

    try {
      if (config.googleSheetsCsvUrl) {
        const response = await fetch(config.googleSheetsCsvUrl);
        const csv = await response.text();
        testimonials = parseCsv(csv).map(fromSheetRow).filter((item) => isApproved(item) && item.testimonial);
      }

      if (!testimonials.length) {
        const fallbackResponse = await fetch(fallbackJsonUrl);
        testimonials = (await fallbackResponse.json()).filter((item) => isApproved(item) && item.testimonial);
      }

      render(testimonials);
    } catch (error) {
      console.warn('Testimonials could not be loaded.', error);
      list.innerHTML = `
        <div class="testimonial-empty">
          <h3>Testimonials Unavailable</h3>
          <p>Please check the Google Sheet connection or fallback JSON file.</p>
        </div>
      `;
    }
  };

  filters.forEach((button) => {
    button.addEventListener('click', () => {
      filters.forEach((filterButton) => filterButton.classList.remove('active'));
      button.classList.add('active');
      render(testimonials, button.dataset.testimonialFilter);
    });
  });

  loadTestimonials();
});
