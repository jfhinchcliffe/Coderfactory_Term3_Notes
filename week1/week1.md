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

