const {
  validatePassword,
  validateUsername
} = require('../utils/validates')

describe('Validate Username', () => {
  test('Username começando com número.', () => {
    expect(validateUsername('8asasasa')).toBeFalsy()
  })

  test('Formatação correta.', () => {
    expect(validateUsername('Anderson')).toBeTruthy()
  })

  test('Username com caracteres sem ser alphanumérico.', () => {
    expect(validateUsername('Ferreira alves')).toBeFalsy()
  })

  test('Username com menos de 5 caracteres.', () => {
    expect(validateUsername('ass')).toBeFalsy()
  })

  test('Username com mais de 10 caracteres.', () => {
    expect(validateUsername('assssssssssssssssssssssssssadadadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')).toBe(false)
  })
})

describe('Validate Password', () => {
  test('Senha com caracteres sem ser númericos!', () => {
    expect(validatePassword('a343535')).toBeFalsy()
  })

  test('Senha menor que 5 dígitos.', () => {
    expect(validatePassword('123')).toBeFalsy()
  })

  test('Senha maior que 10 dígitos.', () => {
    expect(validatePassword('4736583989819810')).toBeFalsy()
  })

  test('Formatação correta.', () => {
    expect(validatePassword('583105')).toBeTruthy()
  })

})
