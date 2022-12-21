const tag = Array.from(document.querySelectorAll("div"));
//fun filter
function attri(arr, val) {
  return arr
    .filter((el) => el.hasAttribute(val))
    .map((a) => a.getAttribute(val));
}

const filterFun = attri(tag, "include");

for (let i = 0; i < filterFun.length; i++) {
  //console.log(filter[i]);
  inclui(filterFun[i], tag[i]);
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
