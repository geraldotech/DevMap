const code = document.querySelectorAll('.clipboard pre')
const btnCopy = document.querySelectorAll('#btncopy')
const div = document.querySelectorAll('.clipboard')

btnCopy.forEach((val) => {
  val.addEventListener('click', handlerBoard)
})

function handlerBoard(e) {
  console.log('target', e.target.firstChild) // button
  console.log('currentTarget', e.currentTarget.parentElement) // div.clipboard
  console.log('this', this)

  // firstChild = current Text click
  const codeAtual =
    e.currentTarget.parentElement.querySelector('pre').textContent

  // passar o valor do currentTarget selecionando o valor de <code>
  navigator.clipboard.writeText(codeAtual).then(() => {
    //btnAtual.textContent = "Copied"; //precisa ser o button atual

    /* want change text after click */
    /*  setInterval(function () {
      btnAtual.textContent = 'Copy'
    }, 1000) */

    /*
    loop iterate over all buttons and check who is current contains e.target[atual]
    */

    for (const current of btnCopy) {
      // loop checkout element contains o eventoAtual
      let currentEvent = current.contains(e.target)
      //console.log(current.contains(this.target))
      // quem for true recebe
      /*     if (currentEvent) {
        current.textContent = "Copied";
      } else {
        // who false
        current.textContent = "Copy";
      } */
      // Ternay version
      currentEvent
        ? (current.textContent = 'Copied')
        : (current.textContent = 'Copy')
    }
  })
}
