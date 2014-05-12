var hogan = require('hogan.js'),
    fs = require('fs'),
    data,
    template,
    output,
    html;

fs.readFile(__dirname + '/../lib/tymr.css', 'utf-8', function(err, d) {
  if(err){throw err;}
  var c = d;
  fs.readFile(__dirname + '/../../build/tymr.min.js', 'utf-8', function(err, d) {
    if(err){throw err;}
    var s = d;
    data = {
      css: c,
      script: s 
    };
    fs.readFile(__dirname + '/../lib/tymr.html', 'utf-8', function(err, d) {
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


