const {
  sendMessageError
} = require('../utils')

module.exports = function (req, res, next) {
  const id = parseInt(req.params.id, 10)
  if (Number.isInteger(id)) {
    if (id > 0) {
      next()
    } else {
      sendMessageError(res, 'O id fornecido deve ser um inteiro maior que 0!')
    }
  } else {
    sendMessageError(res, 'O id fornecido deve ser um inteiro maior que 0!')
  }
}
