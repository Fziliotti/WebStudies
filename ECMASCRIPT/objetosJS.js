function Person(first, last) {
    this.first = first;
    this.last = last;
}
Person.prototype.fullName = function () {
    return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function () {
    return this.last + ', ' + this.first;
};

s = new Person('Simon', 'Willison');


Person.prototype.firstNameCaps = function () {
    return this.first.toUpperCase();
};
s.firstNameCaps(); // "SIMON"


/* ES6 */
class Pessoa2 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    imprimirPessoa() {
        return console.log(this.nome)

    }
}




var bill2 = new Person('BILL2', 'Orange');


/* DAR O NEW É A MESMA COISA QUE ISSO ABAIXO */
function trivialNew(constructor, ...args) {
    var o = {}; // Create an object
    constructor.apply(o, args);
    return o;
}
/*  O APPLY SERVE PARA COLOCAR  */

var bill = trivialNew(Person, 'BILL', 'Orange');

