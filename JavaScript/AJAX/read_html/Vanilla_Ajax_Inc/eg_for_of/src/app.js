const div = document.querySelectorAll('div[include]')

let Path = ''
for (let tem of div) {
  Path = tem.getAttribute('include')
  if (Path) {
    loadItem(Path, tem)
  }
}

function loadItem(path, val) {
  const smarthttp = new XMLHttpRequest()
  smarthttp.onload = function () {
    val.innerHTML = this.responseText
  }
  smarthttp.open('GET', path)
  smarthttp.send()
}
