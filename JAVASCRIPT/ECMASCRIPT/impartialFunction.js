
// Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.
//Impartial function
function impartial(x, y, z) {
    return x + y + z;
  }
  var partialFn = impartial.bind(this, 1, 2);
  partialFn(10); // Returns 13