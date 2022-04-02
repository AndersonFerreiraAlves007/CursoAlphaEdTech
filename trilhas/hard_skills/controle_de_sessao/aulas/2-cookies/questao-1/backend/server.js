const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')

const PORT = Number.parserInt(process.env.SERVER_PORT, 10)

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.listen(PORT, () => console.log(`Server listen in port ${PORT}`))
