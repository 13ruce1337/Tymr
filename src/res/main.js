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
    return h || 0;
  },
  minute:function(m) {
    m = +$('.tymr_minute').val() || m;
    if(Tymr.second() === 0 && Tymr.hour !== 0) {
      if(Tymr.hour === 0 && m === 0) {
        return 0;
      }
      m--;
    }
    if(m >= 60) {
      return 0;
    } else if (m <= -1) {
      return 59;
    }
    return m || 0;
  },
  second:function(s) {
    if(s) {
      s--;
      return s;
    }
    console.log(s);
    return s;
  },
  startdown:function() {
    Tymr.second(+$('.tymr_second').val());
    $('.tymr_second').val(Tymr.second());
  }
};
