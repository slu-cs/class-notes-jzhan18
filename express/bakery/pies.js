// Router for cake-related requests
const express = require('express');

// Create the router
const router = express.Router();

// Pretend database collection
const pies = [
  {id: 'apple', flavor: 'Apple'},
  {id: 'cherry', flavor: 'Cherry'}
];

// cs-linuxlab-20.stlawu.edu:3000/pies/
router.get('/', function(request, response) {
  response.render('pies/index', {pies: pies});
});

router.get('/:id', function(request, response, next) {
  // Pretend database lookup
  const pie = pies.find(pie => pie.id === request.params.id);
  if (!pie) {
    next(); // pass on this request
  } else {
    response.render('pies/detail', {pie: pie});
  }
});

module.exports = router;
