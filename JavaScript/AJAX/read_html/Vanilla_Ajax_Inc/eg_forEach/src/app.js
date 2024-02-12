const div = document.querySelectorAll('div[include]')

let n = 0
//var que armazena o path
let Path = ''
div.forEach((item, ind) => {
  const path = item.getAttribute('include')
  if (path) {
    loadSmartHTML(path, item)
  }
})

function loadSmartHTML(path, val) {
  const smarthttp = new XMLHttpRequest()
  smarthttp.onload = function () {
    val.innerHTML = this.responseText
  }
  smarthttp.open('GET', path)
  smarthttp.send()
}
