const operand1DefaultValue = '';
const operand2DefaultValue = '';
const operationDefaultValue = '+';

let operand1 = operand1DefaultValue;
let operand2 = operand2DefaultValue;
let operation = operationDefaultValue;

function getValueFormated(value) {
  let valueCopy = value.slice(0);
  if(valueCopy.length > 0) {
    if(valueCopy[0] === '.') {
      valueCopy = `0${valueCopy}`
    }
    if(valueCopy[valueCopy.length - 1] === '.') {
      valueCopy = `${valueCopy}0`
    }
    return valueCopy;
  } else {
    return ''
  } 
}

function formatResult(value) {
  let valueString = String(value);
  const partes = valueString.split('.')
  return `${partes[0]}${partes.length > 1 ? `.${partes[1].length > 3 ? partes[1].substring(0, 3) : partes[1]}` : ''}`
}

let operandoSelect = 1;

function updateCalculator(value) {
  if(operandoSelect === 1) {
    operand1 = `${operand1}${value}`;
  } else {
    operand2 = `${operand2}${value}`;
  }
}

function insertPoint() {
  if(operandoSelect === 1) {
    if(!operand1.includes('.')) {
      operand1 = `${operand1}.`;
    }
  } else {
    if(!operand2.includes('.')) {
      operand2 = `${operand2}.`;
    }
  }
}

function removeDigit() {
  if(operandoSelect === 1) {
    if(operand1.length > 0) {
      operand1 = operand1.slice(0, -1);
    }
  } else {
    if(operand2.length > 0) {
      operand2 = operand2.slice(0, -1);
    }
  }
}

function renderVisor() {
  if(operandoSelect === 1) {
    document.getElementById('visor').innerHTML = operand1;
  } else {
    document.getElementById('visor').innerHTML = operand2;
  }
}

document.getElementById('btn-ac').addEventListener('click', () => {
  operand1 = operand1DefaultValue;
  operand2 = operand2DefaultValue;
  operation = operationDefaultValue;
  operandoSelect = 1;
  renderVisor('');
})

document.getElementById('btn-ce').addEventListener('click', () => {
  removeDigit();
  renderVisor();
})

document.getElementById('btn-divisao').addEventListener('click', () => {
  if(operandoSelect === 2) {
    operand1 = operand2;
    operand2 = '';
  }
  operandoSelect = 2;
  operation = '/';
  renderVisor();
})

document.getElementById('btn-7').addEventListener('click', () => {
  updateCalculator('7');
  renderVisor();
})

document.getElementById('btn-8').addEventListener('click', () => {
  updateCalculator('8');
  renderVisor();
})

document.getElementById('btn-9').addEventListener('click', () => {
  updateCalculator('9');
  renderVisor();
})

document.getElementById('btn-multiplicacao').addEventListener('click', () => {
  if(operandoSelect === 2) {
    operand1 = operand2;
    operand2 = '';
  }
  operandoSelect = 2;
  operation = '*';
  renderVisor();
})

document.getElementById('btn-4').addEventListener('click', () => {
  updateCalculator('4');
  renderVisor();
})

document.getElementById('btn-5').addEventListener('click', () => {
  updateCalculator('5');
  renderVisor();
})

document.getElementById('btn-6').addEventListener('click', () => {
  updateCalculator('6');
  renderVisor();
})

document.getElementById('btn-menos').addEventListener('click', () => {
  if(operandoSelect === 2) {
    operand1 = operand2;
    operand2 = '';
  }
  operandoSelect = 2;
  operation = '-';
  renderVisor();
})

document.getElementById('btn-1').addEventListener('click', () => {
  updateCalculator('1');
  renderVisor();
})

document.getElementById('btn-2').addEventListener('click', () => {
  updateCalculator('2');
  renderVisor();
})

document.getElementById('btn-3').addEventListener('click', () => {
  updateCalculator('3');
  renderVisor();
})

document.getElementById('btn-mais').addEventListener('click', () => {
  if(operandoSelect === 2) {
    operand1 = operand2;
    operand2 = '';
  }
  operandoSelect = 2;
  operation = '+';
  renderVisor();
})

document.getElementById('btn-0').addEventListener('click', () => {
  updateCalculator('0');
  renderVisor();
})

document.getElementById('btn-ponto').addEventListener('click', () => {
  insertPoint();
  renderVisor();
})

let idTimeout;

document.getElementById('btn-equal').addEventListener('click', () => {
  clearTimeout(idTimeout);
  idTimeout = setTimeout(() => getResult(), 300);
})

function getResult() {
  fetch(`/result_operation/${operation}/${operand1}/${operand2}`)
    .then(response => response.json())
    .then(({ result }) => {
      operand1 = String(result),
      operand2 = '';
      operandoSelect = 1;
      renderVisor();
    });
}
