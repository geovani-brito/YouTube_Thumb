getThumbnail("wer")



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
    var xhttp = require("xmlhttprequest").XMLHttpRequest;
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