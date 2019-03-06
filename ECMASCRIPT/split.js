function splitify(str) {
    // Add your code below this line
    return str.split(/\W/);
    // Add your code above this line

}
console.log(splitify("Hello World,I-am code"));



var str = "Hello World";
var bySpace = str.split(" ");
console.log(bySpace);
// Sets bySpace to ["Hello", "World"]




var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
console.log(byDigits);
// Sets byDigits to ["How", "are", "you", "today"]


