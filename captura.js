chrome.contextMenus.create({
  title: "Capturar thumbnail",
  contexts: ["image", "video"],
  onclick: getVideoCod
});

function getVideoCod(info) {
  let code = [];
  const address_is_valid = validate_address(info.linkUrl);
  if (address_is_valid) {
    code = info.linkUrl.split("v=")[1].split("&")
    getThumbnail(code[0])
  } else {
    alert("Não é um vídeo válido.")
  }
}

function validate_address(url) {
  let validity = false;
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

async function getThumbnail(cod_video) {
  url_image = "https://img.youtube.com/vi/" + cod_video
  mq = url_image + "/mqdefault.jpg"
  hq = url_image + "/hqdefault.jpg"
  sd = url_image + "/sddefault.jpg"
  max = url_image + "/maxresdefault.jpg"
  const url_thumbs = [max, sd, hq, mq];
  let i = 0;
  let exist_thumb = false;
  let status = 0;
  while (!exist_thumb && i < 4) {
    status = await search(url_thumbs[i]);

    if (status == 200) {
      exist_thumb = true;
      window.open(url_thumbs[i])
    }
    i++;
  }
}

function search(url) {
  let status_cod = fetch(url)
    .then(function (response) {
      return response.status
    });
  return status_cod;
}