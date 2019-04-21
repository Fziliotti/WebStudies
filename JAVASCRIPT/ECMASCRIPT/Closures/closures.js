// PROBLEMA
// Initiate counter
var counter = 0;

// Function to increment counter
function add() {
    counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3
//mas qualquer outra parte do codigo pode alterar a variavel global counter

// COM CLOSURE
var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
})();

add();
add();
add();

// the counter is now 3

// The variable add is assigned the return value of a self-invoking function.

// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

// This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

// A closure is a function having access to the parent scope, even after the parent function has closed.
