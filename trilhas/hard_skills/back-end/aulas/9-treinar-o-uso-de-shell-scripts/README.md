# Referências

1. [https://www.devmedia.com.br/introducao-ao-shell-script-no-linux/25778](https://www.devmedia.com.br/introducao-ao-shell-script-no-linux/25778)
2. [https://www.hostinger.com.br/tutoriais/comandos-bash-linux](https://www.hostinger.com.br/tutoriais/comandos-bash-linux)
3. [https://linuxhint.com/30_bash_script_examples/](https://linuxhint.com/30_bash_script_examples/)
4. [https://linuxconfig.org/bash-scripting-tutorial](https://linuxconfig.org/bash-scripting-tutorial)

# Resumo

Scripts é basicamente um algoritmo projetado para executar uma tarefa, geralmente tarefas repetitivas, e que desependeriam muito tempo do programador.

Scripts são escritos com a extensão .sh, e começam basicamente definindo qual interpretador será usado.

#!/bin/bash: define o interpretador como sendo o bash
echo: 'message: imprime uma mensagem na tela
whoami: exibe o usuário logado no sistema
uptime: exibe a hora atual

comentário em uma linha começam com #

variaveis do shell não são tipadas, pode-se armazenar qualquer valor

forma de declaração de variaveis: variavel: valor

para printar o valor da variável:

echo "algum texto $variavel"

2 sintaxes para chamar comandos e atribuir a variaveis:

1. nome_variavel = $(comandos)
2. nome_variavel = `comandos`

para ler entradas do usuário use: read variavel

Comando condicional:

if [ CONDICAO ];
then
  AÇÕES
Fi

sempre dixar espaços ao redor da condição

alguns parametros que pode ir na condição

1. n string1, o comprimento da string 1 é diferente de 0
2. z string1, o comprimento da string é zero
3. string1 = string2, as strings são iguais
4. string1 != string2, as strings são diferentes
inteiro1 -eq inteiro2, os inteiros possuem os mesmos valores
5. -ne não possuem os mesmos valores
6. gt, o inteiro1 é maior que o inteiro2
7. ge, o inteiro1 é maior ou igual ao inteiro2
8. -lt, inteiro1 é menor que inteiro2
9. -le, inteiro1, é mor ou igual ao inteiro2
10. e nome_arquivo, verifica se arquivo existe
11. d nome_arquivo, verifica se é um diretório
12. f nome_arquivo, verifica se é um arquivo regular, imagem, texto, planilhas, etc

Comando Else:

if [ CONDICAO ];
   then
       AÇÕES_1
  else
      AÇÕES_2
fi

Comando Elif:

if [ CONDICAO_1 ];
 then
  AÇÕES_1
 elif [ CONDICAO_2 ];
 then
   AÇÕES_2
 elif [ CONDICAO_3 ];
 then
   AÇÕES_3
              .
              .
              .
              .
 elif [ CONDICAO_N ];
 then
  AÇÕES_N
Fi

Coamndo Case:

sintaxe maisn enxuta de múltiplas condicionais

case VARIAVEL in
  CASO_1)
    AÇÕES_1
  ;;
  CASO_2)
     AÇÕES_2
  ;;
  CASO_N)
    AÇÕES_N
;;
esac

Comando For

for VARIAVEL in VALOR_1, VALOR_2 … VALOR_N;
  do
       AÇÕES
  done

#!/bin/bash
 echo “Testando o loop for”
 for i in {10..0};
 do
   echo “$i”
 done

Comando While:

while [ CONDICAO ];
     do
        AÇÕES
  done

Funções:

nome_funcao()
  {
      AÇÕES
}

Argumentos recebidos pelo script:

$0: nome do script
$1...$n, parametroas passadps para a função na ordem,
$#, numero de parametros passados

cat /etc/shells: exibe a lista de shells disponíveis

which bash:^exibe o caminho do script bash

primeiro definir a função antes de invoca-la

funções bash só retornam um valor

echo -n "texto", adicionana o texto na mesma linha, não pula linha
