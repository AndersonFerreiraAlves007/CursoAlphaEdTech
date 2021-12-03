const playerO = 'O'
const playerX = 'X'
const EMPTY = ''

let playerActive = playerX

let champion = EMPTY

const board = [
  [EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY],
  [EMPTY, EMPTY, EMPTY]
]

document.querySelector('#form button').addEventListener('click', () => {
  resetBoard()
})

function resetBoard() {
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      board[i][j] = EMPTY 
    }
  }
  playerActive = playerO
  champion = EMPTY
  resetStyle()
  rotateDefault()
  document.querySelector('#form h1').innerHTML = `Jogo em andamento!`
}

const ANGLE_EMPTY = 0
const ANGLE_O = 120
const ANGLE_X = 240

/////////////

const carousel = document.querySelector('.carousel');
const cells = document.querySelectorAll('.carousel__cell');
var selectedIndex = 0;
var cellWidth = 150;
var radius = Math.round((cellWidth/2) / Math.tan(Math.PI/3));

function resetStyle() {
  for(let i = 0; i < cells.length; i++) {
    cells[i].classList.remove('carousel_champion')
  }
}

function getPoint(boardHouse, scoreX, scoreO) {
  switch (boardHouse) {
   case playerO:
      return {
        scoreX,
        scoreO: scoreO + 1
      }
    case playerX:
      return {
        scoreX: scoreX + 1,
        scoreO
      }
    default:
      return {
        scoreX,
        scoreO
      };
  }
}

function verifyChampion() {
  let scoreO = 0; scoreX = 0
  for(let i = 0; i < 3; i++) {
    const retorno =getPoint(board[0][i], scoreX, scoreO)
    scoreO = retorno.scoreO
    scoreX = retorno.scoreX
  }

  if(scoreO === 3) {
    return {
      champion: playerO,
      mode: 0
    }
  } else {
    if(scoreX === 3) {
      return {
        champion: playerX,
        mode: 0
      }
    }
  }

  scoreO = 0
  scoreX = 0

  for(let i = 0; i < 3; i++) {
    const retorno =getPoint(board[1][i], scoreX, scoreO)
    scoreO = retorno.scoreO
    scoreX = retorno.scoreX
  }

  if(scoreO === 3) {
    return {
      champion: playerO,
      mode: 1
    }
  } else {
    if(scoreX === 3) {
      return {
        champion: playerX,
        mode: 1
      }
    }
  }

  scoreO = 0
  scoreX = 0

  for(let i = 0; i < 3; i++) {
    const retorno =getPoint(board[2][i], scoreX, scoreO)
    scoreO = retorno.scoreO
    scoreX = retorno.scoreX
  }

  if(scoreO === 3) {
    return {
      champion: playerO,
      mode: 2
    }
  } else {
    if(scoreX === 3) {
      return {
        champion: playerX,
        mode: 2
      }
    }
  }

  scoreO = 0
  scoreX = 0

  for(let i = 0; i < 3; i++) {
    const retorno =getPoint(board[i][0], scoreX, scoreO)
    scoreO = retorno.scoreO
    scoreX = retorno.scoreX
  }

  if(scoreO === 3) {
    return {
      champion: playerO,
      mode: 3
    }
  } else {
    if(scoreX === 3) {
      return {
        champion: playerX,
        mode: 3
      }
    }
  }

  scoreO = 0
  scoreX = 0

  for(let i = 0; i < 3; i++) {
    const retorno =getPoint(board[i][1], scoreX, scoreO)
    scoreO = retorno.scoreO
    scoreX = retorno.scoreX
  }

  if(scoreO === 3) {
    return {
      champion: playerO,
      mode: 4
    }
  } else {
    if(scoreX === 3) {
      return {
        champion: playerX,
        mode: 4
      }
    }
  }

  scoreO = 0
  scoreX = 0

  for(let i = 0; i < 3; i++) {
    const retorno =getPoint(board[i][2], scoreX, scoreO)
    scoreO = retorno.scoreO
    scoreX = retorno.scoreX
  }

  if(scoreO === 3) {
    return {
      champion: playerO,
      mode: 5
    }
  } else {
    if(scoreX === 3) {
      return {
        champion: playerX,
        mode: 5
      }
    }
  }

  scoreO = 0
  scoreX = 0

  for(let i = 0; i < 3; i++) {
    const retorno =getPoint(board[i][i], scoreX, scoreO)
    scoreO = retorno.scoreO
    scoreX = retorno.scoreX
  }

  if(scoreO === 3) {
    return {
      champion: playerO,
      mode: 6
    }
  } else {
    if(scoreX === 3) {
      return {
        champion: playerX,
        mode: 6
      }
    }
  }

  scoreO = 0
  scoreX = 0

  for(let i = 0; i < 3; i++) {
    const retorno =getPoint(board[i][3 - i -1], scoreX, scoreO)
    scoreO = retorno.scoreO
    scoreX = retorno.scoreX
  }

  if(scoreO === 3) {
    return {
      champion: playerO,
      mode: 7
    }
  } else {
    if(scoreX === 3) {
      return {
        champion: playerX,
        mode: 7
      }
    }
  }

  scoreO = 0
  scoreX = 0

  scoreEmpty = 0

  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      if(board[i][j] === EMPTY) {
        scoreEmpty += 1
      }
    }
  }

  if(scoreEmpty === 0) {
    return {
      champion: 'T',
      mode: -1
    }
  } else {
    return {
      champion: EMPTY,
      mode: -1
    }
  }
}

