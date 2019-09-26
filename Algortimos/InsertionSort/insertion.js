var arrayDesordenado = [5,3,4,2,1,9,7,8,11]


// Tem que ter 2 variaveis que vao guiando a ordenação
// a análise que é o elemento analisado no momento e o atual é a flag que marca o elemento que esta sendo comparado

function insertionSort(arr){
  for(let atual = 1; atual < arr.length; atual++){
    let analise = atual
    while(analise > 0 && arr[analise] < arr[analise -1]){
      swap(arr, analise, analise -1)
      analise = analise - 1
    }
  }
  return arr;
}

function swap(arr, indice1, indice2){
  let temp = arr[ indice1 ];
  arr[ indice1 ] = arr[ indice2 ];
  arr[ indice2  ] = temp;
}


console.log(insertionSort(arrayDesordenado))