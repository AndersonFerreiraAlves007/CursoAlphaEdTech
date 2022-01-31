const fs = require('fs')

function formatDateRead(date) {
  const dateBreak = date.split('-')
  return `${dateBreak[2]}/${dateBreak[1]}/${dateBreak[0]}`
}

function formatDateWrite(date) {
  const dateBreak = date.split('/')
  return `${dateBreak[2]}-${dateBreak[1]}-${dateBreak[0]}`
}

const adapterWrite = (array) =>
  array.map(({
    numero_matricula,
    nome,
    ramal,
    email,
    setor,
    data_nascimento,
  }) => ({
    id: numero_matricula,
    name: nome,
    email: email,
    extension: ramal,
    birthDay: formatDateWrite(data_nascimento),
    sector: setor
  }))

  const adapterRead = (array) =>
  array.map(({
    id,
    name,
    email,
    extension,
    birthDay,
    sector
  }) => ({
    numero_matricula: id,
    nome: name,
    email: email,
    ramal: extension,
    data_nascimento: formatDateRead(birthDay),
    setor: sector
  }))

function readDatabase() {
  const data = fs.readFileSync("database.json");
  return adapterRead(JSON.parse(data));
}

function writeDatabase(newData) {
  const database = readDatabase();
  fs.writeFileSync("database.json", JSON.stringify(adapterWrite([...database, newData])));
}

module.exports = {
  readDatabase,
  writeDatabase
}