<h4 align="center"> 
♻️ Concluído 🚀
</h4>

## 🔑 Palavras-chave
---

![](https://img.shields.io/static/v1?label&message=Nginx&color=red)
![](https://img.shields.io/static/v1?label&message=Servidor_HTTP&color=blue)

## 📖 Sobre a aula - Instalando Nginx via source files e configurando HTTPS
---

-  **Data:** 14/12/2021
-  **Professor:** Kenji Taniguchi
-  **Descrição:** Nesta aula tivemos que instalar o servidor http Nginx e configurar o HTTPS.

## 📚 Referências
---

-[http://nginx.org/en/download.html](http://nginx.org/en/download.html)
-[https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/)
-[http://nginx.org/en/docs/http/configuring_https_servers.html](http://nginx.org/en/docs/http/configuring_https_servers.html)

## ✏️ Atividade
---

- [Questão 1](questoes/)

## 📒 Resumo

sudo apt install build-essential libpcre3 libpcre3-dev zlib1g-dev libssl-dev

sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt

wget http://nginx.org/download/nginx-1.20.2.tar.gz

tar -zxf nginx-1.20.2.tar.gz

cd nginx-1.20.2

./configure --prefix=/opt/app --sbin-path=/bin --with-http_ssl_module --with-http_stub_status_module

make

sudo make install

sudo nginx

configurar ssl

cd /opt/app/conf, abrir o arquivo de configuração

server {
  listen              80;
  listen              443 ssl;
  server_name         localhost;
  ssl_certificate     /etc/ssl/certs/nginx-selfsigned.crt;
  ssl_certificate_key /etc/ssl/private/nginx-selfsigned.key;
    ...
}

sudo nginx -s reload
