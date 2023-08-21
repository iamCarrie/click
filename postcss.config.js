const path = require('path');

console.log(path);
module.exports = {
  plugins: [
    // precss: {},
    require('postcss-import'),
    // require('postcss-each'),
    // require('postcss-for'),
    // require('postcss-assets'),
    // require('lost'),
    require('tailwindcss'),
    require('postcss-calc'),
    // require('postcss-mixins'),
    require('postcss-nested'),
    // require('postcss-apply-class'),
    require('postcss-pxtorem')({
      propList: ['*', '!text-shadow'],
      selectorBlackList: ['lHd', 'lBd'],
      minPixelValue: 3
    }),
    // require('postcss-px-to-viewport')([
    //   {
    //     unitToConvert: 'rpx',
    //     viewportWidth: 750,
    //     viewportUnit: 'vw',
    //     minPixelValue: 0
    //   }, {
    //     unitToConvert: 'dpx',
    //     viewportWidth: 1920,
    //     viewportUnit: 'vw',
    //     minPixelValue: 0
    //   }
    // ]),
    require('postcss-color-rgba-fallback')
    // require('autoprefixer')({
    //   grid: true,
    //   overrideBrowserslist: [
    //     '> 1%',
    //     'last 5 versions',
    //     'Firefox >= 45',
    //     'ios >= 8',
    //     'ie >= 10'
    //   ]
    // })
  ]
};
