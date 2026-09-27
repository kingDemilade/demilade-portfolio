(() => {
  const form = document.getElementById('client-reflection-form');
  if (!form) return;

  const projectInput = document.getElementById('feedback-project');
  const projectContext = document.querySelector('[data-project-context]');
  const projectName = document.querySelector('[data-project-name]');
  const serviceSelect = document.getElementById('feedback-service');
  const permissionInputs = form.querySelectorAll('[name="publication_permission"]');
  const channelFieldset = form.querySelector('[data-channel-fieldset]');
  const channelInputs = form.querySelectorAll('[name="approved_channels"]');
  const channelError = form.querySelector('[data-channel-error]');
  const selectAllButton = form.querySelector('[data-select-all]');
  const params = new URLSearchParams(window.location.search);

  const cleanParameter = (value, maxLength = 120) => {
    if (!value) return '';
    return value.replace(/[<>]/g, '').trim().slice(0, maxLength);
  };

  const project = cleanParameter(params.get('project'));
  const requestedService = cleanParameter(params.get('service'));

  if (project && projectInput && projectContext && projectName) {
    projectInput.value = project;
    projectName.textContent = project;
    projectContext.hidden = false;
  }

  if (requestedService && serviceSelect) {
    const matchingOption = Array.from(serviceSelect.options).find((option) => option.value.toLowerCase() === requestedService.toLowerCase());
    if (matchingOption) serviceSelect.value = matchingOption.value;
  }

  const updateChannelState = () => {
    const permission = form.querySelector('[name="publication_permission"]:checked');
    const isPublic = permission && permission.value !== 'Private';
    channelFieldset.hidden = !isPublic;

    if (!isPublic) {
      channelInputs.forEach((input) => {
        input.checked = false;
      });
      channelError.hidden = true;
      selectAllButton.textContent = 'Select all';
    }
  };

  permissionInputs.forEach((input) => input.addEventListener('change', updateChannelState));

  selectAllButton.addEventListener('click', () => {
    const allSelected = Array.from(channelInputs).every((input) => input.checked);
    channelInputs.forEach((input) => {
      input.checked = !allSelected;
    });
    selectAllButton.textContent = allSelected ? 'Select all' : 'Clear all';
    channelError.hidden = true;
  });

  channelInputs.forEach((input) => {
    input.addEventListener('change', () => {
      const allSelected = Array.from(channelInputs).every((channel) => channel.checked);
      selectAllButton.textContent = allSelected ? 'Clear all' : 'Select all';
      if (Array.from(channelInputs).some((channel) => channel.checked)) channelError.hidden = true;
    });
  });

  form.addEventListener('submit', (event) => {
    const permission = form.querySelector('[name="publication_permission"]:checked');
    const needsChannel = permission && permission.value !== 'Private';
    const hasChannel = Array.from(channelInputs).some((input) => input.checked);

    if (!form.checkValidity() || (needsChannel && !hasChannel)) {
      event.preventDefault();
      form.classList.add('was-validated');

      if (needsChannel && !hasChannel) {
        channelError.hidden = false;
        channelInputs[0].focus();
      } else {
        const invalidField = form.querySelector(':invalid');
        if (invalidField) invalidField.focus();
      }
    }
  });
})();
