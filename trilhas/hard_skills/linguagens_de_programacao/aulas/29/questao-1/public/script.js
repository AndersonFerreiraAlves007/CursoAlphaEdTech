const operand1DefaultValue = '';
const operand2DefaultValue = '';
const operationDefaultValue = '+';

function getValueFormated(value) {
  let valueCopy = value.slice(0);
  console.log(valueCopy);
  if(valueCopy.length > 0) {
    if(valueCopy[0] === '.') {
      valueCopy = `0${valueCopy}`
    }
    if(valueCopy[valueCopy.length - 1] === '.') {
      valueCopy = `${valueCopy}0`
    }
    console.log(valueCopy);
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

const makeCalculadora = () => ({
  operand1: operand1DefaultValue,
  operand2: operand2DefaultValue,
  operation: operationDefaultValue,
  setOperand1(_operand1) {
    this.operand1 = _operand1;
  },
  setOperand2(_operand2) {
    this.operand2 = _operand2;
  },
  setOperation(_operation) {
    this.operation = _operation;
  },
  getResult() {
    switch (this.operation) {
      case '+':
        return formatResult(Number(getValueFormated(this.operand1)) + Number(getValueFormated(this.operand2)));
      case '-':
        return formatResult(Number(getValueFormated(this.operand1)) - Number(getValueFormated(this.operand2)));
      case '*':
        return formatResult(Number(getValueFormated(this.operand1)) * Number(getValueFormated(this.operand2)));
      case '/':
        return formatResult(Number(getValueFormated(this.operand1)) / Number(getValueFormated(this.operand2)));
      default:
        return 0;
    }
  },
  clearCalculator() {
    this.operand1 = operand1DefaultValue;
    this.operand2 = operand2DefaultValue;
    this.operation = operationDefaultValue;
  }
})

const calculadora = makeCalculadora();

let operandoSelect = 1;

function updateCalculator(value) {
  if(operandoSelect === 1) {
    calculadora.setOperand1(`${calculadora.operand1}${value}`);
  } else {
    calculadora.setOperand2(`${calculadora.operand2}${value}`);
  }
}

function insertPoint() {
  if(operandoSelect === 1) {
    if(!calculadora.operand1.includes('.')) {
      calculadora.setOperand1(`${calculadora.operand1}.`);
    }
  } else {
    if(!calculadora.operand2.includes('.')) {
      calculadora.setOperand2(`${calculadora.operand2}.`);
    }
  }
}

function removeDigit() {
  if(operandoSelect === 1) {
    if(calculadora.operand1.length > 0) {
      calculadora.setOperand1(calculadora.operand1.slice(0, -1));
    }
  } else {
    if(calculadora.operand2.length > 0) {
      calculadora.setOperand2(calculadora.operand2.slice(0, -1));
    }
  }
}

function renderVisor() {
  if(operandoSelect === 1) {
    document.getElementById('visor').innerHTML = calculadora.operand1;
  } else {
    document.getElementById('visor').innerHTML = calculadora.operand2;
  }
}

document.getElementById('btn-ac').addEventListener('click', () => {
  calculadora.clearCalculator();
  operandoSelect = 1;
  renderVisor('');
})

document.getElementById('btn-ce').addEventListener('click', () => {
  removeDigit();
  renderVisor();
})

document.getElementById('btn-divisao').addEventListener('click', () => {
  if(operandoSelect === 2) {
    calculadora.setOperand1(calculadora.operand2);
    calculadora.setOperand2('');
  }
  operandoSelect = 2;
  calculadora.setOperation('/');
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
    calculadora.setOperand1(calculadora.operand2);
    calculadora.setOperand2('');
  }
  operandoSelect = 2;
  calculadora.setOperation('*');
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
    calculadora.setOperand1(calculadora.operand2);
    calculadora.setOperand2('');
  }
  operandoSelect = 2;
  calculadora.setOperation('-');
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
    calculadora.setOperand1(calculadora.operand2);
    calculadora.setOperand2('');
  }
  operandoSelect = 2;
  calculadora.setOperation('+');
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

document.getElementById('btn-equal').addEventListener('click', () => {
  calculadora.setOperand1(String(calculadora.getResult()));
  calculadora.setOperand2('');
  operandoSelect = 1;
  renderVisor();
})
