<h4 align="center"> 
♻️ Concluído 🚀
</h4>

## 🔑 Palavras-chave
---

![](https://img.shields.io/static/v1?label&message=Piping&color=red)
![](https://img.shields.io/static/v1?label&message=Redirecionamentos&color=blue)
![](https://img.shields.io/static/v1?label&message=Compactação&color=green)
![](https://img.shields.io/static/v1?label&message=Descompactação&color=grey)

## 📖 Sobre a aula - Piping, File Redirection e Compactação/Descompactação
---

-  **Data:** 26/11/2021
-  **Professor:** Kenji Taniguchi
-  **Descrição:** Nesta aula aprendemos sobre o piping, para encadear as sída de comandos para outros comandos. Além disso aprendemos file redirection, para redirecionar a saída de comandos para arquivos, e de arquivos como entrada para comandos. Por últimos foi nos ensinado a fazer compactação e descompactação de arquivos e diretórios utilizando ferramentas da linha de comando.

## 📚 Referências
---

- [https://www.geeksforgeeks.org/piping-in-unix-or-linux/](https://www.geeksforgeeks.org/piping-in-unix-or-linux/)
- [https://www.redhat.com/sysadmin/pipes-command-line-linux](https://www.redhat.com/sysadmin/pipes-command-line-linux)
- [https://opensource.com/article/18/8/introduction-pipes-linux](https://opensource.com/article/18/8/introduction-pipes-linux)
- [https://www.gnu.org/software/bash/manual/html_node/Redirections.html](https://www.gnu.org/software/bash/manual/html_node/Redirections.html)
- [https://linuxcommand.org/lc3_lts0070.php](https://linuxcommand.org/lc3_lts0070.php)
- [https://www.howtogeek.com/248780/how-to-compress-and-extract-files-using-the-tar-command-on-linux/](https://www.howtogeek.com/248780/how-to-compress-and-extract-files-using-the-tar-command-on-linux/)

## ✏️ Atividade
---

- [Questão 1](questao-1/README.md)
- [Questão 2](questao-2/README.md)
- [Questão 3](questao-3/README.md)
- [Questão 4](questao-4/README.md)

## 📒 Resumo
---

### Piping

É uma forma de redirecionamento da saida padrão, em que a saída gerada por um comando ou programa é redirecionando como entrada para outro comando ou programa e assim sucessivamente. O pipe é unidireciona, ou seja, so se propaga da esquerda pra direita através do pipeline. O pipe é um, dos operadores do shell mais poderosos. Sendo um dos principais objetivos do pipe a filtragem.

```
command_1 | command_2 | command_3 | .... | command_N
```

### Redirecionamentos

O piping é um tipo de redirecionamento utilizando comandos. Existe também o redirecionamento de entrade e de saída. No redirecionamento de entrada, a saida padrão é redirecionada para um arquivo no seguinte formato

```
command > file, sobrescreve o arquivo
command >> file, concatena no arquivo
```

Já o redirecionamento da entrada ocorre quano em vez de passar parametros pros comandos por meio do teclado, passamos por meio de arquivo na seguinte sintaxe:

```
command < file
```

### Compactação e descompactação

#### Compactar

No linux podemos compactar e descompactar arquivos utilizando o utilitário "tar". Ele cria arquivos nos formatos .tar.gz ou .tgz também chamados de tarball. Ele pode criar um arquivo .tar e depois compactar utilizando compactação gzip ou bzip2.

```
tar -czvf nome-arquivo-compactado.tar.gz diretorio
```

Onde czvf significa o seguinte:

1. C - criar um arquivo
2. compactar o arquivo uitlizando o gzip
3. exibir o progresso da compactação no terminal
4. permitir especificar o nome do aqruivo compactado

Para excluir um diretório interno ou arquivo da compactação e só usar a seguinte sintaxe com a flag exclude:

```
tar -czvf archive.tar.gz diretorio --exclude=diretorio-interno
```

Para usar bzip2 é so colocar j no lugar de z, e colocar a extersão do arquivo como .tar.bz2 como exemplificado abaixo:

```
tar -cjvf archive.tar.bz2 stuff
```

#### Descompactar

Para descompactar para o diretório atual é so usar o seguinte comando:

```
tar -xzvf archive.tar.gz
```

Já para descompactar para um diretório diferente usansse o seguinte:

```
tar -xzvf archive.tar.gz -C diretorio
```