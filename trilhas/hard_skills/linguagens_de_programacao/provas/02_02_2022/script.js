const teclas = [
  {
    som: 'DO',
    url: 'assets/audios/do.wav'
  },
  {
    som: 'RE',
    url: 'assets/audios/lala.wav'
  },
  {
    som: 'MI',
    url: 'assets/audios/lala.wav'
  },
  {
    som: 'FA',
    url: 'assets/audios/lala.wav'
  },
  {
    som: 'SOL',
    url: 'assets/audios/lala.wav'
  },
  {
    som: 'LA',
    url: 'assets/audios/lala.wav'
  },
  {
    som: 'SI',
    url: 'assets/audios/lala.wav'
  },
]

const audio = document.querySelector('audio');

function tocaAudio(index) {
  audio.src = teclas[index].url;
  audio.play();
}

function makeBtn(item, index) {
  return `
    <div class="container-btn">
      <button onclick="tocaAudio(${index})" id="${`btn-${item.som}`}">
        ${item.som}
      </button>
    </div>
  `
}

function renderBtns() {
  const container = document.getElementById('container');
  teclas.forEach((item, index) => {
    const btn = makeBtn(item, index);
    container.innerHTML += btn;
  })
}

renderBtns();
