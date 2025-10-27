import Swiper from "swiper";
import {Autoplay, Navigation, Keyboard, Pagination } from "swiper/modules";

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
      spaceBetween: 28,
      loop: false
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