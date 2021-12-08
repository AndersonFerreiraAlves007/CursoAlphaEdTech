<h4 align="center"> 
  ♻️ Concluído 🚀
</h4>

## ❓ Enunciado
---
Utilizar o modo de linha de comando (‘command line’) do seu sistema operacional para enviar arquivos para a pasta ‘www’ do servidor da Alpha EdTech e executar comandos básicos de criação de pasta, mudança de pasta, envio e recebimento de arquivos, mudança de modo de transmissão.

Responder este exercício colocando os comandos e sequências utilizadas.

Resposta:

## 📝 Resolução
---
Passos: 
1. ftp ubuntu.alphaedtech.org.br 
2. cd www 
3. mkdir andersonTeste 
4. exit 
4. ssh andersonalves@ubuntu.alphaedtech.org.br 
5. cd ftp 
6. cd www 
7. cd andersonTeste 
8. usei o vim e criei um arquivo chamado testeFTP.txt 
9. exit 
10. pwd para saber o diretório de trabalho atual 
11. mkdir downloads para criar um diretório de downloads, ficou assim /home/anderson/downloads 12. ftp ubuntu.alphaedtech.org.br 
13. cd www 
14. cd andersonTeste 
15. lcd /home/anderson/downloads, para definir o diretório de downloads 
16. get testeFTP.txt 
17. exit 
18. mkdir EnviarFTP para criar um diretório EnviarFTP, ficou assim /home/anderson/EnviarFTP 
19. usei o vim e criei um arquivo chamado testeEnvioFTP.txt 
20. cd EnviarFTP, e meu local de trabalho se tornou /home/anderson/EnviarFTP, para que no ftp ele pegue os arquivos desse diretório para o upload 
21. ftp ubuntu.alphaedtech.org.br 
22. cd ftp 
23. cd www 
24. put testeEnvioFTP.txt 
25. ls 
26. cat testeEnvioFTP.txt