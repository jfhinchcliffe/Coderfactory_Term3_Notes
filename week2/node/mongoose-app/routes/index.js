var express = require('express');
var router = express.Router();
const Ingredient  = require('../models/Ingredient');


/* GET home page. */
router.get('/', function(req, res, next) {
  // model finds all ingredients in the database
  Ingredient.find()
    // Promise, so call then() to get ingredients array
    .then(ingredients => {
      // express render view 'index'
      // pass ingredients array along as local variable
      res.render('index', { 
        title: 'ingredients',
        ingredients: ingredients  
       });  
    });
  //res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  const name = req.body.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(() => {
      res.redirect('/');
  });
});

router.get('/show/:id', (req, res) => {
  Ingredient.findById(req.params.id)
    .then(ingredient => {
      res.render('show', { 
        ingredient: ingredient  
       }); 
    });
});

router.get('/update/:id', (req, res) => {
  Ingredient.findById(req.params.id)
    .then(ingredient => {
      res.render('update', { 
        ingredient: ingredient  
       }); 
    });
});

router.post('/update/:id', (req, res) => {
  const name = req.body.ingredient_name;
  Ingredient.findById(req.params.id)
    .then(ingredient => {
      ingredient.name = name;
      ingredient.save()
        .then(() => {
          res.redirect('/show/' + req.params.id);
      });
  });
});


router.get('/delete/:id', (req, res) => {
  Ingredient.findOneAndRemove({ _id: req.params.id }, (err, ingredient) => {
    if (err) {
      console.log("NOT BALEETED");
    } else {
      console.log("BALEETED");
    }
  });
  res.redirect('/');
});


module.exports = router;
