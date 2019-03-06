function alphabeticalOrder(arr) {
    // Add your code below this line
    
     return arr.sort(function(a, b) {
      return a > b;
    });
    // Add your code above this line
  }

  function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  ascendingOrder([1, 5, 2, 3, 4]);
  // Returns [1, 2, 3, 4, 5]
  
  function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
      return a < b;
    });
  }

  console.log(  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
  console.log(ascendingOrder([1, 5, 2, 3, 4]));
  console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']));
  // Returns ['z', 's', 'l', 'h', 'b']