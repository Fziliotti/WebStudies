var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world"
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50


  
  return "Retorno da template string!";
}
var a = tag`Hello ${ a + b } world ${ a * b}`;

console.log(a)

