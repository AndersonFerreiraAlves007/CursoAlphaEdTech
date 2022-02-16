const fsPromises = require("fs").promises;
const fileDatabase = "gamesdatabase.json";

async function readDatabase() {
  const data = await fsPromises.readFile(fileDatabase);
  let database = JSON.parse(data);
  return database;
}

async function writeDatabase(database) {
  const data = JSON.stringify(database);
  await fsPromises.writeFile(fileDatabase, data);
}

async function addGame(game) {
  const database = await readDatabase()
  const gameAdd = {
    ...game,
    id: database.autoIncrement + 1
  }
  await writeDatabase({
    autoIncrement: database.autoIncrement + 1,
    rows: [
      ...database.rows, 
      gameAdd
    ]
  });
  return gameAdd
}

async function getGames() {
  const database = await readDatabase()
  return database.rows
}

module.exports = {
  addGame,
  getGames,
};
