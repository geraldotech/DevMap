const inputVal = document.querySelectorAll('input[name="codesnipped"]').value
const Svgcopy = document.querySelectorAll('.svgcopy')
const spancopiado = document.querySelectorAll('#copiado')

Svgcopy.forEach((val) => val.addEventListener('click', handlercopy))

function handlercopy(e) {
  const currTag = e.currentTarget.parentElement.querySelector('input').value
  const atual = e.currentTarget
  atual.classList.add('svgcopyActive')
  navigator.clipboard.writeText(currTag).then(() => {
    console.log(`copiado`)
  })
}
