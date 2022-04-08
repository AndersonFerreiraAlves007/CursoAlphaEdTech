const bcrypt = require('bcrypt')

function generateHashPassword (password) {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

function compareHashPassword (password, hash) {
  return bcrypt.compareSync(password, hash)
}

module.exports = {
  generateHashPassword,
  compareHashPassword
}
