import 'final.css';
// import { pageScroll } from './common/pageScroll';
import $ from 'jquery';
window.$ = $;

const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('_svg/', false, /\.svg$/);

requireAll(req);

window.onload = function () {
  setTimeout(function () {
    $('.final').addClass('is-ani');
  }, 100);
};
