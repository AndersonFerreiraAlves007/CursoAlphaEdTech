const { addReceivable, clearForm } = require('./tabela')

const MORA = 2;
const JUROS_AO_DIA = 0.1;
const TEMPO_DE_DIA = 24 * 60 * 60 * 1000;
const GROUP_MODE_CLIENTE = 0;
const GROUP_MODE_DATA_VENCIMENTO = 1;

let receivables = [];

let groupMode = GROUP_MODE_CLIENTE;

let filters = {
  dateStart: {
    value: new Date(),
    enable: false
  },
  dateEnd: {
    value: new Date(),
    enable: false
  },
  minValue: {
    value: 0,
    enable: false
  },
  maxValue: {
    value: 0,
    enable: false
  },
}

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
  const dataCorrigida = new Date()
  const dataBreak = date.split('-')
  dataCorrigida.setDate(parseInt(dataBreak[2], 10))
  dataCorrigida.setMinutes(parseInt(dataBreak[1], 10))
  dataCorrigida.setFullYear(parseInt(dataBreak[0], 10))
  return dataCorrigida
}

const getValuesInputs = () => ({
  nameCliente: document.getElementById('name-cliente').value,
  dueDate: makeObjDate(document.getElementById('due-date').value),
  purchaseValue: parseInt(document.getElementById('purchase-value').value, 10),
  dueDateFormat: formatDate(new Date(document.getElementById('due-date').value))
})

const setFilters = () => {
  filters = {
    dateStart: {
      value: makeObjDate(document.getElementById('input-date-start').value),
      enable: document.getElementById('enable-date-start').checked
    },
    dateEnd: {
      value: makeObjDate(document.getElementById('input-date-end').value),
      enable: document.getElementById('enable-date-end').checked
    },
    minValue: {
      value:  parseInt(document.getElementById('input-min-purchase-value').value, 10),
      enable: document.getElementById('enable-min-purchase-value').checked
    },
    maxValue: {
      value: parseInt(document.getElementById('input-max-purchase-value').value, 10),
      enable: document.getElementById('enable-max-purchase-value').checked
    },
  }
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

function formatPorcentagem(valor) {
  return `${valor.toLocaleString('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} %`;
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
  colJurosPorcentagem.innerHTML = `${ formatPorcentagem(receivableItem.juros)} `
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

// se retornar 1, date1 é maior que date2
// se retornar -1, date1 é ,menor que date2
// se retornar 0, date1 é igual a date2
// lembrando que estou considerante apenas dias, meses e anos para comparação
function compareDates(date1, date2) {
  if(date1.getFullYear() > date2.getFullYear()) {
    return 1
  } else {
    if(date1.getFullYear() < date2.getFullYear()) {
      return -1
    } else {
      if(date1.getMonth() > date2.getMonth()) {
        return 1
      } else {
        if(date1.getMonth() < date2.getMonth()) {
          return -1
        } else {
          if(date1.getDate() > date2.getDate()) {
            return 1
          } else {
            if(date1.getDate() < date2.getDate()) {
              return -1
            } else {
              return 0
            }
          }
        }
      }
    }
  }
}

function filterArray(receivables) {
  let arrayFilted = receivables

  if(filters.dateStart.enable) {
    arrayFilted = arrayFilted.filter((item) => compareDates(item.dueDate,  filters.dateStart.value) >= 0)
  }

  if(filters.dateEnd.enable) {
    arrayFilted = arrayFilted.filter((item) => compareDates(filters.dateEnd.value, item.dueDate) >= 0)
  }

  if(filters.minValue.enable) {
    arrayFilted = arrayFilted.filter((item) => filters.minValue.value <= item.purchaseValue)
  }

  if(filters.maxValue.enable) {
    arrayFilted = arrayFilted.filter((item) => filters.maxValue.value >= item.purchaseValue)
  }

  return arrayFilted;
}

function drawTable() {
  clearTable();
  const table = document.querySelector('table')
 
  if(groupMode === GROUP_MODE_CLIENTE) {
    const receivablesGrouped = agruparPor(filterArray(receivables), 'nameCliente')
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

      let totalPurchaseValue = receivablesGrouped[key].reduce((sum, receivableItem) => {
        sum += receivableItem.purchaseValue
        return sum;
      }, 0)
      
      const titleGroup = document.createElement('tr')
      const colTitleGroup = document.createElement('td')
      colTitleGroup.innerHTML = `${key} - Total Compra: ${formatMoeda(totalPurchaseValue)}`
      colTitleGroup.classList.add("label-group")
      colTitleGroup.setAttribute('colspan', 6)
      titleGroup.append(colTitleGroup)
      table.append(titleGroup)

      receivablesGrouped[key].forEach((receivableItem) => {
        table.append(drawLineTable(receivableItem))
      })
    })
  } else {
    const receivablesGrouped = agruparPor(filterArray(receivables), 'dueDateFormat')
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
      let totalPurchaseValue = receivablesGrouped[key].reduce((sum, receivableItem) => {
        sum += receivableItem.purchaseValue
        return sum;
      }, 0)
      
      const titleGroup = document.createElement('tr')
      const colTitleGroup = document.createElement('td')
      colTitleGroup.innerHTML = `${key} - Total Compra: ${formatMoeda(totalPurchaseValue)}`
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
  addReceivable(receivables);
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

function drawFilters() {
  const container = document.getElementById('container-filter-apply')
  container.innerHTML = ''

  const title = document.createElement('h2')
  title.innerHTML = 'Filtros Aplicados'
  container.append(title)

  if(filters.dateStart.enable) {
    const valueDateStart = document.createElement('div')
    valueDateStart.innerHTML = `Data Início: ${formatDate(filters.dateStart.value)}`
    valueDateStart.classList.add('filterApplyValue')
    container.append(valueDateStart)
  }

  if(filters.dateEnd.enable) {
    const valueDateEnd = document.createElement('div')
    valueDateEnd.innerHTML = `Data Fim: ${formatDate(filters.dateEnd.value)}`
    valueDateEnd.classList.add('filterApplyValue')
    container.append(valueDateEnd)
  }

  if(filters.minValue.enable) {
    const valueMinValuePurchase = document.createElement('div')
    valueMinValuePurchase.innerHTML = `Valor Mínimo: ${formatMoeda(filters.minValue.value)}`
    valueMinValuePurchase.classList.add('filterApplyValue')
    container.append(valueMinValuePurchase)
  }

  if(filters.maxValue.enable) {
    const ValueMaxValuePurchase = document.createElement('div')
    ValueMaxValuePurchase.innerHTML = `Valor Máximo: ${formatMoeda(filters.maxValue.value)}`
    ValueMaxValuePurchase.classList.add('filterApplyValue')
    container.append(ValueMaxValuePurchase)
  }
}

document.getElementById('btn-groups-cliente').addEventListener('click', () => {
  groupMode = GROUP_MODE_CLIENTE;
  drawBtnsGroup();
  drawTable();
})

document.getElementById('btn-groups-vencimento').addEventListener('click', () => {
  groupMode = GROUP_MODE_DATA_VENCIMENTO;
  drawBtnsGroup();
  drawTable();
})

document.getElementById('btn-apply-filters').addEventListener('click', () => {
  setFilters();
  drawFilters();
  drawTable();
})


drawBtnsGroup();
