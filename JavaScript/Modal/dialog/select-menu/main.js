const btn = document.querySelector("button");
const dialog = document.querySelector("dialog");
const select = document.querySelector("select");
const dialogBtn = document.querySelectorAll("dialog button");
const res = document.getElementById("res");

btn.onclick = () => {
  dialog.showModal();
};

dialogBtn[1].onclick = function () {
  const str = select.value;
  res.innerText = `Escolheu: ${str}`;

  if (str == 1)
    res.innerText = `Escolheu: Front-End, estudar HTML, CSS e Vanilla JS`;
  if (str == 2)
    res.innerText = `Escolheu: Back-End, estudar NodeJS, Python, Java e Banco de Dados`;
  dialog.close();
};

dialogBtn[0].onclick = function () {
  dialog.close();
  res.innerText = `Operação cancelada`;
  setTimeout(function () {
    res.innerText = ``;
  }, 2000);
};