function getAngle(bordHouseValue) {
  switch (bordHouseValue) {
    case EMPTY:
      return ANGLE_EMPTY
    case playerO:
      return ANGLE_O
    case playerX:
      return ANGLE_X
    default:
      return 0;
  }
}

function rotateCarousel(carousel, bordHouseValue) {
  var angle = getAngle(bordHouseValue) * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
    'rotateY(' + angle + 'deg)';

  if(playerActive === playerO) {
    playerActive = playerX
  } else {
    playerActive = playerO
  }
}

function rotateDefault() {
  rotateCarousel(document.querySelector('#board-house-1-1 .carousel'), EMPTY)
  rotateCarousel(document.querySelector('#board-house-1-2 .carousel'), EMPTY)
  rotateCarousel(document.querySelector('#board-house-1-3 .carousel'), EMPTY)
  rotateCarousel(document.querySelector('#board-house-2-1 .carousel'), EMPTY)
  rotateCarousel(document.querySelector('#board-house-2-2 .carousel'), EMPTY)
  rotateCarousel(document.querySelector('#board-house-2-3 .carousel'), EMPTY)
  rotateCarousel(document.querySelector('#board-house-3-1 .carousel'), EMPTY)
  rotateCarousel(document.querySelector('#board-house-3-2 .carousel'), EMPTY)
  rotateCarousel(document.querySelector('#board-house-3-3 .carousel'), EMPTY)
}

rotateDefault()

function changeCarousel() {
  for(let i = 0; i < 9; i++) {
    console.log('lalala: ' + i)
    cells[i * 3].style.opacity = 1;
    cells[i * 3].style.transform = 'rotateY(0deg) translateZ(' + radius + 'px)';

    cells[i * 3 + 1].style.opacity = 1;
    cells[i * 3 + 1].style.transform = 'rotateY(120deg) translateZ(' + radius + 'px)';

    cells[i * 3 + 2].style.opacity = 1;
    cells[i * 3 + 2].style.transform = 'rotateY(240deg) translateZ(' + radius + 'px)';
  }

  /* rotateCarousel(); */
}

changeCarousel();

