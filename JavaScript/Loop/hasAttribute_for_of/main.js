const p = document.querySelectorAll("p");
let attr = "include";
let path = "";

for (const item of p) {
  const tem = item.hasAttribute(attr);
  if (tem) {
    path = item.getAttribute(attr);
  }
  console.log("has", tem);
  console.log("path", path);
}
