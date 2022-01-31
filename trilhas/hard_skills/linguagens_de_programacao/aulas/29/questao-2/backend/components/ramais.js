const getRamais = (funcionarios) => 
  funcionarios
    .sort((a, b) => a.nome < b.nome ? -1 : 1)
    //.map(({ramal, nome}) => ({ ramal, nome }))
    //.map((item) => item.ramal)
    //.filter((item, index, array) => array.indexOf(item) == index) // era pra tirar duplicatas, caso um ramal pudesse ser utilizado por mais de um funcionário

module.exports = {
  getRamais
}
