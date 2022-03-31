const HOST_API = 'http://localhost:3333'

const inputUsername = document.getElementById('input-username')
const inputPassword = document.getElementById('input-password')
const inputToken = document.getElementById('input-token')

async function login() {
  if(/[a-zA-Z](\w){2,}/.test(inputUsername.value.trim()) && /(\d){3,}/.test(inputPassword.value.trim())) {
    try {
      const response = await fetch(`${HOST_API}/login`, {
        method: 'POST',
        body: JSON.stringify({
          username: inputUsername.value.trim(),
          password: inputPassword.value.trim(),
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      if(response.status >= 200 && response.status <= 300) {
        const { token } = await response.json()
        inputToken.value = token;
        alert("Login feito com sucesso!!!")
      } else {
        const { message } = await response.json()
        alert(message)
      }
      
    } catch(err) {
      alert(err)
    }
  } else {
    alert("O login deve ter no mínimo 3 caracteres alphanuméricos e a senha deve ter no mínimo 3 caracteres numéricos!")
  }
}

async function getPersonalMessage() {
  if(inputToken.value) {
    try {
      const response = await fetch(`${HOST_API}/personal_message`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': inputToken.value
        }
      })

      if(response.status >= 200 && response.status <= 300) {
        const { message } = await response.json()
        alert(message)
      } else {
        const { message } = await response.json()
        alert(message)
      }

    } catch(err) {
      alert(err)
    }
  } else {
    alert('É preciso fazer login antes!!!')
  }
}

const btnLogin = document.getElementById('btn-login')
btnLogin.addEventListener('click', login)

const btnPersonalMessage = document.getElementById('btn-personal-message')
btnPersonalMessage.addEventListener('click', getPersonalMessage)
