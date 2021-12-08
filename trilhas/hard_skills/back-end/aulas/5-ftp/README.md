<h4 align="center"> 
♻️ Concluído 🚀
</h4>

## 🔑 Palavras-chave
---

![](https://img.shields.io/static/v1?label&message=FTP&color=red)
![](https://img.shields.io/static/v1?label&message=lalala&color=blue)
![](https://img.shields.io/static/v1?label&message=Modo_Passivo&color=green)
![](https://img.shields.io/static/v1?label&message=Modo_Ativo&color=orange)
![](https://img.shields.io/static/v1?label&message=FTP/S&color=grey)
![](https://img.shields.io/static/v1?label&message=SFTP&color=pink)
![](https://img.shields.io/static/v1?label&message=Vantagens&color=red)

## 📖 Sobre a aula - FTP
---

-  **Data:** 24/11/2021
-  **Professor:** Kenji Taniguchi
-  **Descrição:** Nesta aula entendemos mais sobre o ftp na prática, nos conectamos ao servidor ftp do AlphaEdtech, e fizemos diversasa operações, tais como criar arquivos, fazer upload e downloads de arquivos e pastas.

## 📚 Referências
---

- [https://www.hostinger.com.br/tutoriais/ftp-o-que-e-como-funciona](https://www.hostinger.com.br/tutoriais/ftp-o-que-e-como-funciona)
- [https://www.jscape.com/blog/bid/80512/active-v-s-passive-ftp-simplified](https://www.jscape.com/blog/bid/80512/active-v-s-passive-ftp-simplified)
- [https://www.cosmos.esa.int/documents/772136/977578/psa_activeVsPassiveFtp.pdf](https://www.cosmos.esa.int/documents/772136/977578/psa_activeVsPassiveFtp.pdf)
- [https://titanftp.com/2021/02/23/whats-the-difference-ftp-sftp-and-ftp-s/](https://titanftp.com/2021/02/23/whats-the-difference-ftp-sftp-and-ftp-s/)
- [https://datatracker.ietf.org/doc/html/rfc959](https://datatracker.ietf.org/doc/html/rfc959)
- [https://www.windows-commandline.com/windows-ftp-command-line/](https://www.windows-commandline.com/windows-ftp-command-line/)
- [https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ftp](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/ftp)
- [https://www.howtoforge.com/tutorial/how-to-use-ftp-on-the-linux-shell/](https://www.howtoforge.com/tutorial/how-to-use-ftp-on-the-linux-shell/)

## ✏️ Atividade
---

- [Questão 1](questao-1/README.md)
- [Questão 2](questao-2/README.md)
- [Questão 3](questao-3/README.md)

## 📒 Resumo
---

O FTP é um protocolo de transfrência de arquivos forma segura. Basicamente existe um cliente que solicita arquivos, e um servidor que armazena esse arquvos, e pode servir ou receber arquivos de um ou mais clientes. Para tanto é necessário que o cliente se autentique no ftp, para tenha acesso.

### Funcionamento

Um sessão FTP, tipicamente possui 2 canais de trnasfência de dados. Um é o canal de comandos, responsável por enviar e recber comandos do ftp, e o outro canal é o de dados, respon´savel pelo tráfego dos dados. 

#### Modo Ativo

No modo ativo o servidor define ma porta do canal de dados como sendo a 20, e se conecta ao cliente, ouse ja, no modo ativo quem incia a conexão dos daos é o servidor. Esta abordagem atualmente não é muito adequada, pq o lado do cliente possui firewall restritivos contra conexoes externas, entáo é quase certeza que a conexão vai falhar.

#### Modo Passivo

No modo passivo, o servidor escolhe uma porta aleatória para o canal de dados, e notifica o cliente sobre essa porta pelo canal de comando. o Cliente então inicia a conexãotambém por uma porta aleatória. Neste caso a conexão possui mais sucesso, poeque o intuito do servidor é receber conexões, então o firewwal não será tão restritivo. o Lado ruim desse modo, é que o servidor vai ter múltplas portas abertas, basicamente 1 para cada conexão, então ele pode possui múltiplos pontos de vulnerabilidade.

#### FTP, SFTP e FTP/S

O FTP/S, é a mesma coisa do ftp, com diferença de que ele possui o certificado SSL. Permitindo uma maior segurnça dos dados.
Já o SFTP, é baseado em pacotes em vez de texto, e possui apenas um canal de comunicação, por onde trafegam os comandos e os dados. Esse é um dos fatores para ele ser mais rápido com relação ao FTP. Ele é inerentemente seguro pq é executado com SSL, não existe uma versão dele sem SSL, como é o caso do FTP/S. A conexão segura dele é executada na porta 990, diferente de uma conexão normal FTP que é executada na porta 21, ou seja, no FTP/S vc pode estabeler tanto conexões seguras como não seguras.

### Como usar o ftp

```
ftp domain.com, será solicitado o usuário e em seguida a senha

ls, lsita arquivos do diretório

cd diretório para entrar em um diretório, sendo ".." o diretório pai

lcd diretorio, define a pasta de dawnlods da máquina local

get file, faz o downlod de um arquivo

mget *.xls, downlods de múltplos arquivos

put file, upload de arquivo no diretório atual da máquina local

mput *.xls, upload de múltiplos arquivos

exit, encerrar a sessão ftp
```

### Vatangens de usar FTP

1. Grande volume de tranferencia de dados pela rede
2. Progesso sempre salvo
3. Simplicidade
4. Segurança, precisa de login e tem a integração com ssl, para criptografia

#### Alguns clientes FTP

1. FileZilla
2. SmartFTP
3. gFTP
