<h4 align="center"> 
♻️ Concluído 🚀
</h4>

## 🔑 Palavras-chave
---

![](https://img.shields.io/static/v1?label&message=vsftpd&color=red)
![](https://img.shields.io/static/v1?label&message=FTP&color=blue)
![](https://img.shields.io/static/v1?label&message=Restrição_Acesso&color=grey)

## 📖 Sobre a aula - 
---

-  **Data:** 07/12/2021
-  **Professor:** Kenji Taniguchi
-  **Descrição:** Nesta Aula aprendemos sobre o servidor FTP, vsftpd, e instalamos e configuramos o mesmo.

## 📚 Referências
---

- [https://security.appspot.com/vsftpd.html](https://security.appspot.com/vsftpd.html)
- [https://www.digitalocean.com/community/tutorials/how-to-set-up-vsftpd-for-a-user-s-directory-on-ubuntu-18-04](https://www.digitalocean.com/community/tutorials/how-to-set-up-vsftpd-for-a-user-s-directory-on-ubuntu-18-04)

## ✏️ Atividade
---

- [Questão 1](questoes/)

## 📒 Resumo
---

```
sudo apt update
sudo apt install vsftpd, instala o vsftpd

sudo cp /etc/vsftpd.conf /etc/vsftpd.conf.orig, backup do arquivo de configuração
```

```
sudo ufw allow 20/tcp  - ftp
sudo ufw allow 21/tcp  - ftp
sudo ufw allow 990/tcp  - TLS OU SSL no FTP
sudo ufw allow 40000:50000/tcp, rage de portasno modo passivo
```

```
sudo adduser sammy  -  cria novo usuário
sudo mkdir /home/novo_usuario/ftp  -  pasta ftp para o susário
sudo chown nobody:nogroup /home/novo_usuario/ftp
sudo chmod a-w /home/novo_usuario/ftp  -  remove permissões de gravação para o usuário
sudo mkdir /home/novo_usuario/ftp/files  -  permite ao usuário o upload nessa pasta
sudo chown novo_usuario:novo_usuario /home/novo_usuario/ftp/files
```

configurações do arquivo /etc/vsftpd.conf:

```
...
anonymous_enable=NO  
local_enable=YES
write_enable=YES   #permite o upload de arquivos
chroot_local_user=YES  #evita que o usuário acesse quaisquer arquivos da árvore
user_sub_token=$USER #para inseriri o nome do usuário, para que a configuração se aplique ao usuário
local_root=/home/$USER/ftp
pasv_min_port=40000 #limita o range de portas no modo passivo
pasv_max_port=50000
userlist_enable=YES #os usuários só terão acesso se estiverem explicitamente na lista
userlist_file=/etc/vsftpd.userlist
userlist_deny=NO
...
```

```
echo "sammy" | sudo tee -a /etc/vsftpd.userlist, //aidicona usuário á lista
```