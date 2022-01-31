const matriz = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13 ,14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]

let matrizString = ''

function iterar(matriz, i, j) {
  if(i < matriz.length) {
    if(j < matriz[i].length - 1) {
      matrizString = matrizString + String(matriz[i][j]).padEnd(10)
      iterar(matriz, i, j + 1);
    } else {
      matrizString = matrizString + String(matriz[i][j]).padEnd(10) + '\n'
      iterar(matriz, i + 1, 0);
    }
  } else {
    console.log(matrizString)
    return 
  }
}

iterar(matriz, 0, 0);
