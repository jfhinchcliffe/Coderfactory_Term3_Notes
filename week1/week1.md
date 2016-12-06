## Week 1 - Javascript
### Javascript types vs Ruby

JS has the same primitive types

Use camelCase for variables

JS creating a new instance is new Date(); instead of Time.now (Ruby)

## Hashes

Hashes and onkects are often the same type

```
var customer = {
  firstName: 'Fred',
  lastName: 'Jones',
  age: 35, 
  starSign: 'Taurus'
};

var firstName = Customer.firstName
var lastName = Ccustomer['lastName'];

var propertyName = 'age';
var value = customer[propertyName];
```

Always use curly parentheses
```
if (boolean) {
  // Do something
} else if (another condition) {
  // do another thing
} else {
  // all other scenarios
}
```

Similar functions to Ruby:
.forEach();
.map();
.filter();
.sort();
.push();

No implicit return - need to declare return.

When you see prototype in JS, it's the superclass of the instance you're dealing with.

Map returns an array, forEach lets you do something but returns nothing implitly. 

nvm is Node Version Manager
nvm use 6.9.1 will use node version 6.9.1
nvm ls will show all node versions on your computer

Within .filter, we eed a true or false expression for each element within the array. 
This will determine what appears in the returned array.

use === for a more precise 'is equals'

functions we can reuse over time

## JavaScript and the Browser - Manipulating the DOM

The DOM is a Document Object Model. We can change the elements which make up this page using Javascript

Base elements of the dom 
Document - <html> element (actually window.document)
docment.head <head> element
document.body - <body> element
window - global element in the borwser

Finding elements on the page 0 identify them using ides. 
eg <section id='section-1'>
</section>

var section1 = document.GetElementById('section-1');
section1.textContent
section1.innerHTML

## Finding elements.

id
GetElementById('section-1');
document.querySelector('#section-1')
get all fancy paragramphs
document.getElementsByClassName('fancy-paragraph');
get all lis
document.getElementsByTagName('li');
document.querySelectorAll('li');

## Creating elements


## Reduce, Map, Filter, 
var totalAmount = orders.reduce(function(sum, order) {
  return sum += order.amount
}, 0)


## Finding elements within the DOM
append source to target.
``` document.getElementById('target').appendChild(document.getElementById('source').lastChild); ```

find a node, then save it as a var. Then use it to locate its parent and delete. 
``` var star = document.getElementById('fallenstar');
star.parentNode.removeChild(star); ```

create a new child below parent 'math'
``` document.getElementById('math').appendChild(document.createTextNode('42')); ```

Create a new image below a span with the ID Sky
``` 
  var img = document.createElement('IMG');
  img.src = 'star_on.gif';
  document.getElementById('sky').appendChild(img); 
```

[Javascript CreateElement Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
[my JS Codepen](https://codepen.io/hinchy/pen/GNQVKO?editors=1010)

```
function createElementForName(name, index) {
  var element = document.createElement('p');
  element.id = ("name-" + index);
  element.textContent = name;
  return element;
}
```

## Creating a JS page 

HTML could look as simple as 
`<div id='app'></div>`

Then target it with the Javascript
`app = document.getElementById('app')`

We can have some data - an array of names:
`var namesOne = ['Louis', 'Sylvia', 'Byron', 'Dylan', 'Pat', 'Ruegen']`

And now we can create an HTML <p> for each name in the array:
```
function createElementForName(name, index){ // accepts the name of the element and the index
  var element = document.createElement('p'); // creates a paragraph and saves to a variable
  element.id = ("name-" + index); // sets a unique CSS classname for the element.
  element.textContent = name; // fills the content of the <p> with text - the name that's passed to the method
  return element; // no implicit returns - return the element. 
}
```

Now we just need a way to populate the page. We can do this by running the following (not within a function).
This calls the createElementForName function for each item in the array.
```
  names.forEach(function(name) {
    var element = createElementForName(name);
    app.appendChild(element);
  });
```
And now we have a complementary function that will create an element and append it to the page. 
```
  function createElementForName(name) {
    var element = document.createElement('p');
    element.textContent = name;
    return element;  
  };
```

## Notes
Adds the class 'highlighted' to an array. 
element.classList.add('highlighted')

## Chrome Dev Tools
- $0 shows the item you've got highlighted in inspector
- $0.childNodes shows all items that are children of the node you've got highlighted


## Tuesday - CallBack Functions

Why Callbacks?
Some operations prohibit other code from running. We want to know when an operation has finished so we can run code in response. 

A callback is a function that will be called when other code has ifnished. 

## Event Handlers

Listening to mouse and key events
An event occurs and we can set things up to listen. 

```
var counters = {
  'button1': 0,
  'button2': 0
} // new OBJECT - like a class - called buttons, with 2 values. Like a Hash or Key Value Pair

var button1 = document.getElementById('button1'); // setting button 1 to the HTML ID of button 1
var button2 = document.getElementById('button2'); // setting button 2 to the HTML ID of button 2

button1.addEventListener('click', function(event) { //adds a listener for a 'click' on the button 1 HTML element
  var target = event.target; // getting the HTML element that was clicked
  counters.button1 += 1; // incrementing counters.button1 value
  target.textContent = counters.button1 // setting button text content to the value of counter.button1
});
```

## Listening to events - keyup, keydown, input

[keyup etc. link to codepen ](http://codepen.io/burntcaramel/pen/qqoybv)