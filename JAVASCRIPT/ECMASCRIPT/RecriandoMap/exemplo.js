function map2(listaDeValores, fn) {
  let novaLista = [];
  let tamanhoLista = listaDeValores.length;

  for (let i = 0; i < tamanhoLista; i++) novaLista.push(fn(listaDeValores[i]));

  return novaLista;
}

function map3(listaDeValores, fn) {
  return listaDeValores.map(fn);
}

let arr = [1, 2, 3, 4, 5];
console.time("MapNormal");
console.log(arr.map(x => x * 2));
console.timeEnd("MapNormal");

console.time("Map2-ComFor");
console.log(map2(arr, x => x * 2));
console.timeEnd("Map2-ComFor");

console.time("Map3-NormalComoFuncao");
console.log(map3(arr, x => x * 2));
console.timeEnd("Map3-NormalComoFuncao");
