<h4 align="center"> 
♻️ Concluído 🚀
</h4>

## 🔑 Palavras-chave
---

![](https://img.shields.io/static/v1?label&message=Callbacks&color=red)

## 📖 Sobre a aula - Callback functions
---

-  **Data:** 20/12/2021
-  **Professor:** Leonardo Pimentel
-  **Descrição:** Nesta aula aprendemos sobre funções de callback, como funcionam e como utiliza-las na prática

## 📚 Referências
---

- [https://developer.mozilla.org/en-US/docs/Glossary/Callback_function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [https://medium.com/totvsdevelopers/entendendo-fun%C3%A7%C3%B5es-callback-em-javascript-7b500dc7fa22](https://medium.com/totvsdevelopers/entendendo-fun%C3%A7%C3%B5es-callback-em-javascript-7b500dc7fa22)
- [https://developer.mozilla.org/pt-BR/docs/Web/API/setInterval](https://developer.mozilla.org/pt-BR/docs/Web/API/setInterval)

## ✏️ Atividade
---

- [Questão 1](questoes/)

## 📒 Resumo
---

Callback é uma função que é passada como parãmetro para um aoutra função para ser chamada dentro dessa função. Geralmente funções de callback são executadas após um certo evento.

### SetInterval

É uma função que recebe um outra função de callback como parametro e executa essa função em intervalos de tempo que é especificado no seu segundo argumento, conforma sintaxe abaixo.

```
var intervalID = scope.setInterval(func, delay[, param1, param2, ...]);
```

O retorno da função setInterval é o id desse interval, para eliminar esse temporizado é só chamar a função clearInterval(intervalID).

