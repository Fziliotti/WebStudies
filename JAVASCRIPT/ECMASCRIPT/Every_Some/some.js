// Functional Programming: Use the some Method to Check that Any Elements in an Array Meet a Criteria

var numbers = [10, 50, 2, 220, 110, 11];
let a = numbers.some(function(currentValue) {
  return currentValue < 10;
});


console.log(a);

// Returns true if some item of array responds with true for the callback