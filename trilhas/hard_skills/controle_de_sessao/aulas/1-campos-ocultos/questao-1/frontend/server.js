const express = require('express')
const cors = require('cors')
const PORT = 3334

const app = express()

app.use(cors())
app.use(express.static('public'))

app.listen(PORT)
