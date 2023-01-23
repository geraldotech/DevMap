export default function LoadVanilla() {
  const div = document.querySelectorAll("div");
  const DOMAttr = "include";

  let Path = "";
  for (let tem of div) {
    if (tem.hasAttribute(DOMAttr)) {
      Path = tem.getAttribute(DOMAttr);
      loadItem(Path, tem);
      //console.log(`Path`, Path, tem);
    }
  }

  function loadItem(path, val) {
    const smarthttp = new XMLHttpRequest();
    smarthttp.onload = function () {
      val.innerHTML = this.responseText;
    };
    smarthttp.open("GET", path);
    smarthttp.send();
  }
}
