import 'divine.css';
import { createApp } from 'petite-vue';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  slidesPerView: 5,
  spaceBetween: 30
});

const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('_svg/', false, /\.svg$/);

requireAll(req);

createApp({
  // exposed to all expressions
  isNav: false,
  subNav: '',
  count: 0,
  total: 480,
  // getters
  get plusOne() {
    return this.count + 1;
  }

}).mount('#app');
