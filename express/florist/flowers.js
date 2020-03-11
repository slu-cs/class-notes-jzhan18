// Router for a flower collection
const express = require('express');

// Create the router
const router = express.Router();

// Pretend database
let flowers = [
  {id: 'tulip', color: 'pink', season: 'spring'},
  {id: 'rose', color: 'red', season: 'summer'}
];

// GET /flowers
router.get('/', function(request, response) {
  response.send(flowers);
});

// GET /flowers/id
router.get('/:id', function(request, response, next) {
  const flower = flowers.find(f => f.id === request.params.id);
  if (!flower) {
    next(); // leads to 404
  }  else {
    response.send(flower);
  }
  
});

// POST /flowers

// DELETE /flowers/id

// PUT /flower/id

module.exports = router;