function drawChmapion(mode) {
  switch (mode) {
    case 0: {
      if(champion === playerO) {
        document.getElementById('board-house-1-1-o').classList.add('carousel_champion')
        document.getElementById('board-house-1-2-o').classList.add('carousel_champion')
        document.getElementById('board-house-1-3-o').classList.add('carousel_champion')
        document.querySelector('#form h1').innerHTML = `Vencedor: "O"`
      } else {
        if(champion === playerX) {
          document.getElementById('board-house-1-1-x').classList.add('carousel_champion')
          document.getElementById('board-house-1-2-x').classList.add('carousel_champion')
          document.getElementById('board-house-1-3-x').classList.add('carousel_champion')
          document.querySelector('#form h1').innerHTML = `Vencedor: "X"`
        }
      }
      break;
    }
    case 1: {
      if(champion === playerO) {
        document.getElementById('board-house-2-1-o').classList.add('carousel_champion')
        document.getElementById('board-house-2-2-o').classList.add('carousel_champion')
        document.getElementById('board-house-2-3-o').classList.add('carousel_champion')
        document.querySelector('#form h1').innerHTML = `Vencedor: "O"`
      } else {
        if(champion === playerX) {
          document.getElementById('board-house-2-1-x').classList.add('carousel_champion')
          document.getElementById('board-house-2-2-x').classList.add('carousel_champion')
          document.getElementById('board-house-2-3-x').classList.add('carousel_champion')
          document.querySelector('#form h1').innerHTML = `Vencedor: "X"`
        }
      }
      break;
    }
    case 2: {
      if(champion === playerO) {
        document.getElementById('board-house-3-1-o').classList.add('carousel_champion')
        document.getElementById('board-house-3-2-o').classList.add('carousel_champion')
        document.getElementById('board-house-3-3-o').classList.add('carousel_champion')
        document.querySelector('#form h1').innerHTML = `Vencedor: "O"`
      } else {
        if(champion === playerX) {
          document.getElementById('board-house-3-1-x').classList.add('carousel_champion')
          document.getElementById('board-house-3-2-x').classList.add('carousel_champion')
          document.getElementById('board-house-3-3-x').classList.add('carousel_champion')
          document.querySelector('#form h1').innerHTML = `Vencedor: "X"`
        }
      }
      break;
    }
    case 3: {
      if(champion === playerO) {
        document.getElementById('board-house-1-1-o').classList.add('carousel_champion')
        document.getElementById('board-house-2-1-o').classList.add('carousel_champion')
        document.getElementById('board-house-3-1-o').classList.add('carousel_champion')
        document.querySelector('#form h1').innerHTML = `Vencedor: "O"`
      } else {
        if(champion === playerX) {
          document.getElementById('board-house-1-1-x').classList.add('carousel_champion')
          document.getElementById('board-house-2-1-x').classList.add('carousel_champion')
          document.getElementById('board-house-3-1-x').classList.add('carousel_champion')
          document.querySelector('#form h1').innerHTML = `Vencedor: "X"`
        }
      }
      break;
    }
    case 4: {
      if(champion === playerO) {
        document.getElementById('board-house-1-2-o').classList.add('carousel_champion')
        document.getElementById('board-house-2-2-o').classList.add('carousel_champion')
        document.getElementById('board-house-3-2-o').classList.add('carousel_champion')
        document.querySelector('#form h1').innerHTML = `Vencedor: "O"`
      } else {
        if(champion === playerX) {
          document.getElementById('board-house-1-2-x').classList.add('carousel_champion')
          document.getElementById('board-house-2-2-x').classList.add('carousel_champion')
          document.getElementById('board-house-3-2-x').classList.add('carousel_champion')
          document.querySelector('#form h1').innerHTML = `Vencedor: "X"`
        }
      }
      break;
    }
    case 5: {
      if(champion === playerO) {
        document.getElementById('board-house-1-3-o').classList.add('carousel_champion')
        document.getElementById('board-house-2-3-o').classList.add('carousel_champion')
        document.getElementById('board-house-3-3-o').classList.add('carousel_champion')
        document.querySelector('#form h1').innerHTML = `Vencedor: "O"`
      } else {
        if(champion === playerX) {
          document.getElementById('board-house-1-3-x').classList.add('carousel_champion')
          document.getElementById('board-house-2-3-x').classList.add('carousel_champion')
          document.getElementById('board-house-3-3-x').classList.add('carousel_champion')
          document.querySelector('#form h1').innerHTML = `Vencedor: "X"`
        }
      }
      break;
    }
    case 6: {
      if(champion === playerO) {
        document.getElementById('board-house-1-1-o').classList.add('carousel_champion')
        document.getElementById('board-house-2-2-o').classList.add('carousel_champion')
        document.getElementById('board-house-3-3-o').classList.add('carousel_champion')
        document.querySelector('#form h1').innerHTML = `Vencedor: "O"`
      } else {
        if(champion === playerX) {
          document.getElementById('board-house-1-1-x').classList.add('carousel_champion')
          document.getElementById('board-house-2-2-x').classList.add('carousel_champion')
          document.getElementById('board-house-3-3-x').classList.add('carousel_champion')
          document.querySelector('#form h1').innerHTML = `Vencedor: "X"`
        }
      }
      break;
    }
    case 7: {
      if(champion === playerO) {
        document.getElementById('board-house-1-3-o').classList.add('carousel_champion')
        document.getElementById('board-house-2-2-o').classList.add('carousel_champion')
        document.getElementById('board-house-3-1-o').classList.add('carousel_champion')
        document.querySelector('#form h1').innerHTML = `Vencedor: "O"`
      } else {
        if(champion === playerX) {
          document.getElementById('board-house-1-3-x').classList.add('carousel_champion')
          document.getElementById('board-house-2-2-x').classList.add('carousel_champion')
          document.getElementById('board-house-3-1-x').classList.add('carousel_champion')
          document.querySelector('#form h1').innerHTML = `Vencedor: "X"`
        }
      }
      break;
    }
    default: {
      if(champion === 'T') {
        document.querySelector('#form h1').innerHTML = `Empate`
      }
    }
  }
}

