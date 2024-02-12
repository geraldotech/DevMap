const div = document.querySelectorAll('div')

const DOMAttr = 'include'

//comecar em 1 pq no app Spck Edtir tem uma div style nesse app
//outros começar no index 0
let n = 0
//var que armazena o path
let Path = ''
while (n < div.length) {
  const has = div[n].hasAttribute(DOMAttr)

  const path = div[n].getAttribute(DOMAttr)
  // console.log('path', path);
  //se tem chama a fun do Ajax
  if (has && path) {
    loadSmartHTML(path, div[n])
  }
  n++
}

function loadSmartHTML(path, val) {
  const smarthttp = new XMLHttpRequest()
  smarthttp.onload = function () {
    val.innerHTML = this.responseText
  }
  smarthttp.open('GET', path)
  smarthttp.send()
}
