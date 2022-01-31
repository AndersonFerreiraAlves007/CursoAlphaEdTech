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

module.exports = {
  makeCalculadora
}
