// Temos o seguinte trecho de código:

const fn = array => () => array.reverse();
const numbers = [1,2,3,4,5,6];
const reverse = fn(numbers);
reverse();
console.log(reverse());
// Qual será o valor exibido através da instrução console.log(reverse());?
// resp: [1,2,3,4,5,6]