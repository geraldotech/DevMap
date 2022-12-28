const div = document.querySelectorAll("div");
const DOMAttr = "include";
let n = 0;
//var que armazena o path
let Path = "";
div.forEach((item, ind) => {
  const has = item.hasAttribute(DOMAttr);
  const path = item.getAttribute(DOMAttr);
  if (has) {
    loadSmartHTML(path, item);
  }
});

function loadSmartHTML(path, val) {
  const smarthttp = new XMLHttpRequest();
  smarthttp.onload = function () {
    val.innerHTML = this.responseText;
  };
  smarthttp.open("GET", path);
  smarthttp.send();
}
