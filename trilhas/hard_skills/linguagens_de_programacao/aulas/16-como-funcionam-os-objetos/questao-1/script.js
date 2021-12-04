const modelsCar = [
  {
    name: 'Popular',
    chance: 60,
    minMaxVelocity: 180,
    maxMaxVelocity: 200,
    minMinVelocity: 110,
    maxMinVelocity: 130,
    minSkid: 3,
    maxSkid: 4,
  },
  {
    name: 'Sport',
    chance: 35,
    minMaxVelocity: 195,
    maxMaxVelocity: 215,
    minMinVelocity: 125,
    maxMinVelocity: 145,
    minSkid: 2,
    maxSkid: 3,
  },
  {
    name: 'Super Sport',
    chance: 5,
    minMaxVelocity: 210,
    maxMaxVelocity: 230,
    minMinVelocity: 140,
    maxMinVelocity: 160,
    minSkid: 1,
    maxSkid: 1.75,
  },
]

const players = [
  {
    name: 'Pedro',
    car: {
      model: 'Popular',
      maxVelocity: 230,
      minVelocity: 150,
      skid: 3
    },
    score: 0,
  },
  {
    name: 'Juca',
    car: {
      model: 'Sport',
      maxVelocity: 260,
      minVelocity: 120,
      skid: 5
    },
    score: 0,
  },
  {
    name: 'Edna',
    car: {
      model: 'Super Sport',
      maxVelocity: 220,
      minVelocity: 180,
      skid: 1
    },
    score: 0,
  },
]

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

  container.append(title)
  container.append(containerModel)
  container.append(containerMaxVelocity)
  container.append(containerMinVelocity)
  container.append(containerSkid)

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
    maxVelocity: getRandomIntInclusive(modelCar.minMaxVelocity, modelCar.maxMaxVelocity),
    minVelocity: getRandomIntInclusive(modelCar.minMinVelocity, modelCar.maxMinVelocity),
    skid: getRandomIntInclusive(modelCar.minSkid, modelCar.maxSkid)
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

async function race(raceMode) {
  generateCars()
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
  clearTableClassification()
  drawClassification()
  await timeout(5000)
  screenLoading.style.display = 'none'
  document.querySelector('body').style.overflow = 'auto'
}
