const modelsCar = [
  {
    name: 'Popular',
    chance: 60,
    maxVelocity: {
      min: 180,
      max: 200,
    },
    minVelocity: {
      min: 110,
      max: 130,
    },
    skid: {
      min: 3,
      max: 4,
    }
  },
  {
    name: 'Sport',
    chance: 35,
    maxVelocity: {
      min: 195,
      max: 215,
    },
    minVelocity: {
      min: 125,
      max: 145,
    },
    skid: {
      min: 2,
      max: 3,
    }
  },
  {
    name: 'Super Sport',
    chance: 5,
    maxVelocity: {
      min: 210,
      max: 230,
    },
    minVelocity: {
      min: 140,
      max: 160,
    },
    skid: {
      min: 1,
      max: 1.75,
    }
  },
]

const players = [
  {
    name: 'Pedro',
    car: {
      model: 'Popular',
      maxVelocity: 230,
      minVelocity: 150,
      skid: 3,
    },
    score: 0,
    level: 0, 
    points: 0
  },
  {
    name: 'Juca',
    car: {
      model: 'Sport',
      maxVelocity: 260,
      minVelocity: 120,
      skid: 5,
    },
    score: 0,
    level: 0, 
    points: 0
  },
  {
    name: 'Edna',
    car: {
      model: 'Super Sport',
      maxVelocity: 220,
      minVelocity: 180,
      skid: 1,
    },
    score: 0,
    level: 0, 
    points: 0
  },
]

function getPoints(player) {
  const totalPoints = player.level * 450 + player.points
  return totalPoints
}

function drawPlayer(player) {
  const container = document.createElement('div')

  const title = document.createElement('h3')
  title.innerHTML = player.name

  const containerModel = document.createElement('div')
  const labelModel = document.createElement('span')
  labelModel.innerHTML = 'Modelo: '
  const valueModel = document.createElement('span')
  valueModel.innerHTML = player.car.model
  containerModel.append(labelModel)
  containerModel.append(valueModel)

  const containerMaxVelocity = document.createElement('div')
  const labelMaxVelocity = document.createElement('span')
  labelMaxVelocity.innerHTML = 'Velocidade Máx.:'
  const valueMaxVelocity = document.createElement('span')
  valueMaxVelocity.innerHTML = `${player.car.maxVelocity} km/h`
  containerMaxVelocity.append(labelMaxVelocity)
  containerMaxVelocity.append(valueMaxVelocity)

  const containerMinVelocity = document.createElement('div')
  const labelMinVelocity = document.createElement('span')
  labelMinVelocity.innerHTML = 'Velocidade Mín.:'
  const valueMinVelocity = document.createElement('span')
  valueMinVelocity.innerHTML = `${player.car.minVelocity} km/h`
  containerMinVelocity.append(labelMinVelocity)
  containerMinVelocity.append(valueMinVelocity)

  const containerSkid = document.createElement('div')
  const labelSkid = document.createElement('span')
  labelSkid.innerHTML = 'Derrapagem: '
  const valueSkid = document.createElement('span')
  valueSkid.innerHTML =  `${player.car.skid} %`
  containerSkid.append(labelSkid)
  containerSkid.append(valueSkid)

  const containerPontuacao = document.createElement('div')
  const labelPontuacao = document.createElement('span')
  labelPontuacao.innerHTML = 'Pontuação: '
  const valuePontuacao = document.createElement('span')
  valuePontuacao.innerHTML =  `${getPoints(player)}`
  containerPontuacao.append(labelPontuacao)
  containerPontuacao.append(valuePontuacao)

  const containerLevel = document.createElement('div')
  const labelLevel = document.createElement('span')
  labelLevel.innerHTML = 'Nível: '
  const valueLevel = document.createElement('span')
  valueLevel.innerHTML =  `${player.level}`
  containerLevel.append(labelLevel)
  containerLevel.append(valueLevel)

  container.append(title)
  container.append(containerModel)
  container.append(containerMaxVelocity)
  container.append(containerMinVelocity)
  container.append(containerSkid)
  container.append(containerPontuacao)
  container.append(containerLevel)

  container.classList.add('player')

  return container

}

function drawPlayers() {
  const containerPlayer = document.getElementById('container-players')
  containerPlayer.innerHTML = ''
  for(let i = 0; i < players.length; i++) {
    containerPlayer.append (drawPlayer(players[i]))
  }
}

