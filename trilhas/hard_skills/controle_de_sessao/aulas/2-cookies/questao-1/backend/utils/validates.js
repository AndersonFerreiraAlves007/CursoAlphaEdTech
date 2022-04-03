function validateUsername (username) {
  const regex = /^[a-zA-Z][a-zA-Z0-9]{4,19}$/
  return regex.test(username)
}

function validatePassword (password) {
  const regex = /^\d{5,10}$/
  return regex.test(password)
}

module.exports = {
  validateUsername,
  validatePassword
}