document.getElementById('board-house-1-1-empty').addEventListener('click', () => {
  if(champion === EMPTY) {
    board[0][0] = playerActive
    rotateCarousel(document.querySelector('#board-house-1-1 .carousel'), playerActive)
    const retorno = verifyChampion()
    champion = retorno.champion
    drawChmapion(retorno.mode)
  }
})

document.getElementById('board-house-1-2-empty').addEventListener('click', () => {
  if(champion === EMPTY) {
    board[0][1] = playerActive
    rotateCarousel(document.querySelector('#board-house-1-2 .carousel'), playerActive)
    const retorno = verifyChampion()
    champion = retorno.champion
    drawChmapion(retorno.mode)
  }
})

document.getElementById('board-house-1-3-empty').addEventListener('click', () => {
  if(champion === EMPTY) {
    board[0][2] = playerActive
    rotateCarousel(document.querySelector('#board-house-1-3 .carousel'), playerActive)
    const retorno = verifyChampion()
    champion = retorno.champion
    drawChmapion(retorno.mode)
  }
})

document.getElementById('board-house-2-1-empty').addEventListener('click', () => {
  if(champion === EMPTY) {
    board[1][0] = playerActive
    rotateCarousel(document.querySelector('#board-house-2-1 .carousel'), playerActive)
    const retorno = verifyChampion()
    champion = retorno.champion
    drawChmapion(retorno.mode)
  }
})

document.getElementById('board-house-2-2-empty').addEventListener('click', () => {
  if(champion === EMPTY) {
    board[1][1] = playerActive
    rotateCarousel(document.querySelector('#board-house-2-2 .carousel'), playerActive)
    const retorno = verifyChampion()
    champion = retorno.champion
    drawChmapion(retorno.mode)
  }
})

document.getElementById('board-house-2-3-empty').addEventListener('click', () => {
  if(champion === EMPTY) {
    board[1][2] = playerActive
    rotateCarousel(document.querySelector('#board-house-2-3 .carousel'), playerActive)
    const retorno = verifyChampion()
    champion = retorno.champion
    drawChmapion(retorno.mode)
  }
})

document.getElementById('board-house-3-1-empty').addEventListener('click', () => {
  if(champion === EMPTY) {
    board[2][0] = playerActive
    rotateCarousel(document.querySelector('#board-house-3-1 .carousel'), playerActive)
    const retorno = verifyChampion()
    champion = retorno.champion
    drawChmapion(retorno.mode)
  }
})

document.getElementById('board-house-3-2-empty').addEventListener('click', () => {
  if(champion === EMPTY) {
    board[2][1] = playerActive
    rotateCarousel(document.querySelector('#board-house-3-2 .carousel'), playerActive)
    const retorno = verifyChampion()
    champion = retorno.champion
    drawChmapion(retorno.mode)
  }
})

document.getElementById('board-house-3-3-empty').addEventListener('click', () => {
  if(champion === EMPTY) {
    board[2][2] = playerActive
    rotateCarousel(document.querySelector('#board-house-3-3 .carousel'), playerActive)
    const retorno = verifyChampion()
    champion = retorno.champion
    drawChmapion(retorno.mode)
  }
})
