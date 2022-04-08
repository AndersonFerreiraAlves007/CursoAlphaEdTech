const { DriveDatabase } = require('./drive')
const { DatabaseArray, DatabaseJson } = require('./connections')

function selectDatabase (optionDatabase) {
  switch (optionDatabase) {
    case 'array':
      return new DatabaseArray()
    case 'json':
      return new DatabaseJson()
    default:
      return new DatabaseArray()
  }
}

const connectionDatabase = new DriveDatabase(selectDatabase(process.env.CONNECTION_DATABASE))

module.exports = {
  connectionDatabase
}
