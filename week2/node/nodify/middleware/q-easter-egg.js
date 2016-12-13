function qEasterEgg(req, res, next) {
  const path = req.path;
  if (path.indexOf('q') !== -1) {
    res.render('q-easter-egg');
  } 
  else {
    next();
  }
}

module.exports = qEasterEgg;