const openMenuBtnEl = document.querySelector('[data-menu-open]');
const closemenuBtnEl = document.querySelector('[data-menu-close]');
const menuEl = document.querySelector('[data-menu]');
const bodyEl = document.querySelector('body');

openMenuBtnEl.addEventListener('click', toggleMenu);
closemenuBtnEl.addEventListener('click', toggleMenu);
menuEl.addEventListener('click', event => {
  if (event.target.classList.contains('mobile-menu-nav-link')) {
    toggleMenu();
  }
})

function toggleMenu() {
  menuEl.classList.toggle('hidden');
  if (menuEl.classList.contains('hidden')) {
    bodyEl.classList.remove('modal-open');
    return;
  }
  bodyEl.classList.add('modal-open');
}