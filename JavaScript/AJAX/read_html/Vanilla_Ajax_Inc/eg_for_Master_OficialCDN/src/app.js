/* 
- DEVELOPER BY GERALDO FILHO - 2023
- CATCH ALL DIVS WITH 'include' attribute and make a Ajax
*/

const DOMAttr = 'include'
const div = document.querySelectorAll(`div[${DOMAttr}]`)

for (let i = 0; i < div.length; i++) {
  const HasAttr = div[i].hasAttribute(DOMAttr)
  const path = div[i].attributes.include.value
  console.log(HasAttr, path)

  // if hasAttr and path call function
  if (HasAttr && path) {
    SmartIncludes(path, div[i])
  }
}

function SmartIncludes(path, val) {
  const xhttp = new XMLHttpRequest()
  try {
    xhttp.onload = function () {
      val.innerHTML = this.responseText
    }
    xhttp.open('GET', path)
    xhttp.onreadystatechange = function () {
      console.log(`read`, this.readyState)
      console.log(`status`, this.status)

      if (this.readyState == 4 && this.status == 200) {
        xhttp.onload = function () {
          val.innerHTML = this.responseText
        }
      } else {
        xhttp.onload = function () {
          val.innerHTML = '404 file in: ' + path
        }
      }
    }
    xhttp.send()
  } catch (e) {
    console.error(e)
  }
}
