const express = require('express')

const app = express()

const clientes = [
  {
    id: 1,
    name: 'Luffy',
    email: 'luffy@gmail.com.br'
  },
  {
    id: 2,
    name: 'Zoro',
    email: 'zoro@gmail.com.br'
  },
  {
    id: 3,
    name: 'Usopp',
    email: 'usopp@gmail.com.br'
  },
  {
    id: 4,
    name: 'Nami',
    email: 'nami@gmail.com.br'
  },
  {
    id: 5,
    name: 'Sanji',
    email: 'sanji@gmail.com.br'
  },
  {
    id: 6,
    name: 'Chopper',
    email: 'chopper@gmail.com.br'
  },
  {
    id: 7,
    name: 'Robin',
    email: 'robin@gmail.com.br'
  },
  {
    id: 8,
    name: 'Franky',
    email: 'franky@gmail.com.br'
  },
  {
    id: 9,
    name: 'Brook',
    email: 'brook@gmail.com.br'
  },
  {
    id: 10,
    name: 'Jinbe',
    email: 'jinbe@gmail.com.br'
  },

  {
    id: 11,
    name: 'Luffy Junior',
    email: 'luffy_junior@hotmail.com.br'
  },
  {
    id: 12,
    name: 'Zoro Junior',
    email: 'zoro_junior@hotmail.com.br'
  },
  {
    id: 13,
    name: 'Usopp Junior',
    email: 'usopp_junior@hotmail.com.br'
  },
  {
    id: 14,
    name: 'Nami Junior',
    email: 'nami_junior@hotmail.com.br'
  },
  {
    id: 15,
    name: 'Sanji Junior',
    email: 'sanji_junior@hotmail.com.br'
  },
  {
    id: 16,
    name: 'Chopper Junior',
    email: 'chopper_junior@hotmail.com.br'
  },
  {
    id: 17,
    name: 'Robin Junior',
    email: 'robin_junior@hotmail.com.br'
  },
  {
    id: 18,
    name: 'Franky Junior',
    email: 'franky_junior@hotmail.com.br'
  },
  {
    id: 19,
    name: 'Brook Junior',
    email: 'brook_junior@hotmail.com.br'
  },
  {
    id: 20,
    name: 'Jinbe Junior',
    email: 'jinbe_junior@hotmail.com.br'
  },
]

app.use(express.static('public'));

function converteMinuscula(str) {
  return str.toLowerCase();
}

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

app.listen(8080)
