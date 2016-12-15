var express = require('express');
var router = express.Router();
var validateMiddleware = require('../middleware/validate.js')

/* GET home page. */
router.get('/', function(error, req, res, next) {
  res.render('index', { title: 'Express'});
});

router.post('/signup', validateMiddleware, function(req, res, next) {
  if (error) {
    res.render('index', {title: 'Express', error: error});  
  }
  else {
    res.redirect('/success')
  }
  next();
});


module.exports = router;
