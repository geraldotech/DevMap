async function getdados() {
  const req = await fetch("./src/data.json");
  const res = await req.json();
  const dados = res.cartoes.cards;
  show(dados);
  console.log(dados);
}

getdados();

function show(el) {
  document.querySelector("select").innerHTML = el
    .map(
      (val) =>
        `<option value="${val.id}" itemtype="${val.limite}">${val.tipo}</option>`
    )
    .join("");
}

document
  .querySelector("select[name='test']")
  .addEventListener("change", function (e) {
    const attr = this.selectedOptions[0].getAttribute("itemtype");
    console.log(attr);
    document.querySelector("span").innerHTML = attr;
  });
