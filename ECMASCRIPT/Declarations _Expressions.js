function funcDeclaration() {
    return 'A function declaration';
}

var funcExpression = function () {
    return 'A function expression';
}


// Similar to the var statement, function declarations are hoisted to the top of other code. Function expressions aren’t hoisted,
// which allows them to retain a copy of the local variables from the scope where they were defined.

// Normally function declarations and function expressions can be used interchangeably, but there are 
// times when function expressions result in easier to understand code without the need for a temporary function name.


// There are several different ways that function expressions become more useful than function declarations:
// As closures
// As arguments to other functions
// As Immediately Invoked Function Expressions (IIFE)

// TypeError: functionOne is not a function
functionOne();

var functionOne = function () {
    console.log("Hello!");
};

// Outputs: "Hello!"
functionTwo();

function functionTwo() {
    console.log("Hello!");
}



var xyz = function abc() {
    // xyz is visible here
    // abc is visible here
}
// xyz is visible here
// abc is undefined here


function xyz() {
    function abc() {};
    // abc is defined here...
}
// ...but not here