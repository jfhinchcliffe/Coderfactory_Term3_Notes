var express = require('express');
var router = express.Router();
const Counter = require('../models/Counter');

/* GET home page. */
router.get('/', function(req, res, next) {
  Counter.find()
    .then(counters => {
      res.json(counters);  
    });
});
// Get counter with ID of :id
router.get('/:id', function(req, res, next) {
  const { id } = req.params;
  Counter.findById(id)
    .then(counter => {
      res.json(counter);
    });
});
// Create a single 
router.post('/', function(req, res, next) {
  Counter.create({
    count: 0
  })
    .then(counter => {
      res.json(counter);
    });
});
//update
router.patch('/:id', function(req, res, next) {
  const { id } = req.params;
  const { change = 0 } = req.body;
  // change is + 1 or - 1.
  Counter.findByIdAndUpdate(id, {
    $inc: { count: change }
  }, { new: true})
    .then(counter => {
      res.json(counter);
    });
});

router.delete('/:id', function(req, res, next) {
  const { id } = req.params;
  Counter.findByIdAndRemove(id)
    .then(counter => {
      res.json(counter);
    });
});


module.exports = router;
