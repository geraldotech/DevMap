const code = document.querySelectorAll(".clipboard code");
const btnCopy = document.querySelectorAll("#btncopy");
const div = document.querySelectorAll(".clipboard");

btnCopy.forEach((val) => {
  val.addEventListener("click", handlerBoard);
});

function handlerBoard(e) {
  console.log("target", e.target.firstChild); // button
  console.log("currentTarget", e.currentTarget.parentElement); // div.clipboard
  console.log("this", this);

  // firstChild = current Text click
  const codeAtual =
    e.currentTarget.parentElement.querySelector("code").textContent;
  const btnAtual = e.target;

  // passar o valor do currentTarget selecionando o valor de <code>
  navigator.clipboard.writeText(codeAtual).then(() => {
    //btnAtual.textContent = "Copied"; //precisa ser o button atual

    /*  setInterval(function () {
      btnAtual.textContent = "Copy";
    }, 1000); */

    /*
    loop iterate over all buttons and check who is current contains e.target[atual]
    */

    for (const current of btnCopy) {
      // loop checkup elementp contains o eventoAtual
      let atual = current.contains(e.target);
      console.log(current.contains(this.target));
      // quem for true recebe
      /*     if (atual) {
        current.textContent = "Copied";
      } else {
        // who false
        current.textContent = "Copy";
      } */
      // Ternay version
      atual ? (current.textContent = "Copied") : (current.textContent = "Copy");
    }
  });
}
