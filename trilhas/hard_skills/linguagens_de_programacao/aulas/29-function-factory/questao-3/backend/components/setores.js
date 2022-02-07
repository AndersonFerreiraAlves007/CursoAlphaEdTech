const getFuncionariosSetor = (funcionarios, setor) => 
  funcionarios
    .filter((item) => item.setor.toLowerCase().includes(setor.toLowerCase()));

module.exports = {
  getFuncionariosSetor
}