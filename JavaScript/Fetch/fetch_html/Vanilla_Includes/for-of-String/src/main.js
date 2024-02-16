const div = document.querySelectorAll('div')
let [domAttr] = ['include']

for (Element of div) {
  const hasAttr = Element.hasAttribute(domAttr)
  const getPath = Element.getAttribute(domAttr)

  if (hasAttr && getPath) {
    console.log(`hasPath:`, getPath, `Element:`, Element)
    SmartIncludes(Element, getPath) //fun fica dentro da condicao if
  }
}

async function SmartIncludes(el, path) {
  try {
    const req = await fetch(path)
    //console.log(req);
    if (req.status == 200) {
      const res = await req.text()
      el.innerHTML = res
    }
  } catch (err) {
    console.error(err)
  }
}
