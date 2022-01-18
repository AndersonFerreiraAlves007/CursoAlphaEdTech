const retornaVetorNumerosMultiplicado = (multiplicador, ...args) => args.map((item) => multiplicador * item)

console.log(retornaVetorNumerosMultiplicado(7, 1, 2, 3, 67, 89, 100))