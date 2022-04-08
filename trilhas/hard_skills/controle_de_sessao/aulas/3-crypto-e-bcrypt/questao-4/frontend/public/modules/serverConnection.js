const HOST_API = 'http://localhost:3333'

async function request (url, method = 'GET', body = null) {
  let options = {}
  if (method === 'POST' || method === 'PUT') {
    options = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3334',
        'Access-Control-Allow-Credentials': true
      },
      credentials: 'include',
      body: JSON.stringify(body)
    }
  } else {
    options = {
      method,
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3334',
        'Access-Control-Allow-Credentials': true
      },
      credentials: 'include'
    }
  }
  const data = await fetch(url, options)
  if (data.status >= 200 && data.status < 300) {
    const dados = await data.json()
    return dados
  } else {
    const dados = await data.json()
    throw dados.message
  }
}

class ServerConnection {
  constructor (host) {
    this.host = host
  }

  async login (username, password) {
    await request(`${this.host}/login`, 'POST', {
      username,
      password
    })
  }

  async register (username, password) {
    return await request(`${this.host}/register`, 'POST', {
      username,
      password
    })
  }

  async getPersonalNessage () {
    return await request(`${this.host}/personal-message`, 'GET')
  }

  /*  async getList (resource, filters) {

  }

  async getOne (resource, id) {

  }

  async create (resource, body) {

  }

  async update (resource, id, body) {

  }

  async delete (resource, id) {

  } */
}

const serverConnection = new ServerConnection(HOST_API)

export { serverConnection }
