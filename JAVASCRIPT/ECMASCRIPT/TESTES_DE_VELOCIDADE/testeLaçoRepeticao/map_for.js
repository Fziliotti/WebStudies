console.time("teste");
var array1 = [];
for (let i = 0; i < 100; i++) array1[i] = i;
// console.log(array1);
console.timeEnd("teste");

console.time("teste2");
var array2 = new Array(100).fill().map((item, index) => index);
console.timeEnd("teste2");
