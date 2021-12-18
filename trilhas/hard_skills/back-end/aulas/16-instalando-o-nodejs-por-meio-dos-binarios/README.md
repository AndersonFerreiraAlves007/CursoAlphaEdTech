<h4 align="center"> 
♻️ Concluído 🚀
</h4>

## 🔑 Palavras-chave
---

![](https://img.shields.io/static/v1?label&message=Servidor_HTTP&color=red)
![](https://img.shields.io/static/v1?label&message=NodeJS&color=blue)

## 📖 Sobre a aula - Instalando o Node.js por meio do binário
---

-  **Data:** 16/12/2021
-  **Professor:** Leonardo Pimentel
-  **Descrição:** Nesta aula configuramos um servidor web utilizando nodejs.

## 📚 Referências
---

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- [https://github.com/nodejs/help/wiki/Installation](https://github.com/nodejs/help/wiki/Installation)
- [https://nodejs.org/en/knowledge/HTTP/servers/how-to-serve-static-files/](https://nodejs.org/en/knowledge/HTTP/servers/how-to-serve-static-files/)
- [https://nodejs.dev/learn/introduction-to-nodejs](https://nodejs.dev/learn/introduction-to-nodejs)

## ✏️ Atividade
---

- [Questão 1](questoes/)

## 📒 Resumo
---

wget https://nodejs.org/dist/v16.13.1/node-v16.13.1-linux-x64.tar.xz

VERSION=v16.13.1
DISTRO=linux-x64

sudo mkdir -p /usr/local/lib/nodejs

sudo tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs 

export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH

. ~/.profile

node -v

npm version

npx -v

sudo ln -s /usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin/node /usr/bin/node

sudo ln -s /usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin/npm /usr/bin/npm

sudo ln -s /usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin/npx /usr/bin/npx

var fs = require('fs'),
http = require('http');

http.createServer(function (req, res) {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(8080);