const MORA = 2;
const JUROS_AO_DIA = 0.1;
const TEMPO_DE_DIA = 24 * 60 * 60 * 1000;
const GROUP_MODE_CLIENTE = 0;
const GROUP_MODE_DATA_VENCIMENTO = 1;

let receivables = [];

let groupMode = GROUP_MODE_CLIENTE;

function agruparPor(objetoArray, propriedade) {
  return objetoArray.reduce(function (acc, obj) {
    let key = obj[propriedade];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

function makeObjDate(date) {
  const dataAtual = new Date()
  date.setHours(dataAtual.getHours())
  return date
}

const getValuesInputs = () => ({
  nameCliente: document.querySelector("input[type='text']").value,
  dueDate: makeObjDate(new Date(document.querySelector("input[type='date']").value)),
  purchaseValue: parseInt(document.querySelector("input[type='number']").value, 10),
  dueDateFormat: formatDate(new Date(document.querySelector("input[type='date']").value))
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

function breakDate(date) {
  return {
    dia: parseInt(date.substring(0, 2), 10),
    mes: parseInt(date.substring(2, 5), 10),
    ano: parseInt(date.substring(6), 10),
  }
}

function drawTable() {
  clearTable();
  const table = document.querySelector('table')
 
  if(groupMode === GROUP_MODE_CLIENTE) {
    const receivablesGrouped = agruparPor(receivables, 'nameCliente')
    console.log(receivablesGrouped)
    const keys = Object.keys(receivablesGrouped);
    console.log(keys)
    keys.sort(function(a, b){
      const nameA=a.toLowerCase(), nameB=b.toLowerCase();
      if (nameA < nameB) 
      return -1;
      if (nameA > nameB)
      return 1;
      return 0; 
    });

    keys.forEach((key) => {

      const titleGroup = document.createElement('tr')
      const colTitleGroup = document.createElement('td')
      colTitleGroup.innerHTML = key
      colTitleGroup.classList.add("label-group")
      colTitleGroup.setAttribute('colspan', 6)
      titleGroup.append(colTitleGroup)

      table.append(titleGroup)
      receivablesGrouped[key].forEach((receivableItem) => {
        table.append(drawLineTable(receivableItem))
      })
    })
  } else {
    const receivablesGrouped = agruparPor(receivables, 'dueDateFormat')
    console.log(receivablesGrouped)
    const keys = Object.keys(receivablesGrouped);
    console.log(keys)
    keys.sort(function(a, b){
      const dateA = breakDate(a)
      const dateB = breakDate(b)
      if(dateA.ano > dateB.ano) {
        return -1
      } else {
        if(dateA.ano < dateB.ano) {
          return 1
        } else {
          if(dateA.mes > dateB.mes) {
            return -1
          } else {
            if(dateA.mes < dateB.mes) {
              return 1
            } else {
              if(dateA.dia > dateB.dia) {
                return -1
              } else {
                if(dateA.dia < dateB.dia) {
                  return 1
                } else {
                  return -1
                }
              }
            }
          }
        }
      }
    });

    keys.forEach((key) => {

      const titleGroup = document.createElement('tr')
      const colTitleGroup = document.createElement('td')
      colTitleGroup.innerHTML = key
      colTitleGroup.classList.add("label-group")
      colTitleGroup.setAttribute('colspan', 6)
      titleGroup.append(colTitleGroup)

      table.append(titleGroup)
      receivablesGrouped[key].forEach((receivableItem) => {
        table.append(drawLineTable(receivableItem))
      })
    })
  }
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

function drawBtnsGroup() {
  if(groupMode === GROUP_MODE_CLIENTE) {
    document.getElementById('btn-groups-cliente').classList.add('btn-select')
    document.getElementById('btn-groups-vencimento').classList.remove('btn-select')
  } else {
    document.getElementById('btn-groups-vencimento').classList.add('btn-select')
    document.getElementById('btn-groups-cliente').classList.remove('btn-select')
  }
}

document.getElementById('btn-groups-cliente').addEventListener('click', () => {
  groupMode = GROUP_MODE_CLIENTE;
  drawBtnsGroup()
  drawTable()
})

document.getElementById('btn-groups-vencimento').addEventListener('click', () => {
  groupMode = GROUP_MODE_DATA_VENCIMENTO;
  drawBtnsGroup()
  drawTable()
})

drawBtnsGroup()
