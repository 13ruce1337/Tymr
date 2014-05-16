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
    if(h > -1 && Tymr.minute() === 59 && Tymr.second() === 59 && d) {
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
    if(m > -1 && Tymr.second() === 59 && d) {
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
    }
    if(s === 0 && +$('.tymr_minute').val() === 0 && +$('.tymr_hour').val() === 0) {
      Tymr.beep(3000,5);
      return Tymr.stop();
    } else if(d) {
      s--;
    }
    if(s < 0) {
      return 59;
    }
    return s;
  },
  startdown:function() {
    $('.tymr_second').val(Tymr.second(1));
    $('.tymr_minute').val(Tymr.minute(1));
    $('.tymr_hour').val(Tymr.hour(1));
  }
};
