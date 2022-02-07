$(document).ready(function(){
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
    }

    clearCalculator() {
      this.operand1 = operand1DefaultValue;
      this.operand2 = operand2DefaultValue;
      this.operation = operationDefaultValue;
    }
  }

  const calculadora = new Calculadora();

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

  $("#btn-ac").click(function() {
    calculadora.clearCalculator();
    operandoSelect = 1;
    renderVisor('');
  });

  $("#btn-ce").click(function() {
    removeDigit();
    renderVisor();
  });

  $("#btn-divisao").click(function() {
    if(operandoSelect === 2) {
      calculadora.setOperand1(calculadora.operand2);
      calculadora.setOperand2('');
    }
    operandoSelect = 2;
    calculadora.setOperation('/');
    renderVisor();
  });

  $("#btn-7").click(function() {
    updateCalculator('7');
    renderVisor();
  });

  $("#btn-8").click(function() {
    updateCalculator('8');
    renderVisor();
  });

  $("#btn-9").click(function() {
    updateCalculator('9');
    renderVisor();
  });

  $("#btn-multiplicacao").click(function() {
    if(operandoSelect === 2) {
      calculadora.setOperand1(calculadora.operand2);
      calculadora.setOperand2('');
    }
    operandoSelect = 2;
    calculadora.setOperation('*');
    renderVisor();
  });

  $("#btn-4").click(function() {
    updateCalculator('4');
    renderVisor();
  });

  $("#btn-5").click(function() {
    updateCalculator('5');
    renderVisor();
  });

  $("#btn-6").click(function() {
    updateCalculator('6');
    renderVisor();
  });

  $("#btn-menos").click(function() {
    if(operandoSelect === 2) {
      calculadora.setOperand1(calculadora.operand2);
      calculadora.setOperand2('');
    }
    operandoSelect = 2;
    calculadora.setOperation('-');
    renderVisor();
  });

  $("#btn-1").click(function() {
    updateCalculator('1');
    renderVisor();
  });

  $("#btn-2").click(function() {
    updateCalculator('2');
    renderVisor();
  });

  $("#btn-3").click(function() {
    updateCalculator('3');
    renderVisor();
  });

  $("#btn-mais").click(function() {
    if(operandoSelect === 2) {
      calculadora.setOperand1(calculadora.operand2);
      calculadora.setOperand2('');
    }
    operandoSelect = 2;
    calculadora.setOperation('+');
    renderVisor();
  });

  $("#btn-0").click(function() {
    updateCalculator('0');
    renderVisor();
  });
  
  $("#btn-ponto").click(function() {
    insertPoint();
    renderVisor();
  });

  $("#btn-equal").click(function() {
    calculadora.setOperand1(String(calculadora.getResult()));
    calculadora.setOperand2('');
    operandoSelect = 1;
    renderVisor();
  });
});
