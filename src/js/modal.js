const reviewBtnEl = document.querySelector('[data-modal-open]');
const backdropEl = document.querySelector('[data-modal]');
const bodyEl = document.body;

const iconPath = new URL('/img/sprite.svg', import.meta.url).href;

const modalMarkup = `
  <div class="modal-container">
    <button class="modal-close-btn" data-modal-close></button>
    <h2 class="modal-heading">
      Leave a review about <span class="text-accent">our chocolate</span>
    </h2>

    <form class="modal-form">
      <div class="modal-form-item">
        <label class="modal-form-label" for="user-name">Name</label>
        <div class="form-input-container">
          <input class="modal-form-input" type="text" id="user-name" required />
          <svg class="form-input-icon" width="17" height="17">
            <use href="${iconPath}#icon-user"></use>
          </svg>
        </div>
      </div>

      <div class="modal-form-item">
        <label class="modal-form-label" for="user-email">Email</label>
        <div class="form-input-container">
          <input class="modal-form-input" type="email" id="user-email" required />
          <svg class="form-input-icon" width="17" height="17">
            <use href="${iconPath}#icon-mail"></use>
          </svg>
        </div>
      </div>

      <div class="modal-form-item">
        <label class="modal-form-label" for="user-phone">Phone number</label>
        <div class="form-input-container">
          <input class="modal-form-input" type="tel" id="user-phone" required />
          <svg class="form-input-icon" width="17" height="17">
            <use href="${iconPath}#icon-phone"></use>
          </svg>
        </div>
      </div>

      <div class="modal-form-item">
        <label class="modal-form-label" for="user-message">Comment</label>
        <textarea 
          class="form-textarea"
          name="user-message" 
          id="user-message" 
          placeholder="Enter text"
        ></textarea>
      </div>

      <div class="modal-form-item form-item-checkbox">
        <input class="hidden-checkbox visually-hidden" type="checkbox" value="true" name="user-privacy" id="user-privacy" required>
        <label class="modal-form-label-privacy" for="user-privacy">
          <span class="checkbox">
            <svg class="checkbox-icon" width="10" height="10">
              <use href="${iconPath}#icon-check"></use>
            </svg>
          </span>
          <span class="checkbox-text">
            I accept the terms and conditions of the 
            <a href="#" class="checkbox-link">Privacy Policy</a>
          </span>
        </label>
      </div>

      <button class="modal-form-btn" type="submit">Send</button>
    </form>
  </div>
`;

backdropEl.insertAdjacentHTML('beforeend', modalMarkup);

const modalCloseBtnEl = backdropEl.querySelector('[data-modal-close]');

reviewBtnEl.addEventListener('click', toggleModal);
modalCloseBtnEl.addEventListener('click', toggleModal);
backdropEl.addEventListener('click', onBackdropClick);
window.addEventListener('keydown', onEscPress);

function toggleModal() {
  backdropEl.classList.toggle('hidden');
  bodyEl.classList.toggle('modal-open');
}

function onBackdropClick(e) {
  if (e.target === backdropEl) toggleModal();
}

function onEscPress(e) {
  if (e.key === 'Escape' && !backdropEl.classList.contains('hidden')) {
    toggleModal();
  }
}