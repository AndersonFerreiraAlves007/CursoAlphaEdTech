function renderTable(clientes) {
  const table = document.getElementById('table')
  table.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Nome</th>
      <th>Email</th>
      <th>Ações</th>
    </tr>
  `
  clientes.forEach((clienteItem) => table.innerHTML += `
    <tr>
      <td>${clienteItem.id}</td>
      <td>${clienteItem.name}</td>
      <td>${clienteItem.email}</td>
      <td><button onclick="deletarFuncionario(${clienteItem.id})">Deletar</button></td>
    </tr>
  `)
}

function searchClients(atr, value) {
  fetch(`/clientes?atr=${atr}&value=${value}`)
    .then(function(response) {
      response.json().then(function(clientes) {
        renderTable(clientes);
      })
    }
  ).catch(function(err) {
    console.error('Failed retrieving information', err);
  });
}

function search() {
  const value = document.getElementById('value').value;
  const atr = document.getElementById('atr').value;

  if(atr === 'id') {
    if(Number.isNaN(parseInt(value, 10))) {
      document.getElementById('message').innerHTML = 'É necessário fornecer um ID!'
      //renderTable([])
      searchClients('todos', '');
    } else {
      document.getElementById('message').innerHTML = ''
      searchClients(atr, value);
    }
  } else {
    if(value.length >= 3) {
      document.getElementById('message').innerHTML = ''
      searchClients(atr, value);
    } else {
      document.getElementById('message').innerHTML = 'É necessário fornecer no mínimo 3 caracteres!'
      //renderTable([])
      searchClients('todos', '');
    }
  }
}

function debounce(func, timeout = 2000) {
  let timer;
  return (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func(e); }, timeout);
  }
}

const processChange = debounce((e) => search());

document.getElementById('atr').addEventListener('change', (e) => {
  const inputValue = document.getElementById('value');
  const select = document.getElementById('atr');
  if(e.target.value === 'id') {
    inputValue.setAttribute('type', 'number')
  } else {
    inputValue.setAttribute('type', 'text')
  }
  inputValue.value = ''
  processChange(e)
});

document.getElementById('value').addEventListener('input', (e) => {
  processChange(e)
});

function getInputValues() {
  return {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
  }
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
}

function createFuncionario() {
  disableFormCreate()
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(getInputValues())
  };
  clearForm();
  fetch(`/clientes`, requestOptions)
    .then(response => response.json())
    .then(data => {
      search()
    })
}

function deletarFuncionario(id) {
  const requestOptions = {
    method: 'DELETE',
  };
  fetch(`/clientes/${id}`, requestOptions)
    .then(response => response.json())
    .then(data => {
      search()
    })
}

function enableFormCreate() {
  document.getElementById('container-form').style.display = 'flex';
}

function disableFormCreate() {
  document.getElementById('container-form').style.display = 'none';
}

document.getElementById('cancel-create-item').addEventListener('click', () => {
  disableFormCreate();
})

document.getElementById('confirm-create-item').addEventListener('click', () => {
  createFuncionario()
})

document.getElementById('new-funcionario').addEventListener('click', () => {
  enableFormCreate()
})
