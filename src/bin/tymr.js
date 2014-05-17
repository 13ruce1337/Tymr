/*
**
** Tymr Global Object
**
*/

Tymr = {
  timer:undefined,
  beep:(function() {
    if(window.audioContext || window.webkitAudioContext) {
      var ctx = new(window.audioContext || window.webkitAudioContext);
      return function (duration, type, finishedCallback) {
        duration = +duration;
        type = (type % 5) || 0;
        if (typeof finishedCallback != "function") {
            finishedCallback = function () {};
        }

        var osc = ctx.createOscillator();

        osc.type = type;

        osc.connect(ctx.destination);
        if(!Tymr.beepswitch) {
          osc.noteOn(0);
        }
        Tymr.beepswitch = true;

        setTimeout(function () {
          osc.noteOff(0);
          Tymr.beepswitch = false;
          finishedCallback();
        }, duration);
      };
    } else {
      return function() {
        alert('You must use Chrome if you want a sound to play when the timer runs out');
      }
    }
  })(),
  beepswitch:undefined,
  start:function() {
    if(+$('.tymr_second').val() <  1 && +$('.tymr_minute').val() < 1 && +$('.tymr_hour').val() < 1  ) {
      Tymr.beep(3000,5);
      return;
    }
    Tymr.stop();
    Tymr.startdown();
    Tymr.timer = setInterval(Tymr.startdown,1000);
  },
  stop:function() {
    clearInterval(Tymr.timer);
  },
  hour:function(d) {
    var h = +$('.tymr_hour').val(); 
    if(h > 23) {
      h = 23;
    }
    if(h > -1 && +$('.tymr_minute').val() === 59 && +$('.tymr_second') === 59 && d) {
      h--;
    }
    if(h < 0) {
      return 0;
    }
    return h;
  },
  minute:function(d) {
    var m = +$('.tymr_minute').val();
    if(m > 59) {
      m = 59;
    }
    if(m > -1 && +$('.tymr_second') === 59 && d) {
      m--;
    }
    if(m < 0) {
      return 59;
    }
    return m;
  },
  second:function(d) {
    var s = +$('.tymr_second').val();
    if(s > 59) {
      s = 59;
    } else if(d) {
      s--;
    }
    if(s < 0) {
      return 59;
    }
    console.log(s);
    return s;
  },
  startdown:function() {
    if(+$('.tymr_second').val() === 1 && +$('.tymr_minute').val() === 0 && +$('.tymr_hour').val() === 0) {
      $('.tymr_second').val(0);
      Tymr.stop();
      Tymr.beep(3000,5);
      return;
    }
    $('.tymr_second').val(Tymr.second(1));
    $('.tymr_minute').val(Tymr.minute(1));
    $('.tymr_hour').val(Tymr.hour(1));
  }
};
;$(function() {
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
  }

  $('.tymr_clear').on('click',function() {
    Tymr.stop();
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
