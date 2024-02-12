const tag = Array.from(document.querySelectorAll('div[include]'))

// fun filter
/* o uso de filter agora se faz dispensavel tendo em vista que o querySelectorAll já seleciona as div com o attribute especificado 

function attri(arr, val) {
  return arr.filter((el) => el.hasAttribute(val)).map((a) => a.getAttribute(val))
}
*/

for (let i = 0; i < tag.length; i++) {
  includes(tag[i].getAttribute('include'), tag[i])
}

// manual call
//includes('./partials/menu.html', tag[0])

async function includes(path, el) {
  try {
    const req = await fetch(path)
    if (req.status == 200) {
      const res = await req.text()
      el.innerHTML = res
    }
  } catch (err) {
    console.log(err)
  }
}
