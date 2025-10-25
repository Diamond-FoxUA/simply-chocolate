import Swiper from "swiper";
import {Autoplay, Navigation, Keyboard, Pagination } from "swiper/modules";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import '../css/styles.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Keyboard, Autoplay],
  loop: true,
  autoplay: {
    delay: 10000,
    pauseOnMouseEnter: false,
    disableOnInteraction: false
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  keyboard: {
    enabled: true
  }
})