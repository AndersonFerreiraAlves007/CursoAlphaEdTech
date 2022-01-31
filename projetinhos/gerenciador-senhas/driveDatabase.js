const fsPromises = require("fs").promises;
const fileDatabase = "database.json";
const { encrypt, decrypt } = require("./crypto");

async function readDatabase() {
  const data = await fsPromises.readFile(fileDatabase);
  let database = JSON.parse(data);
  database = {
    autoIncrement: database.autoIncrement,
    rows: database.rows.map((item) => ({
      ...item,
      password: decrypt(item.password),
    })),
  };
  return database;
}

async function writeDatabase(database) {
  const databaseCrypto = {
    autoIncrement: database.autoIncrement,
    rows: database.rows.map((item) => ({
      ...item,
      password: encrypt(item.password),
    })),
  };
  const data = JSON.stringify(databaseCrypto);
  await fsPromises.writeFile(fileDatabase, data);
}

module.exports = {
  readDatabase,
  writeDatabase,
};
