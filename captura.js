chrome.contextMenus.create({
  title: "Capturar thumbnail",
  contexts: ["all"],
  onclick: getVideoCod
});

function getVideoCod(info) {
  console.log("Link: " + info.linkUrl);
  var code
  const code_is_valid = validate_address(info.linkUrl)
  if (code_is_valid) {
    code = info.linkUrl.split("v=")[1].split("&")
    console.log("Código: " + code)
    getThumbnail(code[0])
  } else {
    alert("Não é um vídeo válido")
  }
}

function validate_address(url) {
  var validity
  if (url == undefined) {
    validity = false
  } else {
    const lista = url.split("/")
    if (lista[2] == "www.youtube.com") {
      validity = true
    } else {
      validity = false
    }
  }
  return validity
}

function getThumbnail(cod_video) {
  const url_thumb = "https://img.youtube.com/vi/" + cod_video + "/maxresdefault.jpg"
  window.open(url_thumb)
}