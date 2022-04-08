import { serverConnection } from './modules/serverConnection.js'
import { validateUsername, validatePassword } from './modules/validates.js'

const inputUsername = document.getElementById('input-username')
const inputPassword = document.getElementById('input-password')

async function login () {
  if (validateUsername(inputUsername.value.trim()) && validatePassword(inputPassword.value.trim())) {
    try {
      await serverConnection.login(inputUsername.value.trim(), inputPassword.value.trim())
      alert('Login realizado com sucesso!')
    } catch (err) {
      alert(err)
    }
  } else {
    alert('O username de começar por uma letra e o restante por letras e números, totalizando entre 5 a 20 caracteres! A senha deve ser formada por 5 a 10 dígitos!')
  }
}

async function register () {
  if (validateUsername(inputUsername.value.trim()) && validatePassword(inputPassword.value.trim())) {
    try {
      await serverConnection.register(inputUsername.value.trim(), inputPassword.value.trim())
      alert('Registro realizado com sucesso!')
    } catch (err) {
      alert(err)
    }
  } else {
    alert('O username de começar por uma letra e o restante por letras e números, totalizando entre 5 a 20 caracteres! A senha deve ser formada por 5 a 10 dígitos!')
  }
}

async function getPersonalMessage () {
  try {
    const { message } = await serverConnection.getPersonalNessage()
    alert(message)
  } catch (err) {
    alert(err)
  }
}

const btnLogin = document.getElementById('btn-login')
btnLogin.addEventListener('click', login)

const btnRegister = document.getElementById('btn-register')
btnRegister.addEventListener('click', register)

const btnPersonalMessage = document.getElementById('btn-personal-message')
btnPersonalMessage.addEventListener('click', getPersonalMessage)
