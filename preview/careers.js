/* Careers enhancements: no form submission, tracking, or applicant data storage. */
(() => {
  const button = document.querySelector('[data-copy-careers-email]');
  const status = document.querySelector('[data-copy-careers-status]');
  if (!button || !status || !navigator.clipboard?.writeText || !window.isSecureContext) return;

  button.hidden = false;
  button.addEventListener('click', async () => {
    button.disabled = true;
    try {
      await navigator.clipboard.writeText('hr@aloden.com');
      status.textContent = 'HR email copied: hr@aloden.com';
    } catch {
      status.textContent = 'Copy was not available. Select and copy hr@aloden.com, or use the email link.';
    } finally {
      button.disabled = false;
    }
  });
})();
