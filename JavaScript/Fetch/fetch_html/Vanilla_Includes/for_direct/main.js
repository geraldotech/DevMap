const tag = document.querySelectorAll("div");
for (let i = 0; i < tag.length; i++) {
  let path = tag[i].getAttribute("include");
  let fileHas = tag[i].hasAttribute("include");
  //linha para log de arquivos
  //console.log("attrValue", path, fileHas);
  if (fileHas) {
    inclui(path, tag[i]);
  }
}

async function inclui(path, el) {
  try {
    const req = await fetch(path);
    //console.log(req);
    if (req.status == 200) {
      const res = await req.text();
      el.innerHTML = res;
    }
  } catch (err) {
    console.log(err);
  }
}
