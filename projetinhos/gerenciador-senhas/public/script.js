let idTimeout;
const timeRequest = 200;

function getInputsForm() {
  return {
    login: document.getElementById('login-value-dialog-create-update').value,
    password: document.getElementById('password-value-dialog-create-update').value,
    service: document.getElementById('service-value-dialog-create-update').value,
  }
}

let selectCredential = {};

function drawDialogoCreateUpdateCredential() {
  document.getElementById('login-value-dialog-create-update').value = selectCredential.login;
  document.getElementById('password-value-dialog-create-update').value = selectCredential.password;
  document.getElementById('service-value-dialog-create-update').value = selectCredential.service;
}

function drawDialogoDeleteCredential() {
  document.getElementById('login-value-dialog-delete').innerHTML = selectCredential.login;
  document.getElementById('password-value-dialog-delete').innerHTML = selectCredential.password;
  document.getElementById('password-value-dialog-service').innerHTML = selectCredential.service;
}

function openDialogUpdateCredential(id, login, password, service) {
  selectCredential = {
    id,
    login,
    password,
    service,
    method: 'PUT'
  }
  document.getElementById('dialog-create-update').style.display = 'flex';
  drawDialogoCreateUpdateCredential();
}

function openDialogCreateCredential() {
  selectCredential = {
    id: 0,
    login: '',
    password: '',
    service: '',
    method: 'POST'
  }
  document.getElementById('dialog-create-update').style.display = 'flex';
  drawDialogoCreateUpdateCredential();
}

function openDialogDeleteCredential(id, login, password, service) {
  selectCredential = {
    id,
    login,
    password,
    service,
    method: 'DELETE'
  }
  document.getElementById('dialog-delete').style.display = 'flex';
  drawDialogoDeleteCredential();
}

function drawCredential(credential) {
  return `
    <div class="container-card-credential">
      <div class="card-credential">
        <h2>
          ${credential.service}
        </h2>
        <div>
          <div class="rows-card">
            <span>
              Login: 
            </span>
            <span>
              ${credential.login}
            </span>
            <button 
              onclick="navigator.clipboard.writeText('${credential.login}')"
            >
              copy
            </button>
          </div>
          <div class="rows-card">
            <span>
              Senha:
            </span>
            <span>
              ${credential.password}
            </span>
            <button
              onclick="navigator.clipboard.writeText('${credential.password}')"
            >
              copy
            </button>
          </div>
        </div>
        <div class="card-actions">
          <button 
            onclick="openDialogUpdateCredential(${credential.id}, '${credential.login}', '${credential.password}', '${credential.service}')"
          >
            Atualizar
          </button>
          <button 
            onclick="openDialogDeleteCredential(${credential.id}, '${credential.login}', '${credential.password}', '${credential.service}')"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  `
}

function drawListCrendials(credentials) {
  const list = document.getElementById('list-credentials');
  list.innerHTML = '';
  let contentList = '';
  credentials.forEach(item => contentList += drawCredential(item));
  list.innerHTML += contentList;
}

function getCredentials(filterLogin = '') {
  fetch(`/credentials?login=${filterLogin}`)
    .then(response => response.json())
    .then(credentials => drawListCrendials(credentials));
}

function render() {
  clearTimeout(idTimeout);
  idTimeout = setTimeout(() => {
    getCredentials(document.getElementById('input-search').value);
  }, timeRequest);
}

function createCredential(login, password, service) {
  fetch(`/credentials`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      login,
      password,
      service
    })
  })
    .then(response => response.json())
    .then(responseJSON => render());
}

function updateCredential(id, login, password, service) {
  fetch(`/credentials/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      login,
      password,
      service
    })
  })
    .then(response => response.json())
    .then(responseJSON => render());
}

function deleteCredential(id) {
  fetch(`/credentials/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(responseJSON => render());
}

function closeDialogoCreateUpdate() {
  document.getElementById('dialog-create-update').style.display = 'none';
}

function closeDialogoDelete() {
  document.getElementById('dialog-delete').style.display = 'none';
}

document.getElementById('btn-new-credential').addEventListener('click', () => {
  console.log('lalalal')
  openDialogCreateCredential();
})

document.getElementById('btn-confirm-dialog-create-update').addEventListener('click', () => {
  if(selectCredential.method === 'PUT') {
    const { login, password, service } = getInputsForm();
    updateCredential(selectCredential.id, login, password, service);
  } else {
    if(selectCredential.method === 'POST') {
      const { login, password, service } = getInputsForm();
      createCredential(login, password, service);
    }
  }
  closeDialogoCreateUpdate();
})

document.getElementById('btn-confirm-dialog-delete').addEventListener('click', () => {
  deleteCredential(selectCredential.id);
  closeDialogoDelete();
})

document.getElementById('btn-cancel-dialog-delete').addEventListener('click', () => {
  closeDialogoDelete();
})

document.getElementById('btn-cancel-dialog-create-update').addEventListener('click', () => {
  closeDialogoCreateUpdate();
})

render();

document.getElementById('input-search').addEventListener('input', () => {
  render();
})
