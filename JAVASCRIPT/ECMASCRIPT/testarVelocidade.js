

/* ARRAY DE 10000 POSICOES FAZENDO OPERAÇÃO */
var arr = [];
for (var i = 0; i < 10000; i++) {
  arr[i] = i;
}

function someCalc(index) {
  return index * 5 + 1 / 3 * 8;
}

console.time('#forEach');
  arr.forEach(
      (item, index) => {
          item = someCalc(item);
      }
  )
console.timeEnd('#forEach');


console.time('#for');
  for(let i=0; i < arr.length; i++){
      arr[i] = someCalc(arr[i]);
  }
console.timeEnd('#for');

/* FUNCAO DE SOMA GENERICA */

function soma(...params){
  params.reduce( (ant,atual) => ant+atual)
}

console.time('#soma');
soma(1,2,3,4,5,6,7,8,9,10,11,12)
console.timeEnd('#soma');


function soma2() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.time('#soma2');
soma2(1,2,3,4,5,6,7,8,9,10,11,12)
console.timeEnd('#soma2');



/* FUNCAO COM forEACH */
function soma3(...arguments){
  return arguments.reduce((ant,atual)=> ant+atual)
}

console.time('#soma3');
soma3(1,2,3,4,5,6,7,8,9,10,11,12)
console.timeEnd('#soma3'); 



/* FUNCAO COM LET */
function soma4(...args){
  var sum = 0;
  for(let value of args){
    sum+= value;
  }
  return sum;
}

console.time('#soma4');
soma4(1,2,3,4,5,6,7,8,9,10,11,12)
console.timeEnd('#soma4');