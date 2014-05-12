var tymr = {
  time: function(h,m,s) {
    return tymr.hour()+':'+tymr.minute()+':'+tymr.second(); 
  },
  hour: function(h) {
    return 0;
  },
  minute: function(m) {
    return 0;
  },
  second: function(s) {
    return 0;
  }
};
console.log(tymr.time());
