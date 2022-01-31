const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const { getFuncionariosAniversariantes } = require('./components/aniversariantes')
const { getRamais } = require('./components/ramais')
const { getFuncionariosSetor } = require('./components/setores')
const { readDatabase, writeDatabase } = require('./driveDatabase')
const PORT = 3002;

const app = express();

app.use(express.json());
app.use(cors());

app.post("/funcionarios/create", (req, res) => {
  const funcionarioCriado = {
    numero_matricula: req.body.numero_matricula,
    nome: req.body.nome,
    ramal: req.body.ramal,
    email: req.body.email,
    setor: req.body.setor,
    data_nascimento: req.body.data_nascimento,
  }
  writeDatabase(funcionarioCriado)
  res.json(funcionarioCriado)
})

app.get('/funcionarios/all', (req, res) => {
  const funcionarios = readDatabase();
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
      const funcionarios = readDatabase();
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
    const funcionarios = readDatabase();
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
  const funcionarios = readDatabase();
  res.json({
    status: 200,
    data: getRamais(funcionarios),
    message: 'Sucesso!'
  })
})

app.listen(PORT)
