// The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.
// In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.


//Un-curried function
function unCurried(x, y) {
    return x + y;
}

//Curried function
function curried(x) {
    return function (y) {
        return x + y;
    }
}

console.log(curried(1)(2)) // Returns 3


function add(x) {
    // Add your code below this line
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }

    // Add your code above this line
}
console.log(add(10)(20)(30));



// SPREAD OPERATOR PARA FAZER A SOMA DE UMA FUNCAO COM NUMERO DE PARAMETROS VARIAVEL
function soma(...args){
    var soma = args.reduce((accumulator, currentValue) => accumulator + currentValue);
    return soma;
}


var a = []
for(let i =1 ; i<=100000; i++)  a.push(i)

console.log("A soma eh :" + soma(...a));