## Week 3 Notes

Rather than build a node app from scratch, we have frameworks. 
For example, Rails is a framework for Ruby.Express has middleware

Middleware is a callback function with 3 params - request, repsonse, text

## Creating a new express app
`npm install express-generator -g`

express generator
`express --view=ejs --git`
cd into dir 
`npm-i`
main file is APP.js - sets up express and sets up middleware

[Node JS Documentation](http://expressjs.com/)

use nodemon to run server. it will restart when changes are detected

const { name } = req.params;

## Json Stringify

`<%= JSON.stringify(artist.images) %>` will make an object spill its guts. 