const HOST_SERVER = 'http://localhost:3002';
const TIME = 200;
let codeTime;
let filter = 1;

function getRouteFilter() {
  switch (filter) {
    case 1:
      return `funcionarios/aniversariantes/${document.getElementById('mes').value}`
    case 2:
      return 'ramais'
    case 3:
      return `funcionarios/setor/${document.getElementById('setor-filter-value').value}`
    default:
      return 'funcionarios/all'
  }
}

function clearTable() {
  const table = document.querySelector('table');
  table.innerHTML = `
    <tr>
      <th>Matrícula</th>
      <th>Nome</th>
      <th>Ramal</th>
      <th>Email</th>
      <th>Setor</th>
      <th>Nascimento</th>
    </tr>
  `
}

function renderTable(functionarios) {
  clearTable();
  console.log(functionarios)
  const table = document.querySelector('table');
  functionarios.forEach(
    (item) => table.innerHTML += `
      <tr>
        <td>${item.numero_matricula}</td>
        <td>${item.nome}</td>
        <td>${item.ramal}</td>
        <td>${item.email}</td>
        <td>${item.setor}</td>
        <td>${item.data_nascimento}</td>
      </tr>
    `
  )
}

function getFuncionarios() {
  clearTimeout(codeTime);
  codeTime = setTimeout(() => 
    fetch(`${HOST_SERVER}/${getRouteFilter()}`)
      .then(response => response.json())
      .then(data => renderTable(data.data)
    ), TIME
  )
}

function formatDate(date) {
  const dateBreak = date.split('-')
  return `${dateBreak[2]}/${dateBreak[1]}/${dateBreak[0]}`
}

function getInputValues() {
  return {
    numero_matricula: document.getElementById('numero_matricula').value,
    nome: document.getElementById('nome').value,
    ramal: document.getElementById('ramal').value,
    email: document.getElementById('email').value,
    setor: document.getElementById('setor').value,
    data_nascimento: formatDate(document.getElementById('data_nascimento').value),
  }
}

function clearForm() {
  document.getElementById('numero_matricula').value = '';
  document.getElementById('nome').value = '';
  document.getElementById('ramal').value = '';
  document.getElementById('email').value = '';
  document.getElementById('setor').value = '';
  document.getElementById('data_nascimento').value = '';
}

function createFuncionario() {
  disableFormCreate()
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(getInputValues())
  };
  //clearForm();
  fetch(`${HOST_SERVER}/funcionarios/create`, requestOptions)
  .then(response => response.json())
  .then(data => renderTable(data.data))
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

document.getElementById('mes').addEventListener('input', () => {
  getFuncionarios()
})

document.getElementById('setor-filter-value').addEventListener('input', () => {
  getFuncionarios()
})

getFuncionarios()

function clearFilterColor() {
  document.getElementById('btn-filter-aniversariantes').style.backgroundColor = 'white'
  document.getElementById('btn-filter-ramal').style.backgroundColor = 'white'
  document.getElementById('btn-filter-setor').style.backgroundColor = 'white'
}

function fillFilterColor() {
  clearFilterColor()
  switch (filter) {
    case 1:
      document.getElementById('btn-filter-aniversariantes').style.backgroundColor = 'green'
      break
    case 2:
      document.getElementById('btn-filter-ramal').style.backgroundColor = 'green'
      break
    case 3:
      document.getElementById('btn-filter-setor').style.backgroundColor = 'green'
      break
  }
}

fillFilterColor()

document.getElementById('btn-filter-aniversariantes').addEventListener('click', () => {
  filter = 1
  fillFilterColor()
  getFuncionarios()
})

document.getElementById('btn-filter-ramal').addEventListener('click', () => {
  filter = 2
  fillFilterColor()
  getFuncionarios()
})

document.getElementById('btn-filter-setor').addEventListener('click', () => {
  filter = 3
  fillFilterColor()
  getFuncionarios()
})
