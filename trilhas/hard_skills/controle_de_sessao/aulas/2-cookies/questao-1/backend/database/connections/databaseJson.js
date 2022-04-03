const fs = require('fs')

const PATH_TABLES_DIR = 'jsons'

function readDatabase (table) {
  return JSON.parse(fs.readFileSync(`${PATH_TABLES_DIR}/${table}.json`))
}

function writeDatabase (table, data) {
  fs.writeFileSync(`${PATH_TABLES_DIR}/${table}.json`, JSON.stringify(data))
}

function getIndexResource (id, rows) {
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].id === id) {
      return i
    }
  }
  return -1
}

class Database {
  async getRegisters (table) {
    const tableData = readDatabase(table)
    return tableData.rows
  }

  async create (table, body) {
    let tableData = readDatabase(table)
    writeDatabase(table, {
      autoIncrement: tableData.autoIncrement + 1,
      rows: [
        ...tableData.rows,
        {
          ...body,
          id: tableData.autoIncrement + 1
        }
      ]
    })
    tableData = readDatabase(table)
    return tableData.rows[tableData.rows.length - 1]
  }

  async update (table, id, body) {
    let tableData = readDatabase(table)
    const indexResource = getIndexResource(id, tableData.rows)
    const rowsCopy = tableData.rows.slice()
    if (indexResource >= 0) {
      rowsCopy[indexResource] = {
        ...rowsCopy[indexResource],
        ...body
      }
      writeDatabase(table, {
        autoIncrement: tableData.autoIncrement,
        rows: rowsCopy
      })
      tableData = readDatabase(table)
      return tableData.rows[indexResource]
    }
    return null
  }

  async delete (table, id) {
    let tableData = readDatabase(table)
    const indexResource = getIndexResource(id, tableData.rows)
    const rowsCopy = tableData.rows.slice()
    if (indexResource >= 0) {
      rowsCopy[indexResource] = [...rowsCopy.slice(0, indexResource), rowsCopy.slice(indexResource)]
      writeDatabase(table, {
        autoIncrement: tableData.autoIncrement,
        rows: rowsCopy
      })
      tableData = readDatabase(table)
      return tableData.rows[indexResource]
    }
    return null
  }
}

module.exports = Database
