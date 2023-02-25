//add a verification
async function getdados() {
  const req = await fetch("./src/data.json");
  const res = await req.json();
  const dados = res.cartoes.cards;
  show(dados);
  console.log(dados);
}

getdados();

const sel = document.createElement(`select`);
function show(el) {
  el.forEach((val) => {
    const opt = document.createElement(`option`);
    opt.value = val.limite;
    opt.append(val.tipo);
    sel.append(opt);
    res.append(sel);
  });
}

function opcao() {
  const value = this.value;
  document.querySelector("span").innerHTML = value;
}

//para evitar bugs adicionar o event no final
sel.addEventListener("change", opcao);
