const express = require('express')
const PORT = 3001;

const app = express()

app.use(express.static("src"))

app.listen(PORT)
