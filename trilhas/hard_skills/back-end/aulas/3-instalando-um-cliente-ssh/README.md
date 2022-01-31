<h4 align="center"> 
♻️ Concluído 🚀
</h4>

## 🔑 Palavras-chave
---

![](https://img.shields.io/static/v1?label&message=SSH&color=red)
![](https://img.shields.io/static/v1?label&message=Cliente&color=blue)
![](https://img.shields.io/static/v1?label&message=Servidor&color=yellow)
![](https://img.shields.io/static/v1?label&message=Putty&color=grey)
![](https://img.shields.io/static/v1?label&message=Commands_File&color=pink)

## 📖 Sobre a aula - Instalando um cliente SSH
---

-  **Data:** 22/11/2021
-  **Professor:** Kenji Taniguchi
-  **Descrição:** Nesta aula instalamos um cliente ssh para o windows no caso o PuTTY, e utilizamos o cliente ssh padrão do ubunti que já vem instalado e nos conectamos ao servidor do AlphaEdtech.

## 📚 Referências
---

- [https://www.chiark.greenend.org.uk/~sgtatham/putty/](https://www.chiark.greenend.org.uk/~sgtatham/putty/)
- [https://phoenixnap.com/kb/ssh-to-connect-to-remote-server-linux-or-windows](https://phoenixnap.com/kb/ssh-to-connect-to-remote-server-linux-or-windows)
- [https://ubuntu.com/tutorials/command-line-for-beginners#1-overview](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview)
- [https://linuxcommand.org/index.php](https://linuxcommand.org/index.php)

## ✏️ Atividade
---

- [Questão 1](questao-1/README.md)

## 📒 Resumo
---

### Putty

É uma implementação gratuita de um cliente ssh para plataforma windows e unix, 

### Como se conectar utilizando SSH

SSH é um protocolo de conexão segura a um computador remoto ou servidor utilizando um interface baseada me texto

é necessários 2 componentes: Um cliente e um servidor. O servidor possui um processo daemon, em segundo plano para ouvir conexões TCP/IP, o cliente por sua vez possui em sua máquina um cliente ssh instalado, esse cliente se coneta ao servidor onde preenche suas credenciasi, e se forém corretas o mesmo terá acesso ao servidor remoto.

### Instalar cliente ssh

Caso o computador não possua um cliente ssh no ubuntu por exemplo, pode-se instala através do seguinte comando:

```
sudo apt-get install openssh-client
```

### Instalar servidor ssh

Em um servidor, por exemplo ubuntu server é necessário instalar uj servidor ssh para que o servidor seja acessivelremotamente, isso pode ser feito pelo comando abaixo:

```
sudo apt-get install openssh-server ii.
```

### Como conectar via SSH

```
ssh user@host [–pPORT]  
```

### Comandos Linux

#### Criação de pastas e arquivos

```
mkdir /tmp/tutorial, cria um diretorio especificando um caminho absoluto

mkdir dir1 dir2 dir3, cria um sequencia de diretorio no diretorio de trabalho

mkdir -p dir4/dir5/dir6, cria um hierarquia de diretórios

mkdir "folder 1", cria um diretório que possui espaços em seu nome
```

```
ls > output.txt, direciona a saída do comando para um arquivo

echo "This is a test", cria um arquivo
```

#### Movendo e manipulando arquivos

```
mv combined.txt dir1

mv dir1/* .

mv combined.txt test_* dir3 dir2

mv dir2/combined.txt dir4/dir5/dir6
```

```
rm dir4/dir5/dir6/combined.txt combined_backup.txt, remove arquivos locais

rm folder_*, remove 

rmdir folder_*

rm -r folder_6 remove arquivos recursivamente, ouse seja dentro de pastas e pastas dentro destas e assim sucessivamente

rmdir -p dir1/dir2/dir3
```

#### Superusuário

O superusuário ou ususário root, possui todas as permissões dentro do sistema, podendo fazer tudo inclusive criar novos usuário e atribuir permissões aos mesmos.

