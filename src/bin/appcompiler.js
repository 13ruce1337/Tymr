var hogan = require('hogan.js'),
    fs = require('fs'),
    data,
    template,
    output,
    html;

/* reading files [css, jquery, tymr] */
fs.readFile(__dirname + '/../libs/tymr.css', 'utf-8', function(err, d) {
  if(err){throw err;}
  var c = d;
  fs.readFile(__dirname + '/../../build/tymr.min.js', 'utf-8', function(err, d) {
    if(err){throw err;}
    var s = d;
    fs.readFile(__dirname + '/../plugins/jquery-1-11-1.js', 'utf-8', function(err, d) {
      if(err){throw err;}
      var j = d;

      /* packing file data into object for template */
      data = {
        css: c,
        jquery: j,
        script: s 
      };

      /* Hogan compiles stand-alone HTML template application */
      fs.readFile(__dirname + '/../libs/tymr.html', 'utf-8', function(err, d) {
        if(err) {throw err;}
        html = d;
        template = hogan.compile(html);
        output = template.render(data);
        fs.writeFile(__dirname + '/../../build/tymr.html', output, function(err) {
          if(err) {
            console.log(err);
          }
        });
      });
    });
  });
});


