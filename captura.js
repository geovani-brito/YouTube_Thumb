chrome.contextMenus.create({
    title: "Capturar thumbnail", 
    contexts:["image"], 
    onclick: getVideoCod
  });

function getVideoCod(info) {
    console.log("Link: " + info.linkUrl);
    const cod_video = info.linkUrl.split("=");
    console.log("Código: " + cod_video);
    if (cod_video[0] == "https://www.youtube.com/watch?v"){
      getThumbnail(cod_video[1])
    } else {
      alert("Vídeo inválido") 
    }
}

function getThumbnail(cod_video){
  const url_thumb = "https://img.youtube.com/vi/" + cod_video + "/maxresdefault.jpg"
  window.open(url_thumb)       
}