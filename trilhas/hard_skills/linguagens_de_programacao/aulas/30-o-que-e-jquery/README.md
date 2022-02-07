<h4 align="center"> 
♻️ Concluído 🚀
</h4>

## 🔑 Palavras-chave
---

![](https://img.shields.io/static/v1?label&message=lalala&color=red)

## 📖 Sobre a aula - 
---

-  **Data:** 
-  **Professor:** 
-  **Descrição:** 

## 📚 Referências
---

lalala

## ✏️ Atividade
---

- [Questão 1](questoes/)

## 📒 Resumo
---

### Jquery

#### Obter elemento

 $( "seletor css" )

#### Event Handling

  .on( "click", function( event ) {
    
  });

  .click(function(){
    // action goes here!!
  });



#### Ajax

  $.ajax({
    url: "",
    data: {
      
    },
    success: function( result ) {
      
    }
  });

#### evento ready

  $(document).ready(function(){

    // jQuery methods go here...

  });

  $(function(){

    // jQuery methods go here...

  });

#### Exibição

  $("p").hide();
  $("p").show();

#### Fade

  $(selector).fadeIn(speed,callback);
  $(selector).fadeOut(speed,callback);
  $(selector).fadeToggle(speed,callback);
  $(selector).fadeTo(speed,opacity,callback);

#### Slide

  $(selector).slideDown(speed,callback);
  $(selector).slideUp(speed,callback);
  $(selector).slideToggle(speed,callback);

#### Animação

  $(selector).animate({params},speed,callback);

  $("button").click(function(){
    $("div").animate({left: '250px'});
  }); 

  $(selector).stop();

#### Valores

  text()- Define ou retorna o conteúdo de texto dos elementos selecionados
  html()- Define ou retorna o conteúdo dos elementos selecionados (incluindo marcação HTML)
  val()- Define ou retorna o valor dos campos do formulário

  $("#btn1").click(function(){
    $("#test1").text("Hello world!");
  });
  $("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").click(function(){
    $("#test3").val("Dolly Duck");
  });

#### Obter atributos - attr()

  O método jQuery attr()é usado para obter valores de atributos.

  $("button").click(function(){
    alert($("#w3s").attr("href"));
  });

  $("button").click(function(){
    $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
  });

  $("button").click(function(){
    $("#w3s").attr({
      "href" : "https://www.w3schools.com/jquery/",
      "title" : "W3Schools jQuery Tutorial"
    });
  });

#### Adicionar elementos

  O método jQuery append()insere conteúdo NO FINAL dos elementos HTML selecionados.

  $("p").append("Some appended text.");

  O método jQuery prepend()insere conteúdo NO INÍCIO dos elementos HTML selecionados.

  $("p").prepend("Some prepended text.");

  O método jQuery after()insere conteúdo APÓS os elementos HTML selecionados.

  $("img").after("Some text after");

  O método jQuery before()insere conteúdo ANTES dos elementos HTML selecionados.

  $("img").before("Some text before");

  function afterText() {
    var txt1 = "<b>I </b>";                    // Create element with HTML 
    var txt2 = $("<i></i>").text("love ");     // Create with jQuery
    var txt3 = document.createElement("b");    // Create with DOM
    txt3.innerHTML = "jQuery!";
    $("img").after(txt1, txt2, txt3);          // Insert new elements after <img>
  }

#### Remove

  remove()- Remove o elemento selecionado (e seus elementos filho)
  empty()- Remove os elementos filho do elemento selecionado

  $("#div1").remove();
  $("#div1").empty();

  $("p").remove(".test");

#### Manipulação CSS

  addClass()- Adiciona uma ou mais classes aos elementos selecionados
  removeClass()- Remove uma ou mais classes dos elementos selecionados
  toggleClass()- Alterna entre adicionar/remover classes dos elementos selecionados
  css()- Define ou retorna o atributo de estilo

  $("button").click(function(){
    $("h1, h2, p").addClass("blue");
    $("div").addClass("important");
  });

  $("button").click(function(){
    $("h1, h2, p").removeClass("blue");
  });

  $("button").click(function(){
    $("h1, h2, p").toggleClass("blue");
  });

#### css

  $("p").css({"background-color": "yellow", "font-size": "200%"});

#### jQuery - Métodos AJAX get() e post()

  $("button").click(function(){
    $.get("demo_test.asp", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });

  $("button").click(function(){
    $.post("demo_test_post.asp",
    {
      name: "Donald Duck",
      city: "Duckburg"
    },
    function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });

