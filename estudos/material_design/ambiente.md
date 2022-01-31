# superficies:

O Material Design possui características 3D utilizando superfícies, sombras e profundidades.

## Mundo físico

O material design tenta imitar o mundo físico, em como as coisas podem se empilhar em cima das outras e como relfetem a luz, mas sem se sobrepor.

## Propriedades

### Dimensões

Os elementos de UI podem variar as dimensões x e y, porem a espessura sempre será de 1dp, para consistência.

### Sombras

superficies em diferentes elevações projetam sombras

### Resolução

Resolução infinita

### Conteudo

Pode ser exibido em qualquer forma ou cor, porém não adiciona espessura.

O comportamento do conteúdo pode ser dependente ou independente da superfície

### Propriedades físicas

O material é sólido, os eventos de entrada não passam pelo papél

Vários elementos do material não podem ocupar o mesmo ponto do espaço simultanemanet

Um material não pode passar por outro material

Material não se comporta como um gás

O material não é fluido, porém o seu conteudo pode sers

### Material transformador

O material pode mudar de forma

Pode alterar a opacidade

Pode mudar as dimensoes em x e y

Se dobra na profundidade da UI

sUPERFICIES PODEM SE UNIR E FORMAR OUTRA

Pode se dividir e se tornar inteiro novamente

### Movimento

Pode ser gerado expontanemanet ou descartado em qualquer parte

Pode se mover em qualquer eixo

Superficies diferentes podem coordenar seus movimentos

O movimento em z geralmente é resultado da interação do usuario

## Atributos

### Superficie material básico

branco opaco

projeta sombra

espessura 1dp

todas os outras materiais são variações deste

### Comportamento

superficies rigidas: permanecem do mesmo tamanho em todas as interações

superficies extensiveis: podem crescer ate um limite em uma ou mais direções, e depois se comportar como superficies rigidas

superficies que podem ser giradas: mesmo tamanho nas interações, porem o contedudo muda conforme a rolagem no interior do material, apos atingiro limite da rolagem, se comporta como superficie rigida

### superficies compostas

uma superficies pode ser dividida em areas que possuem superficies comportamentos

### superficies elasticas

podem ser esticadas anmtes de alcançar o limite, podem crescer horizontalmente e/ou verticalmente

normalemnte a interação do usuário só esticará em uma única direção

### posicionamento de superficies e movimento (x/y)

podem permanecer fixas ou se mover ao longo dos eixos

podem ser mover em qualquer direção, embora possa ser confinado a um eixo de cada vez

podem se mover de forma independente, ou interferir no movimento de outras superficies

### Opacidade

podem ser transparaentes, semitransparentes ou opacas

superficies transparentes podem exigir tratamento para tornar os textos legiveis

evitar superficies transparentes, pois dificulta saber a qual suoperficie o conteudo pertence

### scrim

são tratamento para tornar uma superficie menos proeminente, para focar a atenção em outra parte

pode ser aplicado

- escurecendo ou clareando a superficie

- reduzindo a opacidade da superficie e seu conteudo


# Elevação

é a distancia relativa entre 2 superficies no eixo z

é representada usando sombras

distancia medida em dps

superficies na mesma elevação, mostram sobras diferentes dependendo da superficie que está atras, isso pq essa superficie atras pode estar em elevaçãoes diferentes

## sistema de elevação

as superficies em diferentes elevações fazerm:

- permite que superficies se movam atras ou na frente de outras
- refletir ações espaciais, como um botão de ação flutiante que indica que é separado da lista
- concentrar atenção no elemento de elevação mais alta


elevação pode ser representada tb por preenchimentos diferentes e por opacidade, não apenas por sombras

## elevação de repouso

valor de elevação inicial que cada componente contem, apartir dai as elevações dos componentes podem mudar em resposta a interação do usuário ou do sistema

por exemplo todos os cartões possuem a mesma elevação de repouso

as elevações de repouso variam conforme o plataforma, aplicativo. 

as elevações de repouso no celular fornecem pistas para indicar que um elemento é interativo, utilizando sombras

ja no desktop, as elevações de repouso são mais rasas, pq existem outras dicas como o foco, para indicar que um elemento é interaivo

## mudança de elevação

em resposta aos evento do usuario ou do sistema ocorrem os deslocamentos de elevação dinamica, predefindos para tipo de componente

depois do evento, volta rapidamente para sua elevação de repouso

## Interferencia de elevação

quando um elemento se move da posição de repouso para uma posição dinamica, não pode colidir com outros elementos

componentes podem se mover para evitar a colisaão de outro que esta se elevando, no caso de um card, um fab pode desaparecer por exemplo

## representando a elevação

para representar a elevação é necessario o seguinte:

- bordas de superficie, constratando com a superficie abaixo
- sobreponha-se com outras superficies em repouso ou movimento
- distancia de outras superficies

### arestas de superficies

formas de indicar arestas

- sombras
- cores diferentes
- opacidades diferentes

as bordas devem criar constraste suficiente

### sobreposição de superficie

sombras mostram as bordas da superficie, a sobreposição e o grau de elevação

cores e opacidade mostram as bordas da superficie, a sobreposição, mas não o grau de elevação


### Distancia

o grau da diferença de elevação pode ser expresso por meio de sombras ou fundos esculpidos

fundos esculpidos

- indica elevaççã mais alta, do outro elemento
- expressa grande quantidade de elevação, porem não especificadas

sombras

pequena e nitida, esta proxima da superficie

grande mais suave ou distoricda, mais longe da superficie

não usar sombra apenas para estilização


## Movimento e elevação

O movimento pode enfativar a elevação atraves das seguintes tecnicas

- mudança nas sombras
- exibindo sobreposição
- empurrando
- dimensionando
- paralaxe

### Mudança nas sombras

mudanças no tamanho da sombra e suavidade

### Exibindo sobreposição

uma superficie pode se sobrepor a outra durante a animação para mostar qual está na frente

### Empurrando

superficies que compartilham a mesma elevação podem mover outras durante a nimação

### Dimensionando

aumentar ou diminuir o tamanho de uma superficie pode enfatizar a diferença de elevação

### paralaxe

multiplas superficies com elevações diferentes que se movem a velocidades diferentes, sensação de profuncidade foco no primeiro plano

### as tecnicas de movimentação podem ser combinadas

## Hierarquia da elevação

### conteudo em diferentes elevações

superficies na frente de outras normalmente

- mostarm algo mais importante
- controlam o conteudo atras, barra de contexto
- concentram a atenção

### conteudo em superficies coplanares

posicionar conteudo na mesma elevação, indica que possuem a mesma importancia

em superficies coplanares que não possuem sombras, a hierarquia pode ser expressa por meio do conteudo ou ajustando o layout horizontamente ou verticalmente

# Luz e sombras

as superficies do material projetam sombras quando obstruem as fontes de luz

## Leve

### Sombras e luz

no material design, luzes virtuais iluminam o ambiente

As luzes principais criam sombras direcionais e nitidas, chamadas de sombras principais

A luz ambiente cria sombra em todas as direções difusas e suaves, chamadas de sombras ambientes

### fontes de luz

### sombra e movimento 

as sombras fornecem dicas sobre a direção do movimento de uma superficie

se a superficie muda de forma ou escala, porem a elevação não muda, a sombra não deve ser alterada

