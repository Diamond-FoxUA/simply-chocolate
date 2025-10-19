const openMenuBtnEl = document.querySelector('[data-menu-open]');
const closemenuBtnEl = document.querySelector('[data-menu-close]');
const menuEl = document.querySelector('[data-menu]');

openMenuBtnEl.addEventListener('click', toggleMenu);
closemenuBtnEl.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuEl.classList.toggle('hidden');
}