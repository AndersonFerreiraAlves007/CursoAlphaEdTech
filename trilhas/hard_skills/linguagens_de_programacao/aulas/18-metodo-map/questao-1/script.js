const MORA = 2;
const JUROS_AO_DIA = 0.1;
const TEMPO_DE_DIA = 24 * 60 * 60 * 1000;

let receivables = [];

const getValuesInputs = () => ({
  nameCliente: document.querySelector("input[type='text']").value,
  dueDate: new Date(document.querySelector("input[type='date']").value),
  purchaseValue: parseInt(document.querySelector("input[type='number']").value, 10),
})

function addReceivable() {
  receivables.push({
    ...getValuesInputs(),
    juros: 0
  });
  clearForm();
}

function clearForm() {
  document.querySelector("input[type='text']").value = '';
  document.querySelector("input[type='date']").value = '';
  document.querySelector("input[type='number']").value = '';
}

function getDaysAfterDueDate(dueDate) {
  const dateAtual = new Date()
  if(dateAtual.getTime() > dueDate.getTime()) {
    return Math.trunc((dateAtual.getTime() - dueDate.getTime())/TEMPO_DE_DIA);
  }
  return 0
}

function getJurosReceivable(receivableItem) {
  const daysAfterDueDate = getDaysAfterDueDate(receivableItem.dueDate);
  return daysAfterDueDate > 0 ? (MORA + daysAfterDueDate * JUROS_AO_DIA) : 0;
}

function calculateJuros() {
  receivables = receivables.map((receivableItem) => {
    return {
      ...receivableItem,
      juros: getJurosReceivable(receivableItem)
    }
  })
}

function clearTable() {
  const table = document.querySelector('table');
  table.innerHTML = ''

  const row = document.createElement('tr')

  const colNameCliente = document.createElement('th')
  colNameCliente.innerHTML = 'Cliente'
  const colDueDate = document.createElement('th')
  colDueDate.innerHTML = 'Vencimento'
  const colPurchaseValue = document.createElement('th')
  colPurchaseValue.innerHTML = 'Compra'
  const colJurosPorcentagem = document.createElement('th')
  colJurosPorcentagem.innerHTML = 'Juros (%)'
  const colJurosReais = document.createElement('th')
  colJurosReais.innerHTML = 'Juros (R$)'
  const colValorTotal = document.createElement('th')
  colValorTotal.innerHTML = 'Total'

  row.append(colNameCliente)
  row.append(colDueDate)
  row.append(colPurchaseValue)
  row.append(colJurosPorcentagem)
  row.append(colJurosReais)
  row.append(colValorTotal)

  table.append(row)
}

function formatMoeda(valor) {
  return valor.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}

function formatDate(date) {
  const data = new Date(date)
  return ((('' + data.getDate()).length === 1 ? '0' : '') + data.getDate()) + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
}

function drawLineTable(receivableItem) {
  const row = document.createElement('tr')

  const jurosEmReais = receivableItem.purchaseValue * receivableItem.juros/100

  const colNameCliente = document.createElement('td')
  colNameCliente.innerHTML = receivableItem.nameCliente
  const colDueDate = document.createElement('td')
  colDueDate.innerHTML = formatDate(receivableItem.dueDate)
  const colPurchaseValue = document.createElement('td')
  colPurchaseValue.innerHTML = formatMoeda(receivableItem.purchaseValue)
  const colJurosPorcentagem = document.createElement('td')
  colJurosPorcentagem.innerHTML = `${receivableItem.juros} %`
  const colJurosReais = document.createElement('td')
  colJurosReais.innerHTML = formatMoeda(jurosEmReais)
  const colValorTotal = document.createElement('td')
  colValorTotal.innerHTML = formatMoeda( receivableItem.purchaseValue + jurosEmReais)

  row.append(colNameCliente)
  row.append(colDueDate)
  row.append(colPurchaseValue)
  row.append(colJurosPorcentagem)
  row.append(colJurosReais)
  row.append(colValorTotal)

  return row
}

function drawTable() {
  clearTable();
  const table = document.querySelector('table')
  receivables.forEach((receivableItem) => {
    table.append(drawLineTable(receivableItem))
  })
}

document.getElementById('btn-calculate-juros').addEventListener('click', () => {
  calculateJuros();
  drawTable();
})

document.getElementById('btn-add-receivable').addEventListener('click', () => {
  addReceivable();
  clearForm();
  drawTable();
})

drawTable()
