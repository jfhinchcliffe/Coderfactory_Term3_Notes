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

## Talk from Adam at ZenDesk

## Functional Programming

_Note_ : 
- Double check ES6 syntax
- Check callbacks in Node
- Revisit map, filter, reduce

Core concepts  - functions, data models, what is done to the data 
'this' - in Javascript

const arr = [1,2,3]

arr.filter( n=> n%2) // 2
arr.filter( !(n=> n%2)) // 1,3

arr.map(n => n * 2) // 2,4,6 

reduce arr.reduce(n, total) => total + n, 0) // 6

## Function Composition
Chaining functions - calling all at once.

Take small functions and chain them together - basis of functional Programming

## Functional Purity
Taking functions and ensuring that they always return the same output from input.
Don't have functions rely on outside state. Pass all required elements into the function.

## Currying and partial application
_Partial Application_
use parameters but don't execute yet. Caches arguments 

const add = (x, y) => {
  return x + y
}

add.bind(null, 1) // [Function]
add.bind(null, 1)(2) //3

_Currying_
Lets you slowly pass in the variables until it receives its final parameter.
const { curry } = require('ramda')

const add - (x,y) => x + y
const curriedAdd = curry(add)

curriedAdd(1) // [function]
curiedAdd(1,2) // 3

## Bringing it all together

Dr Booleans Guide to Functional Programming

## MongoDB
Unlike SQL, document oriented. 
no table based design and joins
blobs of Jason data. 
things are stored in documents inside a collection
ie collection 'things' 

## Trent from CF Talk

## Install node / express scaffold for project

npm install express-generator -g

make a folder

cd into it

node

express --view=ejs --git node-spotify

npm install

atom .