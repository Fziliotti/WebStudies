var arrayDesordenado = [5,3,4,2,1,9,7,8,11]



function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
      let minIndex = i; //  storing the index of minimum element
      for (var j = i + 1; j < arr.length; j++)
          if (arr[minIndex] > arr[ j ]) minIndex = j; // updating the index of minimum element

      // swap
      if (i !== minIndex) {
          let temp = arr[ i ];
          arr[ i ] = arr[minIndex];
          arr[minIndex] = temp;
      }
  }
  return arr
}



function selectionSort2(arr) {

  for (var i = 0; i < arr.length; i++) {

      let min = i; //  storing the index of minimum element

      for (var j = i + 1; j < arr.length; j++) {
          if (arr[min] > arr[j]) {
              min = j; // updating the index of minimum element
          }
      }

      if (i !== min) {
          [arr[ i ],arr[min]]= [arr[min],arr[ i ]];
      }
  }
  return arr
}


console.log(selectionSort(arrayDesordenado))