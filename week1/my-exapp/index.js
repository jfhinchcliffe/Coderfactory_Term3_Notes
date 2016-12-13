const express = require('express');
const request = require('request');

const app = express();

 //assuming you installed this module
app.get('/', function(req, res){
  request('http://codefight.davidbanham.com/twitter', function(err, body){
       res.json(body); //res is the response object, and it passes info back to client side
       prettierJson(res);
  });
});

function prettierJson(ele) {
  var pretty = {};
  console.log(ele);
};


// app.get('/', function (req, res) {
//   res.send('Index Return. Page Content:');
// });


app.get('/cats', function(req, res) {
    res.json({
        species: 'cat',
        call: 'meow meow meow',
        lovesItsOwner: false
    });
});

app.get('/dogs', function(req, res) {
    res.json({
        species: 'dog',
        call: 'woof woof woof',
        lovesItsOwner: true
    });
});

app.listen(3000, function() {
    console.log('Listening on port 3000!');
});