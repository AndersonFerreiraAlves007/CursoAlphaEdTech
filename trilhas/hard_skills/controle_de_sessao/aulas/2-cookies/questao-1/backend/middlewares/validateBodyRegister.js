const {
  validateUsername,
  validatePassword,
  sendMessageError
} = require('../utils')
const { connectionDatabase } = require('../database')

module.exports = async function (req, res, next) {
  const { username, password } = req.body

  if (validateUsername(username)) {
    if (validatePassword(password)) {
      const user = await connectionDatabase.getOne('users', { username })
      if (user) {
        sendMessageError(res, 'Usuário já cadastrado!')
      } else {
        next()
      }
    } else {
      sendMessageError(res, 'A senha deve ser formada por 5 a 10 dígitos')
    }
  } else {
    sendMessageError(res, 'O username de começar por uma letra e o restante por letras e números, totalizando entre 5 a 20 caracteres!')
  }
}
