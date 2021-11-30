# Referências

## O que é Javascript

1. [https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript).

# Resumo

Javascript é umas das três principais tecnologias utilizadas na web, as outras duas são o HTML para estruturar a página e o CSS para estilizar a página.

O javascript é uma linguagem de programação e com ela é possível interagir com o dom e com isso adicionar interatividade ou efeitos mais complexos aos elementos da página

A linguagem em si, faz o que qualquer outra linguagem de programação faz, como manipular e criar variáveis, controle de fuxo, etc. Porém o diferencial são as API, principalemnte as API's do navegador, como a API dom , de localização, API's gráficas como o canvas , e as de aúdio e vídeo.

Cada guia do navegador possui seu próprio ambiente de execução, de tal forma que o código de uma aba não interfere no de outra.

Javascript é uma linguagem interpretada, em sua essencial, apesar de haver uma compilação just-in-time para melhorar o desempenho, enquanto oscript está sendo usado.

Linguagem compiladas são transformadas em outraos códigos para poderem ser executadas, já as linguagens interpretadas são executadas diretamente por um interpretador.

Javascript interno: quando o código está declarado na página html, dentro de uma tag script

Javascript externo: O javascript é declarado em um arquivo separado e importado para a página apartir de uma taf script

Manipuladores javascript inline: declarara chamada de funções em manipuladores de eventos no HTML, não é uma boa prática pois polui o HTML com código javascript

Uma boa prática é colocar a tag script no final do body, pois assim garante que todo o HTML foi carregado e não ocorrerá erros relacionadas a procurar uma tag por exemplo. Porém se quiser declarar a tag script antes, pode faze-lo adicionando o atributo defer a tag script, que informa para carregar o script de forma simultânea ao código e não de forma bloqueante

Quando o site é muito grande não é recomendado colocar a tag script no final, pois pode ocorrer problemas de performance, nesse caso é aconcelhável utilizar o atributo defer

Os atributos defer e async instruem o navegador a baixar os scripts de forma asyncrona, de forma não bloquante, ou seja em um processo ou thread separado. Porém no async assim que o script é baixado ele já é executado, já no defer mesmo que ele seja baixado ele só executado quando o contúdo da página toda é carregado. Async não garante a ordem exata de execução dos scripts, já o defer executaos scripts na ordem em que foram decalarados no documento. Async é recomendado para tarefas em background, que não dependam de outros scripts, e que precisam rodar imediatamente. Caso dependa do DOM carregado e de outros scripts é recomendável utilizar defer.

