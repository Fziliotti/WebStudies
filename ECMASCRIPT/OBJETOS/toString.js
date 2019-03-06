function Dog(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
}

var theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');
// Se você chamar o método toString() neste objeto, ele retornará o valor original herdado de Object:

theDog.toString(); // returns [object Object]
// O código abaixo cria e faz com que dogToString() sobrescreva o toString() original.Esta função gera uma string contendo name, breed, color, and sex do objeto, na forma de "propriedade = valor;".

Dog.prototype.toString = function dogToString() {
    var ret = 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
    return ret;
}
// Usando este código, toda vez que theDog
// for usado em um texto(string), JavaScript automaticamente chamará a função dogToString(), a qual retornará:

// Dog Gabby is a female chocolate Lab

// toString() pode ser usado com qualquer objeto e permite que você pegue sua classe.Para usar Object.prototype.toString() com qualquer objeto, deverá chamar Function.prototype.call() ou Function.prototype.apply() nele, passando o objeto que quer inspecionar como o primeiro parâmetro, chamado thisArg.

var toString = Object.prototype.toString;

toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]

// Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]QA