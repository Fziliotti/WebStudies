// TIPO MONADICO
// MONADA É UM FUNCTOR PARA UM TIPO DE DADO

class Maybe {

    constructor(value) {

        this._value = value;
    }

    static of(value) {
        return new Maybe(value);
    }

    isNothing() {
        return this._value === null || this._value === undefined;
    }

    map(fn) {
        if(this.isNothing()) return Maybe.of(null);
        const value = fn(this._value);
        return Maybe.of(value);
    }

    getOrElse(value) {
        if(this.isNothing()) return value;
        return this._value;
    }
}


const resultado = Maybe
    .of(20)
    .map(value => value + 10) 
    .map(value => value + 30)
    .getOrElse(0); // retorna 0

console.log(resultado)


const pipe = (...fns) => value =>
    fns.reduce((previousValue, fn) =>
        fn(previousValue), value);


// const textToArray = text => Array.from(text);
// const arrayToText = array => array.join('');
// const transform = pipe(textToArray, arrayToText);
// const result = transform('Cangaceiro');
// console.log(result);

//Tudo funciona perfeito, mas se passarmos o valor null nossa 
//composição quebrará. Mas se a função receber o tipo Maybe? 

// Resposta
const textToArray = textM => textM.map(text => Array.from(text));
const arrayToText = arrayM => arrayM.map(array => array.join(''));
const transform = pipe(textToArray, arrayToText);
const result = transform(Maybe.of('Cangaceiro'));
console.log(result.getOrElse(''));