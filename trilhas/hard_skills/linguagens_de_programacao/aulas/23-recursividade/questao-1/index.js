function fatorial(numero) {
  if(Number.isInteger(numero)) {
    if(numero >= 0) {
      if(numero === 0 || numero === 1) {
        return 1;
      } else {
        return numero * fatorial(numero - 1)
      }
    } else {
      return -1;
    }
  } else {
    return -1;
  }
}

 console.log(fatorial(6))
