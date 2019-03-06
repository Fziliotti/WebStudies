// Functional Programming: Combine an Array into a String Using the join Method


// sentensify("May-the-force-be-with-you") should return a string.
function sentensify(str) {
    // Add your code below this line
    return str.split(/\W/).join(' '); 
    // Add your code above this line
  }
  console.log(sentensify("May-the-force-be-with-you"));