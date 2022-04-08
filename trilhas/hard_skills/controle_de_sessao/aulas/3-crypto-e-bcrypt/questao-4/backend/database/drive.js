class DriveDatabase {
  constructor (database) {
    this.database = database
  }

  async getList (table, filters = {}) {
    const arrayFilters = Object.entries(filters)

    let result = await this.database.getRegisters(table)

    for (let i = 0; i < arrayFilters; i++) {
      const filterField = arrayFilters[i][0]
      const filterValue = arrayFilters[i][1]
      result = result.filter((item) => item[filterField] === filterValue)
    }

    return result
  }

  async getOne (table, filters) {
    const result = await this.getList(table, filters)
    return result.length > 0 ? result[0] : null
  }

  async create (table, body) {
    const resource = await this.database.create(table, body)
    return resource
  }

  async update (table, id, body) {
    let resource = await this.getOne(table, { id })
    if (resource) {
      resource = await this.database.update(table, id, body)
    }
    return resource
  }

  async delete (table, id) {
    let resource = await this.getOne(table, { id })
    if (resource) {
      resource = await this.database.delete(table, id)
    }
    return resource
  }
}

module.exports = {
  DriveDatabase
}
