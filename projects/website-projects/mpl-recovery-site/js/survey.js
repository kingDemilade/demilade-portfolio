window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('testimonial-survey-form');
  const status = document.getElementById('survey-status');

  if (!form || !status) return;

  const config = window.MPL_TESTIMONIALS_CONFIG || {};

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!config.googleAppsScriptUrl) {
      status.textContent = 'Survey storage is not connected yet. Add your Google Apps Script URL in js/testimonials-config.js.';
      status.className = 'survey-status error';
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);

    submitButton.disabled = true;
    status.textContent = 'Submitting your feedback...';
    status.className = 'survey-status';

    try {
      await fetch(config.googleAppsScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      form.reset();
      status.textContent = 'Thank you. Your testimonial was submitted for review.';
      status.className = 'survey-status success';
    } catch (error) {
      console.warn('Survey submission failed.', error);
      status.textContent = 'Something went wrong. Please try again in a moment.';
      status.className = 'survey-status error';
    } finally {
      submitButton.disabled = false;
    }
  });
});
