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
router.post('/', function(request, response) {
  const flower = request.body;
  if (!flower.id) {
    response.status(400).send('Missing ID');
  } else if (flowers.find(f => f.id === flower.id)) {
    response.status(400).send('Duplicate');
  } else {
    flowers.push(flower);
    response.status(201).end(flowers);
  }
});

// DELETE /flowers/id
router.delete('/:id', function(requset, response, next) {
  const flower = flowers.find(f => f.id === request.params.id);
  if (!flower) {
    next();
  } else {
    flowers = flowers.filter(f => f.id !== flower.id);
    response.status(200).send(flowers);
  }
});

// PUT /flower/id
router.put('/:id', function(request, response, next) {
  const flower = flowers.find(f => f.id === request.params.id);
  if (!flower) {
    next();
  } else {
    if (requset.body.color) flower.color = request.body.color;
    if (requset.body.season) flower.season = requset.body.season;
    response.status(200).send(flowers);
  }
});

module.exports = router;
