var express = require('express');
var router = express.Router();
const Ingredient  = require('../models/Ingredient');

function makeResourcesRouter (model, CollectionRenderer, itemRenderer) {
  /* GET home page. */
  router.get('/', function(req, res, next) {
  // model finds all items in the database
  Ingredient.find()
    // Promise, so call then() to get items array
    .then(items => {
      // express render view 'index'
      // pass items array along as local variable
      res.render('index', { 
        title: 'items',
        items: items  
        });  
    });
  //res.render('index', { title: 'Express' });
  });

  router.post('/', (req, res) => {
    const name = req.body.item;
    let item = new Item();
    item.name = name;
    item.save()
      .then(() => {
        res.redirect('/');
    });
  });
}

module.exports = makeResourcesRouter;
