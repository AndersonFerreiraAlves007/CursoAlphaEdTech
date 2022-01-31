let balls = []

const colors = [
  '#b42443',
  '#d8a964',
  '#046c02',
  '#90302f',
  '#0539a7',
  '#9f2b9f',
  '#474747',
  '#d3d3d3',
  '#ff9604',
  '#cecece'
]

let intervId = 0;

function resetBall() {
  const ballsInitial = []
  for(let i = 1; i <= 60; i++) {
    ballsInitial.push(i)
  }
  balls = ballsInitial
}

resetBall();

function sortearNumero(boxBall) {
  const position2 = Math.floor(Math.random() * boxBall.length)
  return boxBall[position2]
}

function getColor(value) {
  for(let i = 0; i < 10; i++) {
    if(value >= (i * 6 + 1) && value <= (i * 6 + 6)) {
      return colors[i] 
    }
  }
}

function clearNumerosSorteados() {
  const ballElements = document.querySelectorAll('.ball')
  ballElements.forEach((item) => {
    item.style.backgroundColor = 'white'
    item.style.color = 'black'
    item.innerHTML = ''
  })
}

let position = 1;

function ciclico() {
  const element = document.getElementById(`ball-${position}`);
  const numeroSorteado = sortearNumero(balls);
  balls.splice(balls.indexOf(numeroSorteado), 1);
  const color = getColor(numeroSorteado);
  
  element.style.backgroundColor = color
  element.innerHTML = numeroSorteado

  if(position === 6) {
    clearInterval(intervId)
    position = 1
    const btn = document.getElementById('btn-sortear')
    btn.disabled = false
  }

  position += 1;
}

function sorteio() {
  resetBall()
  clearNumerosSorteados()
  const btn = document.getElementById('btn-sortear')
  btn.disabled = true
  position = 1;
  intervId = setInterval(ciclico, 1000);
}

document.getElementById('btn-sortear').addEventListener('click', () => {
  sorteio()
})
