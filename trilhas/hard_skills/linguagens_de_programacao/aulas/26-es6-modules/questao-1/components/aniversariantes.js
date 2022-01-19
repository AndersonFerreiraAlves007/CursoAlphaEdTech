const getFuncionariosAniversariantes = (funcionarios, mes) => 
  funcionarios
    .filter((item) => (parseInt(item.data_nascimento.split('/')[1], 10)) === mes)

module.exports = {
  getFuncionariosAniversariantes
}
