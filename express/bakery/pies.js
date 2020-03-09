// Router for cake-related requests
const express = require('express');

// Create the router
const router = express.Router();

// cs-linuxlab-20.stlawu.edu:3000/pies/
router.get('/', function(request, response) {
  response.send(`
    <h1>Cakes</h1>
    <ul>
      <li><a href="/pies/apple">Apple</a></li>
      <li><a href="/pies/cherry">Cherry</a></li>
    </ul>
    `);
});

router.get('/:id', function(request, response, next) {
  if (request.param.id === 'apple') {
    response.send('Apple pies');
  } else if (request.param.id === 'cherry') {
    response.send('Cherry pies');
  } else {
    next(); // Pass on this request
  }
});

module.exports = router;
