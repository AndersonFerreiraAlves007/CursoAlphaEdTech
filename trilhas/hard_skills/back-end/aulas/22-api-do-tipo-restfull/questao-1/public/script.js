let codeTimer;

function renderTable(clientes) {
  const table = document.getElementById('table')
  table.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Nome</th>
    </tr>
  `
  clientes.forEach((clienteItem) => table.innerHTML += `
    <tr>
      <td>${clienteItem.id}</td>
      <td>${clienteItem.name}</td>
    </tr>
  `)
}

function getListClients() {
  clearFormFilter();
  fetch(`/produto/all`)
    .then(function(response) {
      response.json().then(function(produtos) {
        renderTable(produtos);
      })
    }
  ).catch(function(err) {
    console.error('Failed retrieving information', err);
  });
}

function getCliente(id) {
  clearFormFilter();
  fetch(`/produto/${id}`)
    .then(function(response) {
      response.json().then(function(produtos) {
        renderTable(produtos);
      })
    }
  ).catch(function(err) {
    console.error('Failed retrieving information', err);
  });
}

function getInputValues() {
  return {
    id: document.getElementById('id-create').value,
    name: document.getElementById('name-create').value,
  }
}

function clearFormFilter() {
  document.getElementById('id-search').value = '';
}

function clearFormCreate() {
  document.getElementById('id-create').value = '';
  document.getElementById('name-create').value = '';
}

function createProduto() {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(getInputValues()),
  };
  clearFormCreate();
  fetch(`/produto`, requestOptions)
    .then(response => response.json())
    .then(data => {
      getListClients();
    });
}

function updateProduto(id) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(getInputValues()),
  };
  clearFormCreate();
  fetch(`/produto/${id}`, requestOptions)
    .then(response => response.json())
    .then(data => {
      getListClients();
    });
}

function deletarProduto(id) {
  const requestOptions = {
    method: 'DELETE',
  };
  fetch(`/produto/${id}`, requestOptions)
    .then(response => response.json())
    .then(data => {
      getListClients();
    });
}

function clearMessage() {
  clearTimeout(codeTimer);
  setTimeout(() => {
    document.getElementById('message').innerHTML = '';
  }, 2000)
}

function drawMessage(message) {
  document.getElementById('message').innerHTML = message;
  clearMessage();
}

document.getElementById('btn-search').addEventListener('click', () => {
  const idSearch = document.getElementById('id-search').value;
  if(idSearch) {
    getCliente(idSearch);
  } else {
    drawMessage('É necessário informar o filtro ID para esta operação!');
  }
});

document.getElementById('btn-delete').addEventListener('click', () => {
  const idSearch = document.getElementById('id-search').value;
  if(idSearch) {
    deletarProduto(idSearch);
  } else {
    drawMessage('É necessário informar o filtro ID para esta operação!');
  }
});

document.getElementById('btn-create').addEventListener('click', () => {
  createProduto();
});

document.getElementById('btn-update').addEventListener('click', () => {
  const idSearch = document.getElementById('id-search').value;
  if(idSearch) {
    updateProduto(idSearch);
  } else {
    drawMessage('É necessário informar o filtro ID para esta operação!');
  }
});
