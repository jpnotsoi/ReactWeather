var express = require('express');

// create our app - pass express library
var app = express();

// tell which folder to serve - using app.use
// add functionality to your express functiona
// folder name to expose to the server - static('public')
app.use(express.static('public'));

// port - 3000, function ()
app.listen(3000,function () {
  console.log('Express server is up on port 3000');
});
