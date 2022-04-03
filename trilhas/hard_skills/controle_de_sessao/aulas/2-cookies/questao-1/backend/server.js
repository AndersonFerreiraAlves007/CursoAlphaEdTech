const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')
const {
  generateToken,
  generateHashPassword,
  sendMessageError
} = require('./utils')
const { connectionDatabase } = require('./database')
const {
  validateBodyLogin,
  validateBodyRegister,
  verifyToken
} = require('./middlewares')

const PORT = Number.parseInt(process.env.SERVER_PORT, 10)

const app = express()

const configCors = {
  origin: ["http://localhost:3334"],
  credentials: true,
  optionSuccessStatus: 200,
}

app.use(cors(configCors))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.post('/login', validateBodyLogin, async (req, res) => {
  const { id } = req.user
  const token = generateToken()
  await connectionDatabase.update('users', id, { token })
  res
    .cookie('token', token, {  httpOnly: true })
    .status(200)
    .json({
      message: 'Login login realizado com sucesso!'
    })
})

app.post('/register', validateBodyRegister, async (req, res) => {
  const { username, password } = req.body
  const user = await connectionDatabase.create('users', {
    username,
    password: generateHashPassword(password)
  })
  if (user) {
    res.json(user)
  } else {
    sendMessageError(res, 'Usuário já cadastrado!')
  }
})

app.get('/personal-message', verifyToken, async (req, res) => {
  const { username } = req.user
  res.json({
    message: `Você ${username} está logado!`
  })
})

app.listen(PORT, () => console.log(`Server listen in port ${PORT}`))
