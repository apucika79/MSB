const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      nav.classList.remove('open');
    }
  });
}
