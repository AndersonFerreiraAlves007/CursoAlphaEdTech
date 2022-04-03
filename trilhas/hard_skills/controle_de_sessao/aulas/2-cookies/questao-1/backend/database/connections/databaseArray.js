const tables = {
  users: {
    autoIncrement: 0,
    rows: []
  }
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
    const tableData = tables[table]
    return tableData.rows
  }

  async create (table, body) {
    const tableData = tables[table]
    tables[table] = {
      autoIncrement: tableData.autoIncrement + 1,
      rows: [
        ...tableData.rows,
        {
          ...body,
          id: tableData.autoIncrement + 1
        }
      ]
    }
    return tables[table].rows[tables[table].rows.length - 1]
  }

  async update (table, id, body) {
    const tableData = tables[table]
    const indexResource = getIndexResource(id, tableData.rows)
    const rowsCopy = tableData.rows.slice()
    if (indexResource >= 0) {
      rowsCopy[indexResource] = {
        ...rowsCopy[indexResource],
        ...body
      }
      tables[table] = {
        autoIncrement: tableData.autoIncrement,
        rows: rowsCopy
      }
      return tables[table].rows[indexResource]
    }
    return null
  }

  async delete (table, id) {
    const tableData = tables[table]
    const indexResource = getIndexResource(id, tableData.rows)
    const rowsCopy = tableData.rows.slice()
    if (indexResource >= 0) {
      rowsCopy[indexResource] = [...rowsCopy.slice(0, indexResource), rowsCopy.slice(indexResource)]
      tables[table] = {
        autoIncrement: tableData.autoIncrement,
        rows: rowsCopy
      }
      return tables[table].rows[indexResource]
    }
    return null
  }
}

module.exports = Database
