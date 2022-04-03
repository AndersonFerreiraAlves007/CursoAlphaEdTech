const {
  sendMessageError
} = require('../utils')
const { connectionDatabase } = require('../database')

module.exports = async function (req, res, next) {
  const token = req.cookies.token
  if (token) {
    const user = await connectionDatabase.getOne('users', { token })
    if (user) {
      req.user = user
      next()
    } else {
      sendMessageError(res, 'Você precisa logar primeiro!')
    }
  } else {
    sendMessageError(res, 'Você precisa logar primeiro!')
  }
}
