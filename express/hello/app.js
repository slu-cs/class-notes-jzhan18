// Hello world web server
// Web server setup: once per server
// 1. npm init
// 2. npm install express

const express = require('express');

// Create the server
const app = express();

// cs-linuxlab-20.stlawu.edu:3000
// Respond to one request
app.get('/', function(request, response) {
  response.send('Hello Jiusheng');
});

// cs-linuxlab-20.stlawu.edu:3000/foo
app.get('/foo', function(request, response) {
  response.send('Hello foo');
});

// cs-linuxlab-20.stlawu.edu:3000/foo/bar
app.get('/foo/bar', function(request, response) {
  response.send('Hello bar');
});

// cs-linuxlab-20.stlawu.edu:3000/zap/z (for any z)
app.get('/zap/:z', function(request, response) {
  response.send(`Hello ${request.params.z}`);
});

// cs-linuxlab-20.stlawu.edu:3000/zap?x=&y=
app.get('/zap', function(request, response) {
  response.send(`Hello zap with ${request.query.x} and ${request.query.y}`);
});

// Start the server
app.listen(3000); // port 3000
console.log('Server is ready.')
