import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/css/bundle'
import 'normalize.css'
import '../styles/hamburger.css'
import '../styles/typography.css'
import '../styles/default.css'

import './hamburger.js'
import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

});

