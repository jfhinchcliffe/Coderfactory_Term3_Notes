var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

function verifyEmailAndPassword(email, password) {
  if (password === '123') {
    return Promise.resolve(true);
  } else {
    return Promise.resolve(false);
  }  
};

/* GET home page. */
router.post('/', function(req, res, next) {
  const { email, password } = req.body
  // authenticating with database
  verifyEmailAndPassword(email, password)
  .then(authentic => {
    if (authentic) {
      const token = jwt.sign({ signedIn: true,  }, process.env.TOKEN_SECRET, { algorithm: 'HS256', expiresIn: '1 minute' });
      res.json({ token: token });
      res.redirect('/');
    } else {
      // not authentic - give an error
      res.status(401).json({
        error: 'Invalid Username or Password'
      })
    }
  });
});

module.exports = router;
