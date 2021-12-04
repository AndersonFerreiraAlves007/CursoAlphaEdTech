# Referências

1. [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects)

2. [https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics)

# Resumo

Objetos são coleções de dados e/ou funcionalidades relacionadas, na práticas variáveis e funções. Com a notação de ponto é possivel acessar o namespace do objeto e com isso acessar tudo que está encapsulado la dentro. Existe também o sub-namespace, quando acessamos um objeto dentro de outro objeto.
Existe ainda a notação de conchetes, onde acessamos as as propriedades de um objeto utilizando uma string contendo onome da propriedade. objeto['propriedade']

this, dentro de uma função dentro do objeto se refere a propria instancioa do objeto

Object.keys (o) retorna um vetor de string contendo os nomes de todas as propriedades de um objeto

## Criação de objetos

1. inicializadores de objetos sintaxe de { nameProp: valueProp }
2. função construtora:
  function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  var meucarro = new Carro("Eagle", "Talon TSi", 1993);
3. método Object.create, 
  var Animal = {
    tipo: "Invertebrados", // Propriedades de valores padrão
    qualTipo : function() {  // Método que ira mostrar o tipo de Animal
      console.log(this.tipo);
    }
  }
  var animal1 = Object.create(Animal);

Carro.prototype.cor = null; muda a propriedade cor para todos os obejtos do tipo Carro

getter e setter 

var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2
  }
};

# Estatísticas

Tempo Design e pesquisa: 58mim
Tempo HTML: 
Tempo CSS: 
Tempo JAVASCRIPT: 