const MAX_LINES = 11;
const SPEED_WRITE = 70;

function gererateLinesBoard() {
  const boardElem = document.getElementById('blackboard')
  let i = 0;
  while(i < MAX_LINES) {
    const lineElem = document.createElement('div')
    lineElem.className = 'line-board'
    lineElem.id = `line-board-${i}`
    boardElem.append(lineElem)
    i+=1
  }
}

gererateLinesBoard()

const phrases = [
  //1ª Temporada
  'Eu não desperdiçarei giz',
  'Eu não andarei de skate nos corredores',
  'Eu não arrotarei na aula',
  'Eu não instigarei revoluções',
  'Eu não vou desenhar mulheres nuas na sala de aula',
  'Eu não vi Elvis',
  'Eu não chamarei minha professora de Bolo Quente',
  'Chiclete de alho não é engraçado',
  'Eles estão rindo de mim, e não comigo.',
  'Eu não gritarei “Fogo” em uma sala de aula cheia',
  //2ª Temporada
  'Eu não incentivarei os outros a voarem',
  'Alcatrão não é brincadeira',
  'Eu não vou xerocar meu traseiro',
  'Eu não trocarei de calças com os outros',
  'Eu não sou uma velha de 32 anos',
  'Eu não vou fazer aquela coisa com minha língua',
  'Eu não dirigirei o carro do diretor',
  'Eu não vou jurar fidelidade ao Bart',
  'Eu não venderei propriedades da escola',
  'Não devo dar jeitinhos',
  'Eu não irei muito longe com essa atitude',
  'Eu não farei barulhos de pum na sala de aula',
  'Eu não venderei terras da florida',
  'Eu não engordurarei as barras do macaco',
  'Eu não me esconderei atrás da quinta emenda',
  'Eu não farei nada de mau nunca mais',
  'Não serei exibido',
  'Eu não vou dormir durante minha educação',
]

let contClear = 0;

let linePosition = 0;

const getPhraseAleatory = () => phrases[Math.round(Math.random() * (phrases.length - 1))];

const getInputValues = () => ({
  repetitions: parseInt( document.querySelector('input').value, 10)
})

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function writePhrase(phrase, elem) {
  elem.className = 'line-board-active'
  for(let i = 0; i < phrase.length; i+=1) {
    elem.innerHTML = phrase.slice(0 , i + 1);
    await timeout(SPEED_WRITE);
  }
  elem.className = 'line-board'
}

function updateQtdeClearLabel() {
  document.getElementById('qtde-clear').innerHTML = `O quadro foi apagado ${contClear} vezes`
}

function updateQtdeLinesWriteLabel() {
  document.getElementById('qtde-lines-write').innerHTML = `O quadro possui ${linePosition} linhas escritas`
}

function nextPosition() {
  if(linePosition < MAX_LINES) {
    linePosition += 1
  } else {
    linePosition = 0
  }
  updateQtdeLinesWriteLabel()
}

function clearBoard() {
  linePosition = 0
  for(let i = 0; i < MAX_LINES; i+=1) {
    document.getElementById(`line-board-${i}`).innerHTML = ''
  }
  contClear += 1
  updateQtdeClearLabel()
}

function disableForm() {
  document.querySelector('input').disabled = true
  document.querySelector('button').disabled = true
  document.querySelector('.spin').style.display = 'inline-block'
}

function enableForm() {
  document.querySelector('input').disabled = false
  document.querySelector('input').value = ''
  document.querySelector('input').focus()
  document.querySelector('button').disabled = false
  document.querySelector('.spin').style.display = 'none'
}

async function writeBoard() {
  disableForm()
  const phrase = getPhraseAleatory()
  const { repetitions } = getInputValues()
  let i = 0;
  while(i < repetitions) {
    if(linePosition >= MAX_LINES) clearBoard() 
    await writePhrase(phrase, document.getElementById(`line-board-${linePosition}`))
    nextPosition()
    i+=1
  }
  enableForm()
}

document.querySelector('button').addEventListener('click', function() {
  writeBoard()
})
