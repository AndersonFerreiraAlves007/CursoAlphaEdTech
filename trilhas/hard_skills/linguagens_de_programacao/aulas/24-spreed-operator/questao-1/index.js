
// Letra A

const numbers = [10, 25, 34, 89]

function sum(p1, p2, p3, p4) {
  return (p1 + p2 + p3 + p4)
}

console.log('Letra A')
console.log(sum(...numbers))

// Letra B

function concatena(vet1, vet2) {
  return [...vet1, ...vet2]
}

console.log('Letra B')
console.log(concatena([23, 45, 67, 56], [54, 76, 68, 92]))

// Letra C

const numerosSorteio = Array.from({length: 100}, (_, i) => i + 1)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortear() {
  let numerosSorteados = []

  for(let i = 0; i < 10; i+=1) {
    const index = getRandomIntInclusive(0, 99)
    const item = numerosSorteio[index]
    numerosSorteados = [...numerosSorteados, item]
  }

  return Math.max(...numerosSorteados)
  
}

console.log('Letra C')
console.log(sortear())
