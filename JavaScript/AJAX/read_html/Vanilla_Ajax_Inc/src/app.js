const div = document.querySelectorAll("div");
console.log(div);
for (let i = 0; i < div.length; i++) {
  const attr = div[i].hasAttribute("include");
  const path = div[i].getAttribute("include");
  console.log(attr);
  //se tiver chamar o fun passando o path e a div element.
  if (attr) {
    loadDoc(path, div[i]);
  }
}

//ajax menu
function loadDoc(path, val) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    val.innerHTML = this.responseText;
  };
  xhttp.open("GET", path);
  xhttp.send();
}
