const express = require('express')

const PORT = Number.parseInt(process.env.SERVER_PORT, 10)

const app = express()

app.use(express.static('public'))

app.listen(PORT, () => console.log(`Server listen in port ${PORT}`))
