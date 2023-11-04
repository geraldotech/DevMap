const Svgcopy = document.querySelectorAll('.svgcopy')
const spancopiado = document.querySelectorAll('#copiado')

Svgcopy.forEach((val) => val.addEventListener('click', handlercopy))

function handlercopy(e) {
  const currTag = e.currentTarget.parentElement.querySelector('input').value
  const atual = e.currentTarget
  atual.classList.add('svgcopyActive')
  navigator.clipboard.writeText(currTag).then(() => {
    console.log(`copiado`)
    remoreClass(atual)
  })
}

function remoreClass(element) {
  setTimeout(() => {
    element.classList.remove('svgcopyActive')
  }, 2000)
}
