'use strict'
// Variables are hoisted at the top of the current scope
var foo;
var wow;

// Function declarations are hoisted as-is at the top of the current scope
function bar (wow) {
  var pow;
  pow = 'pow';
  console.log(foo);
  console.log(wow);
}

foo = 'foo';
wow = 'wow';

bar('zoom');
console.log(pow); // ReferenceError: pow is not defined


//----------------------------------------

let condition = true;

function bar () {
  if (condition) {
    var firstName = 'John'; // Accessible in the whole function
    let lastName = 'Doe'; // Accessible in the `if` only
    const fullName = firstName + ' ' + lastName; // Accessible in the `if` only
  }

  console.log(firstName); // John
  console.log(lastName); // ReferenceError
  console.log(fullName); // ReferenceError
}

bar();

var foo = 'foo';

// An Immediately Invoked Function Expression (IIFE)
// is a very popular JavaScript pattern that allows a 
// function to create a new block scope. IIFEs are simply 
// function expressions that we invoke as soon as the 
// interpreter runs through the function. Here's an 
// example of an IIFE:
(function bar () {
  console.log('in function bar');
})()

console.log(foo);