import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

const buyBtn = document.querySelector('.btn-buy');
const subscribeBtn = document.querySelector('.form-btn');
const modalFormBtn = document.querySelector('.modal-form-btn');

if (buyBtn) {
  buyBtn.addEventListener('click', () => showInfo("Sorry, not available at the moment."));
}

if (subscribeBtn) {
  subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showSuccess("You successfully subscribed!")
  });
}

if (modalFormBtn) {
  modalFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showSuccess("Thank you for your feedback!");
  });
}

function showSuccess(message) {
  iziToast.success({
    position: "bottomRight",
    message
  })
}

function showInfo(message) {
  iziToast.info({
    position: "bottomRight",
    message
  })
}

