var express = require('express');

// create our app - pass express library
var app = express();
const PORT = process.env.PORT || 3000;

// check whether the req is http or https
// we want http
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

// tell which folder to serve - using app.use
// add functionality to your express functiona
// folder name to expose to the server - static('public')
app.use(express.static('public'));

// port - 3000, function ()
app.listen(PORT,function () {
  console.log('Express server is up on PORT ' + PORT);
});
