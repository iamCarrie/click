import 'divine.css';
import { createApp } from 'petite-vue';
import Swiper from 'swiper';
// import { Navigation, EffectCoverflow } from 'swiper/modules';
// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import $ from 'jquery';
window.$ = $;

// init Swiper:
// Swiper.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);

let windowWidth = window.innerWidth;

if (windowWidth < 750) {
  const swiper = new Swiper('.swiper', {
    spaceBetween: -50,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true

  });
}

const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('_svg/', false, /\.svg$/);

requireAll(req);

window.onload = function () {
  setTimeout(function () {
    $('.divine').addClass('is-ani');
  }, 100);

  $('.divine-click').on('click', function () {
    $('.divine-click').removeClass('is-active');
    $(this).addClass('is-active');
  });
};
