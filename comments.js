// Create web server
var http = require('http');
var fs = require('fs');

// Create server
var server = http.createServer(function(req, res) {
  // Send HTML header and message
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
});

// Listen on port 8000, IP defaults to