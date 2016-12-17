var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectID = require('mongodb').ObjectID;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test'; //test defiens the DB we're using.

/* GET home page. */
router.get('/', function(req, res, next) {
  var resultArray = []
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    var tadpoles = db.collection('tadpoles').find();
    tadpoles.forEach(function (doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    }, function() {
      db.close();
      res.render('../views/tadpoles/index', { title: 'Tadpoles Indsex', tadpoles: resultArray });
    });
  });
  
});

router.post('/insert', function(req, res, next) {
  const tadpole = { name: req.body.name };
  mongo.connect(url, function( err, db) {
    assert.equal(null, err);
    db.collection('tadpoles').insertOne(tadpole, function (err, result) {
      assert.equal(null, err);
      console.log('Tadpole Added');
      db.close();
    });
  });
  res.redirect('/tadpoles')
});

router.post('/update', function(req, res, next) {
  const tadpole = { name: req.body.name };
  var id = req.body.id;
  mongo.connect(url, function( err, db) {
    assert.equal(null, err);
    db.collection('tadpoles').updateOne({"_id": objectID(id)}, {$set: tadpole}, function (err, result) {
      assert.equal(null, err);
      console.log('Tadpole Updated');
      db.close();
    });
  });
});

router.get('/tadpoles/:id/update', function(req, res, next) {
  res.render('../views/tadpoles/index', { title: 'Update A Tadpole' });
});

router.post('/delete', function(req, res, next) {
  
});

// router.get('/show/:id', function(req, res, next) {
//   res.render('index', { title: 'Tadpoles Index' });
// });

router.get('/create', function(req, res, next) {
  res.render('../views/tadpoles/create', { title: 'Create A Tadpole' });
});

module.exports = router;