// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Quote form — NOT YET WIRED TO A BACKEND.
// Before launch, point this at a form service (e.g. Formspree/Basin) or the
// GoDaddy form handler, then remove the interception below.
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(
      'Online form delivery is being set up.\n\n' +
      'Please call 954-866-5590 to reach us right away.'
    );
  });
}
