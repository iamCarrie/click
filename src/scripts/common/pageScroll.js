import $ from 'jquery';
window.$ = $;

export const scrVal = new scrFn();

function scrFn() {
  this.lay = {
    $w: $(window),
    $d: $(document),
    $hb: $('html , body'),
    $b: $('body'),
    _wW: $(window).width(),
    _wH: $(window).height()
  },
  this.scr = {
    _thisPG: 0,
    _prevPG: 0,
    _allPGTop: [],
    _allH: 0
  },
  this.hd = '';
}

export const menuScroll = (cnt, mjr, el) => {
  let $btn = $(el);
  let $cnt = $(cnt);
  let $mjr = $(mjr);

  $btn.on(
    'click',
    function (e) {
      // e.preventDefault();
      pageReset($cnt, $mjr);
      let n = $(this).data('m');
      let hdH = $('.jHd').height();

      $btn.removeClass('act');
      $(this).addClass('act');

      let top = scrVal.scr._allPGTop[n] - hdH;

      if (top) {
        scrVal.lay.$hb.animate(
          {
            scrollTop: top
          },
          1000
        );
        if (!$(this).hasClass('noToggle')) {
          let $hd = $('.jHd');
          $hd.toggleClass('fixed');
        }
      }
    }
  );
};

export const pageScroll = (cnt, mjr, el) => {
  let $cnt = $(cnt);
  let $mjr = $(mjr);

  scrVal.lay.$w.on('scroll', function () {
    let $hd = $('.jHd');
    let $tp = $('.jTop');
    // let _hdSet = $hd.offset().top;
    let _winSet = scrVal.lay.$w.scrollTop();

    let id = $(mjr).attr('id');

    // (_hdSet > 0) ? $hd.addClass('fixed') : $hd.removeClass('fixed');
    // (_winSet > scrVal.lay._wH / 3) ? $tp.addClass('show') : $tp.removeClass('show');

    pageAniSet($cnt, $mjr, el);
    pageReset($cnt, $mjr);
  });

  // console.log(location.href);

  scrVal.lay.$w.on('load', function () {
    pageReset($cnt, $mjr);
    pageAniSet($cnt, $mjr, el);
  });
};

export const pageAniSet = (cnt, mjr, el) => {
  let winH = scrVal.lay.$w.height();
  let winTop = scrVal.lay.$w.scrollTop();
  let winHelf = winH * 0.5;

  for (let p = 0; p <= $(mjr).length; p++) {
    if (winTop > scrVal.scr._allPGTop[p] - winHelf && winTop < scrVal.scr._allPGTop[p + 1] - winHelf) {
      scrVal.scr._thisPG = p;
    }
  }

  if (scrVal.scr._thisPG !== scrVal.scr._prevPG || scrVal.scr._thisPG == 0) {
    $(mjr).eq(scrVal.scr._thisPG).addClass('is-ani');
  } else {
    return false;
  }
  console.log(scrVal.scr._thisPG);

  scrVal.scr._prevPG = scrVal.scr._thisPG;

  $(el).removeClass('act');

  $(el + '[data-m="' + scrVal.scr._thisPG + '"]').addClass('act');
};

export const pageReset = (cnt, mjr) => {
  scrVal.scr._allPGTop = [];

  scrVal.scr._allH = $(cnt).outerHeight(true);

  mjr.each(

    function (i, obj) {
      let t = $(obj).offset().top;

      scrVal.scr._allPGTop.push(t);

      if (i == $(mjr).length - 1) {
        scrVal.scr._allPGTop.push(scrVal.scr._allH);
      }
    }

  );
};
