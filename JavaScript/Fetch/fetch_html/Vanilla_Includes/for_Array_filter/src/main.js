const tag = Array.from(document.querySelectorAll("div"));

for (let i = 0; i < tag.length; i++) {
  //console.log(filter[i]);
  let getAttr = tag[i].getAttribute('include')
  let hasAttr = tag[i].hasAttribute('include')
  if(hasAttr && getAttr){
    SmartIncludes(hasAttr[i], tag[i]);
  }
}

async function SmartIncludes(path, el) {
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
