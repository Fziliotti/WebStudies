var arrayOrdenado = [2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 17, 20]


const buscaBinaria = (arr, item) => {
  let primeiro = 0
  let ultimo = arr.length

  while (primeiro <= ultimo) {
    let meio = (primeiro + ultimo)/2

    if (arr[meio] === item) {
      return true
    } else if (arr[meio] > item) {
      ultimo = meio - 1
    } else if (primeiro === ultimo) {
      console.log(primeiro, ultimo)
      return false
    } else {
      inicio = meio + 1
    }
  }
  return false

}


console.log(buscaBinaria(arrayOrdenado, 5))