function choiceRandomModelCar() {
  const chanceModel = Math.random() * 100
  let sunChances = 0
  for(let i = 0; i < modelsCar.length; i++) {
    if(chanceModel >= sunChances && chanceModel < sunChances + modelsCar[i].chance) {
      return modelsCar[i]
    }
    sunChances += modelsCar[i].chance
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomCar() {
  const modelCar = choiceRandomModelCar()
  return {
    model: modelCar.name,
    maxVelocity: getRandomIntInclusive(modelCar.maxVelocity.min, modelCar.maxVelocity.max),
    minVelocity: getRandomIntInclusive(modelCar.minVelocity.min, modelCar.minVelocity.max),
    skid: getRandomIntInclusive(modelCar.skid.min, modelCar.skid.max)
  }
}

function generateCars() {
  for(let i = 0; i < players.length; i++) {
    players[i].car = generateRandomCar()
  }
  drawPlayers()
}

generateCars()

const raceModes = [
  {
    label: 'Corrida rápida',
    laps: 10,
    editMode: false,
  },
  {
    label: 'Grande Prêmio',
    laps: 70,
    editMode: false,
  },
  {
    label: 'Enduro',
    laps: 160,
    editMode: false,
  },
  {
    label: 'Personalizado',
    laps: 10,
    editMode: true,
  },
]

function makeOptionRace(raceMode, id) {
  const container = document.createElement('div')
  const title = document.createElement('h3')
  const labelLap = document.createElement('label')
  const inputLap = document.createElement('input')
  const startRace = document.createElement('button')
  const containerInput = document.createElement('div')

  title.innerHTML = raceMode.label

  labelLap.innerHTML = 'Nº Voltas:'

  inputLap.value = raceMode.laps
  inputLap.disabled = !raceMode.editMode
  inputLap.id = `race-option-${id}`

  startRace.addEventListener("click", () => {
    raceMode.laps = parseInt(document.getElementById(`race-option-${id}`).value, 10)
    race(raceMode)
  })
  startRace.innerHTML = "let's go"

  containerInput.append(labelLap)
  containerInput.append(inputLap)
  
  container.append(title)
  container.append(containerInput)
  container.append(startRace)
  container.className = 'option-race'

  return container

}

function drawOptionsRace() {
  const header = document.querySelector('header')
  for(let i = 0; i < raceModes.length; i+=1) {
    header.append(makeOptionRace(raceModes[i], i))
  }
}

drawOptionsRace()

function getVelocity (car) {
  const min = Math.ceil(car.minVelocity);
  const max = Math.floor(car.maxVelocity);
  return (Math.floor(Math.random() * (max - min + 1)) + min) * (100 - car.skid) / 100
}

function getChampionLap() {
  let positionChampion = 0
  let velocityChampion = 0
  for(let i = 0; i < players.length; i+=1) {
    const playerVelocity = getVelocity(players[i].car)
    if(playerVelocity > velocityChampion) {
      positionChampion = i;
      velocityChampion = playerVelocity;
    }
  }
  return positionChampion
}

function drawLineTableClassification(player, table, position) {
  table.innerHTML += `<tr><td>${position}º</td><td>${player.name}</td><td>${player.score}</td></td>`
}

function drawClassification() {
  const tableClassification = document.querySelector('table')
  for(let i = 0; i < players.length; i+=1) {
    drawLineTableClassification(players[i], tableClassification, i+1)
  }
}

function clearTableClassification() {
  const tableClassification = document.querySelector('table')
  tableClassification.innerHTML = '<tr><th>Colocação</th><th>Jogador</th><th>Pontuação</th></tr>'
}

function resetScorePlayers() {
  for(let i = 0; i < players.length; i+=1) {
    players[i].score = 0
  }
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function updateLevel(player) {
  if(player.points >= 450) {
    player.level += 1
    player.points = player.points - 450

    player.car.maxVelocity += 0.01 * getPoints(player)
    player.car.minVelocity += 0.01 * getPoints(player)
  }
}

function updatePoints() {
  players[0].points += 200
  players[1].points += 120
  players[2].points += 50

  for(let i = 0; i < players.length; i+=1) {
    updateLevel(players[i])
  }
}

document.getElementById("btn-evolution").addEventListener('click', () => {
  evolution()
})

function evolution() {
  console.log('lalalal')
  players.forEach(player => {
    if(player.level < 10) {
      player.points += 450
      updateLevel(player)
    }
  });
  drawPlayers()
}

async function race(raceMode) {
  //generateCars()
  document.querySelector('body').style.overflow = 'hidden'
  window.scrollTo(0, 0)
  const screenLoading = document.getElementById('screen-loading')
  screenLoading.style.display = 'flex'
  resetScorePlayers()
  for(let i = 0; i < raceMode.laps; i+=1) {
    const indexChampion = getChampionLap()
    players[indexChampion].score += 1
  }
  players.sort((a, b) => b.score - a.score)
  updatePoints()
  drawPlayers()
  clearTableClassification()
  drawClassification()
  await timeout(5000)
  screenLoading.style.display = 'none'
  document.querySelector('body').style.overflow = 'auto'
}
