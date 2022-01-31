<h4 align="center"> 
♻️ Concluído 🚀
</h4>

## 🔑 Palavras-chave
---

![](https://img.shields.io/static/v1?label&message=Pacotesa&color=red)
![](https://img.shields.io/static/v1?label&message=apt-get&color=blue)
![](https://img.shields.io/static/v1?label&message=Apache2&color=grey)
![](https://img.shields.io/static/v1?label&message=UFW&color=pink)

## 📖 Sobre a aula - Gerenciamento de pacotes e instalação
---

-  **Data:** 01/12/2021
-  **Professor:** Kenji Taniguchi
-  **Descrição:** Nest aula começamos a lidar com gerenciamento de pacotes no linux utilizando o utilitário apt-get, vimos comando de instalar, atualizar e remover pacotes. A atividade passada envolviar instalar o servidor apache2 e configura-lo.

## 📚 Referências
---

- [https://guialinux.uniriotec.br/apt-get/](https://guialinux.uniriotec.br/apt-get/)
- [https://help.ubuntu.com/community/AptGet/Howto](https://help.ubuntu.com/community/AptGet/Howto)
- [https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-20-04](https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-20-04)

## ✏️ Atividade
---

- [Questão 1](questoes/)

## 📒 Resumo
---

Este resumo descreve de forma sucinta como instalar e configurar o apache2 no ubuntu.

### apt-get

apt-get é um utilitário para instalar, atualizar e remover pacotes do sistema

O apt-get não é o único, existem outros como o aptitude, dpkg, rpm, yum e snap, porém o apt-get vem por padrão nas distribuições linox e também é o mais utilizado

```
sudo apt-get install pacote, para instalar um pacote

sudo apt-get remove pacote, para remover um pacote

sudo apt-get update, atualiza a lista de versões dos pacotes disponíveis

sudo apt-get upgrade, atualiza os pacotes instalados 

sudo apt-get dist-upgrade, atualiza a distribuição inteira
```

a opção -u depois do apt-get, serve para listar os pacotes enquanto instala, desistala, atualiza, etc

apt-get funciona junto com o arquivo /etc/apt/sources.list, contém os repositórios, que também podemos chamar de "roteiros" de onde baixar e como instalar os programas ou pacotes

apt pode ser usado no lugat de apt-get, pois ele usa os recursos mais utilizados do apt-get

### UFW

Utilitário com comandos simples para controlar o firewall. Por padrão esse farewall possui restrições muito fortes de acesso do exterior, então para liberar o acesso da nossa máquina é preciso fazer isso manualmente para cada porta

```
sudo ufw allow 80/tcp ou sudo ufw allow http

sudo ufw allow 443/tcp ou sudo ufw allow https

sudo ufw allow 22/tcp ou sudo ufw allow ssh
```

Abaixo liberar todas as portas para um ip especifico, e uma unica porta para o mesmo ip

```
sudo ufw allow from 192.168.20.8

sudo ufw allow from 192.168.20.8 to any port 4002
```

O arquivo de configuração se encontra em /etc/default/ufw

instalação caso não tenha o ufw:

```
sudo apt install ufw

sudo ufw status verbose, verifica se foi instalado

sudo ufw enable, para ativar o firewall
```

### Instalar o apache 2

```
1. sudo apt update

2. sudo apt install apache2

3. sudo ufw app list, listade perfis

4. sudo ufw allow 'Apache', escolher o mais restritivo que permita o tráfego que queremos

5. sudo ufw status, lista de trafego http permitido, fazer sudo ufw enable antes, pois vem desabilitado por padrão em servidores

6. sudo systemctl status apache2, verifica se o serviço do apache2 está funcionando
```

### Gerenciar processo do Apache

```
sudo systemctl stop apache2, parar o servidor web

sudo systemctl start apache2, para iniciar o servidor web,

sudo systemctl restart apache2, para nparar e iniciar novamente

sudo systemctl reload apache2, quando fizer mudanças no arquivo de configuração

sudo systemctl disable apache2, para não iniciar junto com o sistema

sudo systemctl enable apache2, para iniciar junto com o sistema
```

### Configurando hosts virtuais

hosts virtuais para encapsular detalhes de configuração e permitir mais de um domínio em um mesmo servidor

```
1. sudo mkdir /var/www/nome_dominio

2. sudo chown -R $USER:$USER /var/www/nome_dominio, atribuir a propriedade do diretório

3. sudo chmod -R 755 /var/www/nome_dominio, permissões

4. criar aqruivo /etc/apache2/sites-available/nome_dominio.conf com o seguinte conteúdo

```
  <VirtualHost *:80>
    ServerAdmin webmaster@localhost
    ServerName nome_dominio
    ServerAlias www.nome_dominio
    DocumentRoot /var/www/nome_dominio
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
  </VirtualHost>
```

5. sudo a2ensite nome_dominio.conf, para habilitar esse arquivo

6. sudo a2dissite 000-default.conf, para desabilitar o site padrão

7. sudo apache2ctl configtest, testa os erros de configuração

8. sudo systemctl restart apache2, para aplicar as novas configurações
```

### Arquivos e diretórios importantes dos apache

1. /etc/apache2, diretório onde reside toda a configuração do apache2

2. /etc/apache2/apache2.conf, configurações globais

3. /etc/apache2/ports.conf, configura as portas http e htttps

4. /etc/apache2/sites-available, armazena as configurações dos host virtuais

5. /etc/apache2/sites-enabled, armazenas os links dos hosts virtuais habilitados

6. /var/log/apache2/access.log, registros de todas as solicitações

7. /var/log/apache2/error.log, registro de todos os erros
