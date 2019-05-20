const teste = [1, 2, 3, 4, 5, 6, 7, 8];

console.time("teste");
const teste2 = teste.concat(9);
console.timeEnd("teste");

console.time("teste2");
const teste3 = [...teste, 9];
console.timeEnd("teste2");

console.time("teste3");
const teste4 = Array.clone(teste);
console.log(teste4);
console.timeEnd("teste3");
