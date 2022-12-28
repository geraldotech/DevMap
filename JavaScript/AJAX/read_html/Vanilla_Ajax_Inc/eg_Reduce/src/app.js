const div = document.querySelectorAll("div");
const DOMAttr = "include";

Array.from(div).reduce((accumu, curValue) => {
  const has = curValue.hasAttribute(DOMAttr);
  const path = curValue.getAttribute(DOMAttr);
  console.log(has, curValue);
  if (has) {
    loadSmartHTML(path, curValue);
  }
}, 0);

function loadSmartHTML(path, val) {
  const smarthttp = new XMLHttpRequest();
  smarthttp.onload = function () {
    val.innerHTML = this.responseText;
  };
  smarthttp.open("GET", path);
  smarthttp.send();
}
