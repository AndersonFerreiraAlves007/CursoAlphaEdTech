<h4 align="center"> 
♻️ Concluído 🚀
</h4>

## 🔑 Palavras-chave
---

![](https://img.shields.io/static/v1?label&message=cookies&color=red)
![](https://img.shields.io/static/v1?label&message=cookie-parser&color=red)
![](https://img.shields.io/static/v1?label&message=express&color=red)

## 📖 Sobre a aula - Cookies
---

-  **Data:** 01/04/2022
-  **Professor:** Leonardo Pimentel
-  **Descrição:** Nesta aula aprendemos a utilizar os cookies para controle de sessão em conjunto com o express

## 📚 Referências
---

- [https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Cookies](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Cookies)
- [https://www.npmjs.com/package/cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [https://riptutorial.com/node-js/example/21767/setting-cookies-with-cookie-parser](https://riptutorial.com/node-js/example/21767/setting-cookies-with-cookie-parser)

## ✏️ Atividade
---

- [Questão 1](questoes/)

## 📒 Resumo
---

Cookies é um fragmento de dados que o servidor envia na resposta da requisição para ser aramazenada no navegador do cliente.

Geralmente é usado para controle de sessão. é usado principalmente para 3 propósitos:

1. Gerenciamento de sessão: logins, carrinhos de compra, ou qualquer atividade q seva ser guarada pelo servidor.

2. Personalização: Preferências, temas e configurações.

3. Rastreamento: Registro e análise do comportamento do usuário.

Os cookies eram usado como meio de aramazenamento geral antes, mas hoje com as apis de aramazenamento no navegador perdeu esse propósito. O uso de cookies deve ser moderado, porque eles são enviados em todas as requisições.

os cookies são retornados pelo servidor no cabeçalho Set-Cookie: <cookie-name>=<cookie-value>.
Este cabeçalho informa para o cliente aramazenar o cookie e enviar nas proximas requisições.

Pode ter múltiplos cabeçalhos Set-Cookie

Os cookies são enviados para o servidor pelo cabeçalho Cookie, que também pode ter vários.

Os cookies normalmente são apagados quando fecha a sessão ou aba do navegador. Para prevenir esse comportamento é necessário criar cookies permanentes: Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;

A diretiva secure faz com que o cookie só seja enviado ao servidor se for por uma requisição htpps, enquanto que a diretiva HttpOnly faz com que o cookie não seja acessivel pela api javascript.

Se a diretiva Domain não é especificada os cookies são enviados para o domínio mas não são para os subdomínios.
Porém se for especificado além de ser enviado para o domínio também será para os subdomínios associados.

A diretiva path indica que o cookie só enviado para uma rota ou rotas aninhadas a essa.

Diretivas UE para cookies, porque o usuário deve dar permissão antes que qualquer informação seja recuperada ou aramazenada.

Para prevenir problema de segurança com cookies, é bom:

1. sempre deve haver uma confirmação antes de qualquer ação restrita;

cookies usados para ações confidenciais devem ter um tempo de vida restrito;


Cookies diretos foram gerados pelo mesmo dominio da pagina atual. Se não são gerados pelo mesmo domínio é chamado de cookies de terceiros. Que geralmente são usados para rastreamento e propagandas.
