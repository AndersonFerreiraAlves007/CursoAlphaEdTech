const operand1DefaultValue = 0;
const operand2DefaultValue = 0;
const operationDefaultValue = '+';

class Calculadora {
  constructor() {
    this.operand1 = operand1DefaultValue;
    this.operand2 = operand2DefaultValue;
    this.operation = operationDefaultValue;
  }

  setOperand1(_operand1) {
    this.operand1 = _operand1;
  }

  setOperand2(_operand2) {
    this.operand2 = _operand2;
  }

  setOperation(_operation) {
    this.operation = _operation;
  }

  getResult() {
    switch (this.operation) {
      case '+':
        return this.operand1 + this.operand2;
      case '-':
        return this.operand1 - this.operand2;
      case '*':
        return this.operand1 * this.operand2;
      case '/':
        return this.operand1 / this.operand2;
      default:
        return 0;
    }
  }

  clearCalculator() {
    this.operand1 = operand1DefaultValue;
    this.operand2 = operand2DefaultValue;
    this.operation = operationDefaultValue;
  }
}

const calculadora = new Calculadora()

function retirarCaracteresNaoDigitos(position) {
  const inputElem = document.querySelector(`#container-inputs-numeros :nth-child(${position})`)
  const valueInput = inputElem.value
  const numberSemLetras = valueInput.replace(/[^0-9]/g,'');
  if(numberSemLetras.length > 0) {
    inputElem.value = numberSemLetras
    return numberSemLetras
  }
  inputElem.value = '0'
  return '0'
}

const getNumeros = () => ({
  numero1: parseInt(retirarCaracteresNaoDigitos('1'), 10),
  numero2: parseInt(retirarCaracteresNaoDigitos('3'), 10)
})

function printarResultado(resultado) {
  document.getElementById('resultado').innerHTML = '' + resultado
}

function somar() {
  const { numero1, numero2 } = getNumeros()
  calculadora.setOperand1(numero1)
  calculadora.setOperand2(numero2)
  calculadora.setOperation('+')
  printarResultado(calculadora.getResult())
  calculadora.clearCalculator()
}

function subtrair() {
  const { numero1, numero2 } = getNumeros()
  calculadora.setOperand1(numero1)
  calculadora.setOperand2(numero2)
  calculadora.setOperation('-')
  printarResultado(calculadora.getResult())
  calculadora.clearCalculator()
}

function multiplicar() {
  const { numero1, numero2 } = getNumeros()
  calculadora.setOperand1(numero1)
  calculadora.setOperand2(numero2)
  calculadora.setOperation('*')
  printarResultado(calculadora.getResult())
  calculadora.clearCalculator()
}

function dividir() {
  const { numero1, numero2 } = getNumeros()
  calculadora.setOperand1(numero1)
  calculadora.setOperand2(numero2)
  calculadora.setOperation('/')
  printarResultado(calculadora.getResult())
  calculadora.clearCalculator()
}
