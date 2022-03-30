async function getDados() {
  const id = 1;
  const personagemIdData = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const personagemId = await personagemIdData.json()
  console.log('personagemId: ')
  console.log(personagemId)

  const vetorDados = personagemId.name.split(' ')

  const personagemNameData = await fetch(`https://rickandmortyapi.com/api/character/?name=${vetorDados[0]}`)
  const personagemName = await personagemNameData.json()
  console.log('personagemName: ')
  console.log(personagemName.results[0].name)

  let text = ''

  for(let i = 0; i< personagemName.results.length; i+=1) {
    text += `<div>${personagemName.results[i].name}</div>`
  }

  $('#personagem').html(text)

}

$(document).ready(function(){
  getDados()
});
