//optei usar o SelectorAll para pegar o index do segundo p
//const p = document.querySelectorAll("p")[1];
// ou usar o nth-of-type
const p = document.querySelector(".res");
const icon = document.querySelector(".hide");

const btn = (document.querySelector("button").onclick = () => {
  const inpt = document.querySelector("input").value;
  const Ainpt = Array.from(inpt).join(""); //join serve para unir os caracteres

  if (inpt.length == 0) {
    return (p.textContent = "input vazia!");
    false;
  }

  p.removeAttribute("class");
  console.log(inpt);
  p.innerHTML = `Fazendo leitura....`;
  icon.classList.remove("hide");
  setTimeout(function () {
    p.innerHTML = `decodificando hacker...`;
  }, 2000);
  const keys = ["ge", "fe"];

  /*
      não usar filter, vamos verificar apenas 1 value e queremos saber se é true/false
     
        */
  const scanOk = keys.includes(Ainpt);

  console.log("scam", scanOk);
  /*
        só faltava adicionar return nas condições if/return
        if return usando Array some/includes
        */
  if (scanOk) {
    console.log(`success ${inpt == "fe" ? "Felipe" : "Geraldo"}`);
    return setTimeout(() => {
      p.innerHTML = `<i class="fa fa-solid fa-check"></i>Successful <br> Feliz Natal:  ${
        inpt == "fe" ? "Felipe" : "Geraldo"
      }`;
      p.classList.add("suc");
      icon.classList.add("hide");
    }, 4000);
  }
  // tbm poderiamos fazer um if para cada user, e.g user de test
  if (Ainpt.includes("test")) {
    return setTimeout(() => {
      p.textContent = "Welcome Test!";
      p.classList.add("suc");
    }, 4000);
  }

  //se todos os scan for false
  if (!scanOk) {
    return setTimeout(() => {
      icon.classList.remove("hide");
      p.innerHTML = `<i style="display:inline" class="fa fa-solid fa-repeat"></i> Error`;
      p.classList.add("err");
      icon.classList.add("hide");
    }, 3000);
  }
});
