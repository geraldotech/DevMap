//ajax menu
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("menu").innerHTML = this.responseText;
  };
  xhttp.open("GET", "./menu.html");
  xhttp.send();
}
loadDoc();
