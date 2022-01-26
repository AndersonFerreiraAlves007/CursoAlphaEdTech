const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static('public'));

let autoIncrement = 1;

let clientes = []

app.get('/clientes', function (req, res) {
  const atr = req.query.atr;
  const value = req.query.value;

  let clientesFiltrados = clientes;

  switch (atr) {
    case 'id': {
      const id = !Number.isNaN(parseInt(value, 10)) ? parseInt(value, 10) : 0;
      if(id) clientesFiltrados = clientes.filter((clienteItem) => clienteItem[atr] === id);
      break;
    }
    case 'name':
      if(value) clientesFiltrados = clientes.filter((clienteItem) => clienteItem[atr].toLowerCase().includes(value.toLowerCase()));
      break;
    case 'email':
      if(value) clientesFiltrados = clientes.filter((clienteItem) => clienteItem[atr].toLowerCase().includes(value.toLowerCase()));
      break;
    default:
      clientesFiltrados = clientes;
      break;
  }

  res.json(clientesFiltrados)
})

app.post('/clientes', function (req, res) {
  const newCliente = {
    id: autoIncrement,
    name: req.body.name,
    email: req.body.email
  }
  clientes = [...clientes, newCliente]
  autoIncrement += 1
  res.json(newCliente)
})

app.delete('/clientes/:id', function (req, res) {
  const id = parseInt(req.params.id, 10)
  let clienteDeletado = {}
  clientes = clientes.filter(item => {
    if(item.id !== id) {
      return true
    }
    clienteDeletado = item;
    return false;
  })
  res.json(clienteDeletado)
})

app.listen(8080)
