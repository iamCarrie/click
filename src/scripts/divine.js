import 'divine.css';
import { createApp } from 'petite-vue';
import Swiper from 'swiper';
import { Navigation, EffectCoverflow } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
// Swiper.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);

let windowWidth = window.innerWidth;

if (windowWidth < 750) {
  const swiper = new Swiper('.swiper', {
    // modules: [Navigation, EffectCoverflow],
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true
    // loopAdditionalSlides: 30
    // effect: 'coverflow',
    // coverflowEffect: {
    //   rotate: -30,
    //   stretch: 10,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true
    // }
  });
}

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
