function containerFonte(tam) {
  let font = 15;

  function incrementar() {
    font += tam;
  }

  function decrementar() {
    font -= tam;
  }

  function getFont() {
    return font;
  }

  return {
    incrementar,
    decrementar,
    getFont,
  }
}

const objFont = containerFonte(1)

document.getElementById('btn-decrementar-fonte').addEventListener('click', () => {
  objFont.decrementar();
  document.getElementById('historinha').style.fontSize = `${objFont.getFont()}px`;
})

document.getElementById('btn-incrementar-fonte').addEventListener('click', () => {
  objFont.incrementar();
  document.getElementById('historinha').style.fontSize = `${objFont.getFont()}px`;
})
