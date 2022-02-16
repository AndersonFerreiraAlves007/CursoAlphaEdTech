const express = require('express')
const cors = require('cors')

const PORT = 3333

const app = express()

const {
  addGame,
  getGames
} = require('./driveDatabase')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.get('/games', async (req, res) => {
  const games = await getGames()
  res.json(games)
})

app.post('/games', async (req, res) => {
  const {
    game,
    year,
    genre,
    multiplayer,
    offline,
    crossplataform
  } = req.body
  console.log(req.body)
  const gameObj = await addGame({
    game: game.trim(),
    year: year,
    genre: genre.trim(),
    multiplayer: multiplayer === 'true',
    offline: offline === 'true',
    crossplataform: crossplataform === 'true',
  })
  res.json(gameObj)
})

app.listen(PORT)    
