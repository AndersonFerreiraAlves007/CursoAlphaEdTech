<h4 align="center"> 
♻️ Concluído 🚀
</h4>

## 🔑 Palavras-chave
---

![](https://img.shields.io/static/v1?label&message=Servidor_HTTP&color=red)
![](https://img.shields.io/static/v1?label&message=HTTPD&color=blue)
![](https://img.shields.io/static/v1?label&message=Apache&color=green)
![](https://img.shields.io/static/v1?label&message=Instalação&color=grey)

## 📖 Sobre a aula - Servidor HTTPD
---

-  **Data:** 02/12/2021
-  **Professor:** Kenji Taniguchi
-  **Descrição:** Nesta aula tivemos que instalar e configurar o servidor httpd, apartir do fote, sem ser por pacotes.

## 📚 Referências
---

- [https://httpd.apache.org/](https://httpd.apache.org/)
- [https://httpd.apache.org/docs/2.4/install.html](https://httpd.apache.org/docs/2.4/install.html)
- [https://stackoverflow.com/questions/54412872/apache-httpd-build-from-source-fatal-error-expat-h-no-such-file-or-directory](https://stackoverflow.com/questions/54412872/apache-httpd-build-from-source-fatal-error-expat-h-no-such-file-or-directory)
- [https://stackoverflow.com/questions/33278928/how-to-overcome-aclocal-1-15-is-missing-on-your-system-warning/33279062](https://stackoverflow.com/questions/33278928/how-to-overcome-aclocal-1-15-is-missing-on-your-system-warning/33279062)
- [https://www.cyberciti.biz/faq/debian-ubuntu-linux-install-libpcre3-dev/](https://www.cyberciti.biz/faq/debian-ubuntu-linux-install-libpcre3-dev/)

## ✏️ Atividade
---

- [Questão 1](questoes/)

## 📒 Resumo
---

Aqui está um resumo do processo de instalação do httpd:

1. sudo apt install build-essential
3. sudo apt-get install automake
4. sudo wget https://dlcdn.apache.org//httpd/httpd-2.4.51.tar.gz
5. sudo wget https://dlcdn.apache.org//apr/apr-1.7.0.tar.gz
6. sudo wget https://dlcdn.apache.org//apr/apr-util-1.6.1.tar.gz
7. sudo wget https://sourceforge.net/projects/pcre/files/pcre/8.45/pcre-8.45.tar.gz
8. sudo wget https://github.com/libexpat/libexpat/releases/download/R_2_4_1/expat-2.4.1.tar.gz
9. tar -xzvf file.tar.gz, para extrair
10. ./configure --prefix=/expat
10. ./configure --prefix=/pcre
11. make
12. make install
13. ./configure --with-included-apr --prefix=/path-to-apache-installation --with-expat=/expat --with-pcre=/pcre
14. make
15. make install
16. vim PREFIX/conf/httpd.conf, modar a propriedade serverName para localhost:8080. e port para 8080
17. PREFIX/bin/apachectl -k start
18. PREFIX/bin/apachectl -k stop
19. PREFIX/htdocs. contém os arquivos que serão servidos