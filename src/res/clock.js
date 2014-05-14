$(function() {
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
    Tymr.startdown();
    timer = setInterval(Tymr.startdown,1000);
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
  
  sep.text(':');
});
