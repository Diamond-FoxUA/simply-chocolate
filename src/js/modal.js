const reviewBtnEl = document.querySelector('[data-modal-open]');
const modalEl = document.querySelector('[data-modal]');
const bodyEl = document.querySelector('body');

reviewBtnEl.addEventListener('click', openModal);

const modalMarkup = `
  <div class="modal-container">
    <button class="modal-close-btn">
      <svg class="modal-close-btn-icon" width="28" height="28">
        <use href="/img/sprite.svg#icon-menu"></use>
      </svg>
    </button>
    <h2 class="modal-heading">
      leave a review about <span class="text-accent">our chocolate</span>
    </h2>

    <form class="modal-form">
      <div class="modal-form-item">
        <label class="modal-form-label" for="user-name">Name</label>
        <div class="form-input-container">
          <input class="modal-form-input" type="text" id="user-name" />
          <svg class="form-input-icon" width="17" height="17">
            <use href="/img/sprite.svg#icon-user"></use>
          </svg>
        </div>
      </div>
      <div class="modal-form-item">
        <label class="modal-form-label" for="user-email">Email</label>
          <div class="form-input-container">
            <input class="modal-form-input" type="email" id="user-email" />
            <svg class="form-input-icon" width="17" height="17">
              <use href="/img/sprite.svg#icon-mail"></use>
            </svg>
          </div>
      </div>
      <div class="modal-form-item">
        <label class="modal-form-label" for="user-phone">Phone number</label>
        <div class="form-input-container">
          <input class="modal-form-input" type="tel" id="user-phone" />
          <svg class="form-input-icon" width="17" height="17">
            <use href="/img/sprite.svg#icon-phone"></use>
          </svg>
        </div>
      </div>
      <div class="modal-form-item">
        <label class="modal-form-label" for="user-message">Comment</label>
        <textarea 
          name="user-message" 
          id="user-message" 
          placeholder="Enter text"
        ></textarea>
      </div>
      <div class="modal-form-item form-item-checkbox">
        <input class="modal-form-input" type="checkbox" value="true" name="user-privacy" id="user-privacy">
        <label class="modal-form-label" for="user-privacy">
          <span class="checkbox">
            <svg class="checkbox-icon" width="20" height="20">
              <use href="/img/sprite.svg#icon-check"></use>
            </svg>
          </span>
          <span class="checkbox-text">I accept the terms and conditions of the <a href="" class="checkbox-link">Privacy Policy</a></span>
        </label>
      </div>
    </form>
  </div>`

function openModal() {
  modalEl.insertAdjacentHTML('beforeend', modalMarkup);
}


