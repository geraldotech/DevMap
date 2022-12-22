const tag = document.querySelectorAll("div");
const DOMatt = "include";
for (let i = 0; i < tag.length; i++) {
  let path = tag[i].getAttribute(DOMatt);
  let fileHas = tag[i].hasAttribute(DOMatt);
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
