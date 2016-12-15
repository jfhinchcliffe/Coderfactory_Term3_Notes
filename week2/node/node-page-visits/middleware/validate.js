var validator = require('validator');

function validate(req, res, next) {
  const { body } = req; // gettig the property body from req (req.body)
  const { firstName, lastName, email} = body;
  if (firstName.length < 4 ) {
    next(new Error('First name must be longer than 4 character'));
  }
  else if (lastName.length < 4 ) {
    next(new Error('Last name must be longer than 4 character'));
  }
  else {
    next();  
  }
}

module.exports = validate;