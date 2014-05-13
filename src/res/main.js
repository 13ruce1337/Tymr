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
