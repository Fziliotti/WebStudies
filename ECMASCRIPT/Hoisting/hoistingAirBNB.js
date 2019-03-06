

function example() {
    console.log(anonymous); // => undefined
  
    anonymous(); // => TypeError anonymous is not a function
  
    var anonymous = function () {
      console.log('anonymous function expression');
    };
  }

  


function example() {
    console.log(named); // => undefined
  
    named(); // => TypeError named is not a function
  
    superPower(); // => ReferenceError superPower is not defined
  
    var named = function superPower() {
      console.log('Flying');
    };
  }
  
  // the same is true when the function name
  // is the same as the variable name.
  function example() {
    console.log(named); // => undefined
  
    named(); // => TypeError named is not a function
  
    var named = function named() {
      console.log('named');
    };
  }



function example() {
    superPower(); // => Flying
  
    function superPower() {
      console.log('Flying');
    }
  }