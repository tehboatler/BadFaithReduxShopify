'use strict';
var express = require('express');
var app = express();
var path = require('path');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, function() {
  console.log('App is running on port 3000...');
});
