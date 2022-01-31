const express = require('express')
const { getFuncionariosAniversariantes } = require('./components/aniversariantes')
const { getRamais } = require('./components/ramais')
const { getFuncionariosSetor } = require('./components/setores')
const PORT = 8080;

const funcionarios = [
  {
    numero_matricula: 1,
    nome: 'Kenned',
    //ramal: 'Marketing',
    ramal: 1,
    email: 'kenned@gmail.com',
    setor: 'Engenharia',
    data_nascimento: '18/12/1995'
  },
  {
    numero_matricula: 2,
    nome: 'Emmanuelle',
    //ramal: 'Marketing',
    ramal: 2,
    email: 'emmanuelle@gmail.com',
    setor: 'Engenharia',
    data_nascimento: '07/05/1993'
  },
  {
    numero_matricula: 3,
    nome: 'Gabriela',
    //ramal: 'Atendimento',
    ramal: 3,
    email: 'gabriela@gmail.com',
    setor: 'Contabilidade',
    data_nascimento: '19/05/1996'
  },
  {
    numero_matricula: 4,
    nome: 'Liliane',
    //ramal: 'Atendimento',
    ramal: 4,
    email: 'liliane@gmail.com',
    setor: 'Varejo',
    data_nascimento: '29/03/1996'
  },
  {
    numero_matricula: 5,
    nome: 'Bruno Lima',
    //ramal: 'Atendimento',
    ramal: 5,
    email: 'brunolima@gmail.com',
    setor: 'Varejo',
    data_nascimento: '29/03/1996'
  },
  {
    numero_matricula: 6,
    nome: 'João Lucas',
    //ramal: 'Desenvolvimento',
    ramal: 6,
    email: 'joão@gmail.com',
    setor: 'Tecnologia',
    data_nascimento: '14/03/1996'
  },
  {
    numero_matricula: 7,
    nome: 'Anderson Ferreira Alves',
    //ramal: 'Desenvolvimento',
    ramal: 7,
    email: 'andersonamericasul07@gmail.com',
    setor: 'Tecnologia',
    data_nascimento: '18/12/1995'
  },
]

const app = express()

app.get('/funcionarios/all', (req, res) => {
  res.json({
    status: 200,
    data: funcionarios,
    message: 'Sucesso!'
  })
})

app.get('/funcionarios/aniversariantes/:mes', (req, res) => {
  const mes = parseInt(req.params.mes, 10);
  if(Number.isInteger(mes)) {
    if(mes >= 1 && mes <= 12) {
      res.json({
        status: 200,
        data: getFuncionariosAniversariantes(funcionarios, parseInt(req.params.mes, 10)),
        message: 'Sucesso'
      })
    } else {
      res.json({
        status: 500,
        data: [],
        message: 'Mês inválido deve estar de 1 e 12!'
      })
    }
  } else {
    res.json({
      status: 500,
      data: [],
      message: 'Mês precisa ser especificado por um número inteiro de 1 a 12!'
    })
  }
})

app.get('/funcionarios/setor/:setor', (req, res) => {
  if(req.params.setor) {
    res.json({
      status: 200,
      data: getFuncionariosSetor(funcionarios, req.params.setor),
      message: 'Sucesso!'
    })
  } else {
    res.json({
      status: 500,
      data: [],
      message: 'Não foi fornecido o setor!'
    })
  }
})

app.get('/ramais', (req, res) => {
  res.json({
    status: 200,
    data: getRamais(funcionarios),
    message: 'Sucesso!'
  })
})

app.listen(PORT)
