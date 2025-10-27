const header = document.querySelector('.header');

let lastScrollY = window.scrollY;
let ticking = false;
let headerHidden = false;

function updateHeaderVisibility() {
  const currentScrollY = window.scrollY;

  if (currentScrollY < 50) {
    header.classList.remove('hidden');
    headerHidden = false;
  } else if (currentScrollY > lastScrollY && !headerHidden) {
    header.classList.add('hidden');
    headerHidden = true;
  } else if (currentScrollY < lastScrollY && headerHidden) {
    header.classList.remove('hidden');
    headerHidden = false;
  }

  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateHeaderVisibility);
    ticking = true;
  }
});
