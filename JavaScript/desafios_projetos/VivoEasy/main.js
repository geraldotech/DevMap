const btn = document.querySelectorAll("span");
const p = document.querySelector("p");
const gb = document.querySelector("#gb");

let valor = 0;
//btn[0].onclick =
function mais() {
  valor = valor + 1;
  if (valor == 6) {
    valor = 10;
  }
  if (valor == 11) {
    valor = 20;
  }
  if (valor == 21) {
    valor = 50;
  }
  if (valor == 51) {
    valor = 50;
  }
  gb.innerHTML = `${valor}`;
  valores();
}
//func iniciada
mais();

btn[0].onclick = function () {
  valor = valor - 1;
  if (valor == 0) {
    valor = 1;
  }
  if (valor == 11) {
    valor = valor;
  }
  if (valor == 19) {
    valor = 10;
  }
  if (valor == 21) {
    valor = valor + 30;
  }
  if (valor == 49) {
    valor = 20;
  }
  if (valor == 9) {
    valor = 5;
  }
  gb.innerHTML = `${valor}`;
  valores();
};

function valores() {
  let g = "R$ ";
  if (valor == 1) {
    p.innerHTML = g + "9.90";
  }
  if (valor == 2) {
    p.innerHTML = g + "15.99";
  }
  if (valor == 3) {
    p.innerHTML = g + "22.99";
  }
  if (valor == 4) {
    p.innerHTML = g + "26.99";
  }
  if (valor == 5) {
    p.innerHTML = g + "30.99";
  }
  if (valor == 10) {
    p.innerHTML = g + "52.99";
  }

  if (valor == 20) {
    p.innerHTML = g + "89.99";
  }
  if (valor == 50) {
    p.innerHTML = g + "179.99";
  }
}
