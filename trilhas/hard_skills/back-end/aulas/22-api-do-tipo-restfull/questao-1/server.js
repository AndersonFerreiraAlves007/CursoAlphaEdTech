const express = require('express');

const app = express();

let produto = [];

app.use(express.json());
app.use(express.static('public'));

const PORT = 8080;

app.get('/produto/all', function (req, res) {
  console.log(produto);
  res.json(produto);
})  

app.get('/produto/:id', function (req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(produto.filter(item => item.id === id));
})

app.post('/produto', function (req, res) {
  const { id, name } = req.body;
  const itemCreated = {
    id: parseInt(id, 10),
    name
  }
  produto.push(itemCreated);
  res.json(itemCreated);
})

app.put('/produto/:id', function (req, res) {
  const id = parseInt(req.params.id, 10);
  const itensUpdated = [];
  produto = produto.map((item) => {
    if(item.id === id) {
      itensUpdated.push(item);
      return {
        id: parseInt(req.body.id, 10),
        name: req.body.name,
      }
    } else {
      return item;
    }
  })
  res.json(itensUpdated);
})

app.delete('/produto/:id', function (req, res) {
  const id = parseInt(req.params.id, 10);
  let itensDeleted = [];
  produto = produto.filter(item => {
    if(item.id !== id) {
      return true
    }
    itensDeleted.push(item);
    return false;
  });
  res.json(itensDeleted);
})

app.listen(PORT);
