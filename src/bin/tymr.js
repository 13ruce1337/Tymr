/*
**
** Tymr Global Object
**
*/

Tymr = {
  timer:undefined,
  start:function() {
    clearInterval(Tymr.timer);
    Tymr.startdown();
    Tymr.timer = setInterval(Tymr.startdown,1000);
  },
  stop:function() {
    clearInterval(Tymr.timer);
  },
  hour:function() {
    var h = +$('.tymr_hour').val(); 
    if(h > 23) {
      h = 23;
    }
    if(h > -1 && Tymr.minute() === 58) {
      h--;
    }
    if(h < 0) {
      return 0;
    }
    return h;
  },
  minute:function() {
    var m = +$('.tymr_minute').val();
    if(m > 59) {
      m = 59;
    }
    if(m > -1 && Tymr.second() === 58) {
      m--;
    }
    if(m < 0) {
      return 59;
    }
    return m;
  },
  second:function() {
    if($('.tymr_second').val() !== 'number') {
      console.log('nAn');
    }
    var s = +$('.tymr_second').val();
    if(s > 59) {
      s = 59;
    }
    s--;
    if(s < 0) {
      return 59;
    }
    return s;
  },
  startdown:function() {
    if(+$('.tymr_second').val() <  1 && +$('.tymr_minute').val() < 1 && +$('.tymr_hour').val() < 1  ) {
      return Tymr.stop();
    } else {
      $('.tymr_second').val(Tymr.second());
      $('.tymr_minute').val(Tymr.minute());
      $('.tymr_hour').val(Tymr.hour());
    }
  }
};
;$(function() {
  var fullscreentoggle = $('.tymr_full_screen'),
      hour = $('.tymr_hour'),
      min = $('.tymr_minute'),
      sec = $('.tymr_second'),
      sep = $('.tymr_separator'),
      mousetimeout;
  
  /* separators */
  sep.text(':');

  /* Launch fullscreen for browsers that support it */
  function launchFullScreen(element) {
    if(element.requestFullScreen) {
      element.requestFullScreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  }

  function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
    else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }
    else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
    else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
  }

  fullscreentoggle.on('click',function() {
    if(!window.fullScreen) {
      launchFullScreen(document.documentElement);
    } else {
      exitFullScreen();
    }
  });

  /* start timer */
  $('.tymr_start').on('click',function() {
    Tymr.start();
  });

  /* stop timer */
  $('.tymr_stop').on('click',function() {
    Tymr.stop();
  });

  /* clear input fields */
  function clear(a) {
    a.val(0);
  }

  $('.tymr_clear').on('click',function() {
    clear(hour);
    clear(min);
    clear(sec);
  });

  /* mouse cursor hide */
  document.onmousemove = function() {
    $('html').css('cursor','default');
    function mousehide() {
      $('html').css('cursor','none');
    }
    clearTimeout(mousetimeout);
    mousetimeout = setTimeout(mousehide,3000);
  }
});
