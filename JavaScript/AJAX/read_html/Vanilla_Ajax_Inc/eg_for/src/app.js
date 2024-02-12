const div = document.querySelectorAll('div[include]')

for (let i = 0; i < div.length; i++) {
  const path = div[i].getAttribute('include')
  // se tiver chamar o fun passando o path e a div element.
  if (path) {
    loadDoc(path, div[i])
  }
}

function loadDoc(path, val) {
  const xhttp = new XMLHttpRequest()
  xhttp.onload = function () {
    val.innerHTML = this.responseText
  }
  xhttp.open('GET', path)
  xhttp.send()
}
