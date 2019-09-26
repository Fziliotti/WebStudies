var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9 ]
]



for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if(i === j) console.log('diagonal principal' + matriz[i][j])
    // console.log(matriz[i][j])
    
  }
}