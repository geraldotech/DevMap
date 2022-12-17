//ajax menu
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("menu").innerHTML = this.responseText;
  };
  xhttp.open("GET", "./src/menu.html");
  xhttp.send();
}
loadDoc();

function loadFooter() {
  const xfoo = new XMLHttpRequest();
  xfoo.onload = function () {
    document.getElementById("foot").innerHTML = this.responseText;
  };
  xfoo.open("GET", "./src/foo.html");
  xfoo.send();
}

loadFooter();
