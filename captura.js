chrome.contextMenus.create({
  title: "Capturar thumbnail",
  contexts: ["all"],
  onclick: getVideoCod
});

function getVideoCod(info) {
  console.log("Link: " + info.linkUrl);
  var code
  const address_is_valid = validate_address(info.linkUrl)
  if (address_is_valid) {
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
  url_image = "https://img.youtube.com/vi/" + cod_video
  de = url_image + "/mqdefault.jpg"
  mq = url_image + "/mqdefault.jpg"
  hq = url_image + "/hqdefault.jpg"
  sd = url_image + "/sddefault.jpg"
  max= url_image + "/maxresdefault.jpg"
  const url_thumbs = [max, sd, hq, mq, de]
  var existe_thumb
  for (var i = 0; i < url_thumbs.length; i++){
    existe_thumb = loadDoc(url_thumbs[i])
    console.log("Thumb: " + url_thumbs[i])
    console.log("Thumb: " + i + " - " + existe_thumb)
    if (existe_thumb) {
      window.open(url_thumbs[i])
    }
  }
}

function loadDoc(url) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      abre(true, this)
    } else {
      abre(false, this)
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function abre(result, xhttp){
  var url = xhttp.onreadystatechange.caller.arguments[0]
  if (result){
    window.open(url)
  }
  var vet = [url, result]
}