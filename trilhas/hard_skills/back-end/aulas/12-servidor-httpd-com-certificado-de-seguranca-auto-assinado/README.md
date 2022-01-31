<h4 align="center"> 
♻️ Concluído 🚀
</h4>

## 🔑 Palavras-chave
---

![](https://img.shields.io/static/v1?label&message=lalala&color=red)

## 📖 Sobre a aula - 
---

-  **Data:** 06/12/2021
-  **Professor:** Kenji Taniguchi
-  **Descrição:** Nesta aula aprendemos sobre o SSL, e como configura-lo em nosso próprio servidior.

## 📚 Referências
---

- [https://www.openssl.org/](https://www.openssl.org/)
- [https://www.ssl.com/pt/faqs/o-que-%C3%A9-um-nome-de-dom%C3%ADnio-totalmente-qualificado/](https://www.ssl.com/pt/faqs/o-que-%C3%A9-um-nome-de-dom%C3%ADnio-totalmente-qualificado/)
- [https://www.ssl.com/pt/como/gerar-manualmente-uma-solicita%C3%A7%C3%A3o-de-assinatura-de-certificado-csr-usando-openssl/](https://www.ssl.com/pt/como/gerar-manualmente-uma-solicita%C3%A7%C3%A3o-de-assinatura-de-certificado-csr-usando-openssl/)
- [https://www.digicert.com/kb/ssl-support/openssl-quick-reference-guide.htm](https://www.digicert.com/kb/ssl-support/openssl-quick-reference-guide.htm)
- [https://httpd.apache.org/docs/2.4/ssl/ssl_howto.html](https://httpd.apache.org/docs/2.4/ssl/ssl_howto.html)

## ✏️ Atividade
---

- [Questão 1](questoes/)

## 📒 Resumo
---

openssl version -a

openssl genrsa -out yourdomain.key 2048

cat yourdomain.key

openssl rsa -text -in yourdomain.key -noout

openssl rsa -in yourdomain.key -pubout -out yourdomain_public.key

openssl req -new -key yourdomain.key -out yourdomain.csr

openssl req -new \
-newkey rsa:2048 -nodes -keyout yourdomain.key \
-out yourdomain.csr \
-subj "/C=US/ST=Utah/L=Lehi/O=Your Company, Inc./OU=IT/CN=yourdomain.com"

openssl req -text -in yourdomain.csr -noout -verify

openssl x509 -text -in yourdomain.crt -noout

/////////////////

openssl pkey -pubout -in .\private.key | openssl sha256

openssl req -pubkey -in .\request.csr -noout | openssl sha256

openssl x509 -pubkey -in .\certificate.crt -noout | openssl sha256

////////////////

sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/apache-selfsigned.key -out /etc/ssl/certs/apache-selfsigned.crt

//////////////////

LoadModule ssl_module modules/mod_ssl.so

Listen 443
<VirtualHost *:443>
    ServerName www.example.com
    SSLEngine on
    SSLCertificateFile "/path/to/www.example.com.cert"
    SSLCertificateKeyFile "/path/to/www.example.com.key"
</VirtualHost>

//////////////////

