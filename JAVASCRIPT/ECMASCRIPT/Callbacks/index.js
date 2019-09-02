
function callback (valor, cb){

  // faz isso primeiro
  valor = valor + 2;
  console.log(valor)
  valor = valor*5
  console.log(valor)

  //no fim faz isso
  return cb(valor)
}

// function soma5( i ){
//   return i+5
// }

const soma5 =  i => i+5


console.log(callback(5, soma5))