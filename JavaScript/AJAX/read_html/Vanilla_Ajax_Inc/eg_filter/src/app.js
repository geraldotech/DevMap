const div = document.querySelectorAll("div");
const DOMAttr = "include";

const arr = [...div].filter((item) => item.hasAttribute(DOMAttr));
console.log(arr);
if (arr) {
  for (item of arr) {
    const path = item.getAttribute(DOMAttr);
    console.log(item, path);
    loadSmartHTML(path, item);
  }
}

function loadSmartHTML(path, val) {
  const smarthttp = new XMLHttpRequest();
  smarthttp.onload = function () {
    val.innerHTML = this.responseText;
  };
  smarthttp.open("GET", path);
  smarthttp.send();
}
