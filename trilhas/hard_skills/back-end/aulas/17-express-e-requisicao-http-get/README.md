<h4 align="center"> 
♻️ Concluído 🚀
</h4>

## 🔑 Palavras-chave
---

![](https://img.shields.io/static/v1?label&message=lalala&color=red)

## 📖 Sobre a aula - 
---

-  **Data:** 17/12/2021
-  **Professor:** Kenji Taniguchi
-  **Descrição:** Nesta aula criamos um servidor HTTP utilizando nodeJS e a biblioteca express.

## 📚 Referências
---

- [https://expressjs.com/pt-br/starter/installing.html](https://expressjs.com/pt-br/starter/installing.html)
- [https://expressjs.com/pt-br/](https://expressjs.com/pt-br/)
- [https://masteringjs.io/tutorials/express/req](https://masteringjs.io/tutorials/express/req)
- [https://expressjs.com/pt-br/4x/api.html#req.query](https://expressjs.com/pt-br/4x/api.html#req.query)

## ✏️ Atividade
---

- [Questão 1](questoes/)

## 📒 Resumo
---

npm init
npm install express --save

app.get('*', function(req, res) {
  const name = req.query.name; // 'Jean-Luc Picard'
  const rank = req.query.rank; // 'Captain'
  res.json({ name, rank });
});

app.listen(3000);
