
// A função seguinte toma como argumento um objeto. O laço for...in iterage sobre todos as propriedades enumeráveis do objeto e retorna uma string com o nome das propriedades e seus respectivos valores.
//Objeto
var obj = {a:1, b:2, c:3};

//Para prop (propriedade) in obj (objeto) faça
for (var prop in obj) {
  // ctrl+shift+k (para abrir o console no mozilla firefox)
  console.log("obj." + prop + " = " + obj[prop]);
}

//A saída (output) deverá ser:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"




var triangle = {a:1, b:2, c:3};

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
  if( obj.hasOwnProperty( prop ) ) {
    console.log("obj." + prop + " = " + obj[prop]);
  } 
}

// Output:
// "obj.color = red"