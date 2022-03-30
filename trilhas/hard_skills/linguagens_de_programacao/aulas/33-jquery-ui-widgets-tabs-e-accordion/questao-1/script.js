const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady(id, videoId) {
  player = new YT.Player(id, {
    width: '100%',
    videoId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  //event.target.playVideo();

  const indexTabe = $("#tabs").tabs('option', 'active')

  const metadatas = player.getVideoData()
  console.log(player.getVideoData())

  const seconds = player.getDuration()

  const tempo = `${parseInt(seconds/60, 10)}:${seconds%60}`

  updateAccordiom(indexTabe, metadatas.title, tempo, metadatas.video_id)
}

const getMetadata = async (video_id) => {
  const videoUrl = `https://www.youtube.com/watch?v=${video_id}`;
  const requestUrl = `http://youtube.com/oembed?url=${videoUrl}&format=json`;
  const result = await fetch(requestUrl);

  return await result.json()
};

let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  //player.stopVideo();
}

async function updateAccordiom(indexTable, value1, value2, video_id) {
  const metadatas = await getMetadata(video_id)
  $(`#tabs-${indexTable + 1}-accordion-1`).html(value1)
  $(`#tabs-${indexTable + 1}-accordion-2`).html(value2)
  $(`#tabs-${indexTable + 1}-accordion-3`).html(metadatas.author_name)
  $(`#tabs-${indexTable + 1}-accordion-4`).html(`<img src="${metadatas.thumbnail_url}" alt="" width="100%">`)
}

$(document).ready(function() {
  
  $("#tabs").tabs({
    classes: {
      "ui-tabs-tab": "bg",
      "ui-tabs-panel": "teste"
    }
  });

  $(".accordion").accordion({heightStyle: 'content', classes: {
    "ui-accordion-header": "accordion",
   /*  "ui-accordion-header-collapsed": "accordion", */
    "ui-accordion-content": "accordion",
  }});

  $("#tabs").on("tabsactivate", function (event, ui) {

    const videoAnteriorID = ui.oldPanel.attr("id");
    const videoID = ui.newPanel.attr("id");
    let urlVideo = ""
    let idContainer = ""
    let idContainerAnterior = ""

    switch (videoAnteriorID) {
      case "tabs-1":
        idContainerAnterior = "container-video-1"
        break;
      case "tabs-2":
        idContainerAnterior = "container-video-2"
        break;
      case "tabs-3":
        idContainerAnterior = "container-video-3"
        break;
      case "tabs-4":
        idContainerAnterior = "container-video-4"
        break;
      case "tabs-5":
        idContainerAnterior = "container-video-5"
        break;
    }

    switch (videoID) {
      case "tabs-1":
        urlVideo = "_3LjN6Xm3cs";
        idContainer = "container-video-1"
        break;
      case "tabs-2":
        urlVideo = "tbqZk_Ru7HI";
        idContainer = "container-video-2"
        break;
      case "tabs-3":
        urlVideo = "6tHE_XebirI";
        idContainer = "container-video-3"
        break;
      case "tabs-4":
        urlVideo = "GJtb9xiC0Pk";
        idContainer = "container-video-4"
        break;
      case "tabs-5":
        urlVideo = "SSViT336Vq4";
        idContainer = "container-video-5"
        break;
    }

    $("iframe" ).remove();

    ui.oldPanel.find('.container-Video').prepend(`<div id="${idContainerAnterior}"></div>`)

    onYouTubeIframeAPIReady(idContainer, urlVideo)

  })

  setTimeout(() => onYouTubeIframeAPIReady('container-video-1', '_3LjN6Xm3cs'), 1000)
  
})


