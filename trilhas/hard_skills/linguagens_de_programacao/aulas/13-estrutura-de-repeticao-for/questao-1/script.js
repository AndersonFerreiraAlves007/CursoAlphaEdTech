const players = [
  {
    name: 'Pedro',
    car: {
      model: 1,
      maxVelocity: 230,
      minVelocity: 150,
      skid: 3
    },
    score: 0,
  },
  {
    name: 'Juca',
    car: {
      model: 2,
      maxVelocity: 260,
      minVelocity: 120,
      skid: 5
    },
    score: 0,
  },
  {
    name: 'Edna',
    car: {
      model: 3,
      maxVelocity: 220,
      minVelocity: 180,
      skid: 1
    },
    score: 0,
  },
]

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
