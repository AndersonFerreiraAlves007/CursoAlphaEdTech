const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const users = [
  {
    username: 'Anderson',
    password: "1234",
    token: null
  },
  {
    username: 'Ferreira',
    password: "1234",
    token: null
  },
  {
    username: 'Alves',
    password: "1234",
    token: null
  },
]

const PORT = 3333

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const middwareSessionControl = (req, res, next) => {
  const token = req.headers.token;
  console.log(token)
  console.log(users)
  let user = null;
  if(token){
    const tokenNumber = parseInt(token, 10)
    users.forEach((item) => {
      if(item.token === tokenNumber) {
        user = item;
      }
    })
  }

  if(token) {
    req.user = user;
    next()
  } else {
    res.status(400).json({
      message: "Token ausente!!!"
    })
  }
}

app.post('/login', (req, res) => {
  const { username, password } = req.body
  console.log(req.body)
  let indexUser = -1;
  users.forEach((user, index) => {
    if(user.username === username.trim()) {
      indexUser = index;
    }
  })
    console.log(indexUser)
  if(indexUser >= 0) {
    const user = users[indexUser];
    if(user.password === password.trim()) {
      const token = Math.floor(Math.random() * (1000000 + 1)) + 1;
      users[indexUser].token = token;
      res.status(200).json({ token })
    } else {
      res.status(400).json({ message: 'Senha incorreta!' })
    }
  } else {
    res.status(400).json({ message: 'Usuário inexistente!' })
  }  
})

app.get('/personal_message', middwareSessionControl, (req, res) => {
  res.json({
    message: `Olá ${req.user.username} você conseguiu logar com sucesso!!!`
  })
})

app.listen(PORT)
