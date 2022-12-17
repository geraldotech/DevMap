//soluction fetch menu
function fetchHtml() {
  fetch("./menu.html")
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      document.getElementById("menu").innerHTML = html;
    });
}
fetchHtml();
