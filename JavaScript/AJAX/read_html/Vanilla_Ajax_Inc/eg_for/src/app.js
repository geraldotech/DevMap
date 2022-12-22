const div = document.querySelectorAll("div");
const DOMAttr = "include";
console.log(div);
for (let i = 0; i < div.length; i++) {
  const HasAttr = div[i].hasAttribute(DOMAttr);
  const path = div[i].getAttribute(DOMAttr);
  console.log(HasAttr, path);
  //se tiver chamar o fun passando o path e a div element.
  if (HasAttr) {
    loadDoc(path, div[i]);
  }
}

function loadDoc(path, val) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    val.innerHTML = this.responseText;
  };
  xhttp.open("GET", path);
  xhttp.send();
}
