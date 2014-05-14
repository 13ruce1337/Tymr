$(function() {
  var fullscreentoggle = $('.tymr_full_screen'),
      hour = $('.tymr_hour'),
      min = $('.tymr_minute'),
      sec = $('.tymr_second'),
      sep = $('.tymr_separator'),
      hidetimeout;
  
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
    Tymr.stop();
  }

  $('.tymr_clear').on('click',function() {
    clear(hour);
    clear(min);
    clear(sec);
  });

  /* mouse cursor hide */
  document.onmousemove = function() {
    $('html').css('cursor','default');
    $('.tymr_controls').fadeIn(500);
    function hides() {
      $('html').css('cursor','none');
      $('.tymr_controls').fadeOut(500);
    }
    clearTimeout(hidetimeout);
    hidetimeout = setTimeout(hides,3000);
  }
});
