function addReceivable(receivables) {
  receivables.push({
    ...getValuesInputs(),
    juros: 0
  });
  clearForm();
}

function clearForm() {
  document.getElementById('name-cliente').value = '';
  document.getElementById('due-date').value = '';
  document.getElementById('purchase-value').value = '';
}

module.exports = {
  addReceivable, 
  clearForm
}

/* export function calculateJuros(recei) {
  receivables = receivables.map((receivableItem) => {
    return {
      ...receivableItem,
      juros: getJurosReceivable(receivableItem)
    }
  })
} */
