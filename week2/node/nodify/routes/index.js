var express = require('express');
var router = express.Router();
//const { searchArtists, searchTrakcs } = require('../lib/spotify-api');
const spotifyAPI = require('../lib/spotify-api');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/artists/:name', function(req, res, next) {
  const { name } = req.params;
  spotifyAPI.searchArtists(name)
  .then((artists) => {
    res.render('artists', { artists })
    // res.json(artists);
  })
  .catch(next);  
});

router.get('/artists/:tracks', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
