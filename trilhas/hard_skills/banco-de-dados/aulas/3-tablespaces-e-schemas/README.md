<h4 align="center"> 
♻️ Concluído 🚀
</h4>

## 🔑 Palavras-chave
---

![](https://img.shields.io/static/v1?label&message=schemas&color=red)
![](https://img.shields.io/static/v1?label&message=tablespaces&color=red)

## 📖 Sobre a aula - 
---

-  **Data:** 02/04/2022
-  **Professor:** Fábio 
-  **Descrição:** Nesta aula aprendemos sobre os schemas e tablespaces no banco de dados postgresql.

## 📚 Referências
---

- [https://www.postgresql.org/docs/current/manage-ag-tablespaces.html](https://www.postgresql.org/docs/current/manage-ag-tablespaces.html)
- [https://www.postgresql.org/docs/current/ddl-schemas.html](https://www.postgresql.org/docs/current/ddl-schemas.html)

## ✏️ Atividade
---

- [Questão 1](questoes/)

## 📒 Resumo
---

Os spacestables permitem que os administradores de banco de dados definam locais no sistema de arquivos onde os aqruivos que representam os objetos dos bancod de dados, serão armazenados.

Isso permite personalizar o alayout do disco de instalaçao do postgres, o que permite coisas como colocar arquivos em uma outra partição para não interromper a execução da aplicação caso disco esteja cheio em uma partição, e permite aumentar o desenpenho colocando certos objetos em ssds ou hds dependendo do quanto aquele recurso é requerido.

Os esquemas são agrupamentos lógicos de tabelas dentro do banco de dados e eles permitem coisas como:

1. Organizar objetos em gruopos lógicos e torna-los mais gerenciaveis, caso das tabelas;

2. Podemos colocar aplicativos de terceiros em esquemas separados

3. Permitir que multiplos usuários acessem o mesmo banco de dados sem interferir uns coms os outros;

Caminho de pesquisa se refere aos caminhos que o postgres pesquisa para encontrar uma tabela que não foi especificada junto com o nome do seu esquema, ou seja totalmente qualificada.
