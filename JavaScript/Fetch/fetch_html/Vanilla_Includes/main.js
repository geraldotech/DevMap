const tag = document.querySelectorAll("div");
const toArr = Array.from(tag);
for (let i = 0; i < toArr.length; i++) {
  let path = toArr[i].getAttribute("include");
  let fileHas = toArr[i].hasAttribute("include");
  console.log("file", path, fileHas);

  inclui(i, path, toArr[i]);
}

async function inclui(n, path, el) {
  try {
    const req = await fetch(path);
    console.log(req);
    if (req.status == 200) {
      const res = await req.text();
      el.innerHTML = res;
    }
  } catch (err) {
    console.log(err);
  }
}
