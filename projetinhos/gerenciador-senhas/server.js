const express = require('express');
const { readDatabase, writeDatabase } = require('./driveDatabase')

const PORT = 51233;

const app = express();

app.use(express.static('public'));

app.use(express.json());

app.get('/credentials', async (req, res) => {
  const filterLogin = req.query.login;
  const database = await readDatabase();
  if(filterLogin) {
    res.json(database.rows.filter(item => 
      item.service.toLowerCase().includes(filterLogin.trim().toLowerCase())
    ));
  } else {
    res.json(database.rows)
  }
})

app.post('/credentials', async (req, res) => {
  const database = await readDatabase();
  const credentialCreated = {
    id: database.autoIncrement + 1,
    login: req.body.login.trim(),
    password: req.body.password.trim(),
    service: req.body.service.trim()
  }
  await writeDatabase({
    autoIncrement: database.autoIncrement + 1,
    rows: [...database.rows, credentialCreated]
  });
  res.json(credentialCreated);
})

app.put('/credentials/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const database = await readDatabase();
  let credentialUpdated = {};
  const credentialsRestantes = database.rows.map((item) => {
    if(item.id === id) {
      credentialUpdated = item;
      return {
        id,
        login: req.body.login.trim(),
        password: req.body.password.trim(),
        service: req.body.service.trim()
      };
    } else {
      return item;
    }
  });
  await writeDatabase({
    autoIncrement: database.autoIncrement,
    rows: [...credentialsRestantes]
  });
  res.json(credentialUpdated);
})

app.delete('/credentials/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const database = await readDatabase();
  let credentialDeleted = {};
  const credentialsRestantes = database.rows.filter((item) => {
    if(item.id === id) {
      credentialCreated = item;
      return false;
    } else {
      return true;
    }
  });
  await writeDatabase({
    autoIncrement: database.autoIncrement,
    rows: [...credentialsRestantes]
  });
  res.json(credentialDeleted);
})

app.listen(PORT);
