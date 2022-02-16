const express = require('express')
const app = express()
const PORT = 3334

app.use('/games', express.static('src/gamesmagazine'))

app.listen(PORT)
