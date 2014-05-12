$(function() {
  var fullscreentoggle = $('.tymr_full_screen'),
      hour = $('.tymr_hour'),
      min = $('.tymr_minute'),
      sec = $('.tymr_second'),
      sep = $('.tymr_separator');

  // Launch fullscreen for browsers that support it!
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

  fullscreentoggle.on('click', function() {
    if(!window.fullScreen) {
      launchFullScreen(document.documentElement); // the whole page
    } else {
      exitFullScreen();
    }
  });

  hour.on('click', function() {
    $(this).replaceWith('<input class="tymr_hour_input" type="number" max="24" min="0" style="width:100%;text-align:center;border:none;margin:0;padding:0;vertical-align:top;background:inherit;color:inherit;font-size:inherit;"/>');
  });
  min.on('click', function() {
    $(this).replaceWith('<input class="tymr_minute_input" type="number" max="24" min="0" style="width:100%;text-align:center;border:none;margin:0;padding:0;vertical-align:top;background:inherit;color:inherit;font-size:inherit;"/>');
  });
  sec.on('click', function() {
    $(this).replaceWith('<input class="tymr_second_input" type="number" max="24" min="0" style="width:100%;text-align:center;border:none;margin:0;padding:0;vertical-align:top;background:inherit;color:inherit;font-size:inherit;"/>');
  });
  
  hour.text(tymr.hour());
  min.text(tymr.minute());
  sec.text(tymr.second());
  sep.text(':');
});
