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

module.exports = {
  Calculadora,
}
