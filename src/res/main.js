var tymr = {
  time: function(h,m,s) {
    return tymr.hour()+':'+tymr.minute()+':'+tymr.second(); 
  },
  hour: function(h) {
    if(h > 24) {
      h = 24;
    } else if(h < 0) {
      h = 0;
    }
    return h || 0;
  },
  minute: function(m) {
    if(m > 59) {
      m = 00;
    } else if (m < 0) {
      m = 59;
    }
    return m || 0;
  },
  second: function(s) {
    if(s > 59) {
      s = 00;
    } else if(s < 0) {
      s = 59
    }
    return s || 0;
  }
};
