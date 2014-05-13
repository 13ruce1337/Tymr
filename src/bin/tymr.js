Tymr = {
  time:function(h,m,s) {
    return tymr.hour()+':'+tymr.minute()+':'+tymr.second(); 
  },
  hour:function(h) {
    if(h > 24) {
      h = 24;
    } else if(h < 0) {
      h = 0;
    }
    return h || '00';
  },
  minute:function(m) {
    if(m > 59) {
      m = 00;
    } else if (m < 0) {
      m = 59;
    }
    return m || '00';
  },
  second:function(s) {
    s = $('.tymr_second').val();
    if(s > 59) {
      s = 00;
    } else if(s < 0) {
      s = 59
    }
    s--;
    return s || '00';
  },
  start:function() {
    Tymr.second($('.tymr_second').val());
    $('.tymr_second').val(Tymr.second());
  }
};
;$(function() {
  var fullscreentoggle = $('.tymr_full_screen'),
      hour = $('.tymr_hour'),
      min = $('.tymr_minute'),
      sec = $('.tymr_second'),
      sep = $('.tymr_separator'),
      mousetimeout,
      timer;

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
    timer = setInterval(Tymr.start(),1000);
  });

  /* stop timer */
  $('.tymr_stop').on('click',function() {
    clearInterval(timer);
  });

  /* clear input fields */
  function clear(a) {
    a.val(0);
  }
  $('.tymr_clear').on('click',function() {
    clear($('.tymr_hour'));
    clear($('.tymr_minute'));
    clear($('.tymr_second'));
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

  /* timer events */
  hour.on('click',function() {
  });
  min.on('click',function() {
  });
  sec.on('click',function() {
  });
  
  hour.text(Tymr.hour());
  min.text(Tymr.minute());
  sec.text(Tymr.second());
  sep.text(':');
});
