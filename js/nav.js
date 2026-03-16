/* ============================================================
   BLOOM HOLLOW FARM — NAVIGATION
   Handles active link highlighting.
   Each page is a separate HTML file — no JS routing needed.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // Highlight the nav link that matches the current page filename
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (
      href === filename ||
      (filename === 'index.html' && href === 'index.html') ||
      (filename === ''          && href === 'index.html')
    ) {
      link.classList.add('active');
    }
  });

});
