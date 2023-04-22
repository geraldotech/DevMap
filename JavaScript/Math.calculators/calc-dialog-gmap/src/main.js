const btn = document.querySelector("button");
const btnClose = document.querySelector("dialog button");
const dialog = document.querySelector("dialog");
btn.onclick = () => {
  dialog.showModal();
};

btnClose.onclick = function () {
  dialog.close();
};

for (let i = 1; i <= 3; i++) {
  const p = document.createElement("p");
  const inpt = document.createElement("input");

  inpt.setAttribute("id", [i]);
  inpt.setAttribute("type", "number");
  p.textContent += `Nota: ${i}`;
  dialog.appendChild(p);
  dialog.appendChild(inpt);
}
const button = document.createElement("button");
button.setAttribute("name", "ok");
button.insertAdjacentText("beforebegin", "<br>");
button.innerText = `Computar`;
dialog.appendChild(button);

const Calc = document.querySelector("dialog button[name='ok']");
const inputsNum = document.querySelectorAll("input[type='number']");
const todosNum = Array.from(inputsNum);

Calc.onclick = function () {
  /*  // Requer no mínimo uma nota valida
  if (todosNum.every((val) => val.value.length != 0)) {
    return alert("Verificar os campos!");
  } */

  let filval = todosNum.map((val) => +val.value);
  let soma = filval.reduce((total, val) => (total += val));
  let media = soma / 3;
  console.log(`filval`, filval);
  document.getElementById("res").innerHTML = `<p>Notas: ${filval.map(
    (a) => `[${a}]`
  )}</p> <p>Soma: ${soma} </p> <p>Media: ${media.toFixed(2)}</p> 
        <p>Situação: ${media >= 6 ? "Aprovado" : "Reprovado"}</p>`;
  dialog.close(); //para fechar o dialog after click
};
//clean
document.querySelector("button[name='clear']").onclick = function () {
  document.getElementById("res").innerHTML = "";
  //Clean old values
  //console.warn(inputsNum[0].value);
  inputsNum.forEach((val) => (val.value = ""));
};
