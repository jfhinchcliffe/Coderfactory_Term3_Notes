
function addVisitor(req, res, next ) {
  console.log("GRANNNNN");
  console.log(req.path);
  next();
};

module.exports = addVisitor;