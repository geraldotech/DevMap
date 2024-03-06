function LoadVanilla() {
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
    smarthttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        smarthttp.onload = function () {
          val.innerHTML = this.responseText;
        };
      }
      if (this.status == 404) {
        val.innerHTML = `File "${path}" Not found!`;
      }
    };
    smarthttp.open("GET", path);
    smarthttp.send();
  }
}
LoadVanilla();
