//abaixo a forma que deve ser evitada uma funcao static, na programação func servem para evitar a replicacao de linhas de codigo fazendo um reuso dinâmico e inteligênnte

function loadFooter() {
  const xfoo = new XMLHttpRequest();
  xfoo.onload = function () {
    document.getElementById("foot").innerHTML = this.responseText;
  };
  xfoo.open("GET", "./src/foo.html");
  xfoo.send();
}

//❌fun que carrega apenas o footer loadFooter();

//👉register smart includes
//tag fica a escolha nesse e.g usando `include`

include("menu", "/src/menu.html");
//include('foo', './src/foo.html');

function include(id, path) {
  const smarthttp = new XMLHttpRequest();
  smarthttp.onreadystatechange = function () {
    if (this.status == 200) {
      console.log(this.status);
      smarthttp.onload = () => {
        document.getElementById(id).innerHTML = this.response;
      };
    }
  };
  smarthttp.open("GET", path);
  smarthttp.send();
}

//👉register smart includes version with catch erro
//caso o arquivo não seja encontrado mostra o codigo de erro direto no htmlx
//includeCa("menu", "./src/mexnu.html");
includeCa("foot", "./src/foo.html");

function includeCa(ele, path) {
  try {
    const smarthttp = new XMLHttpRequest();
    smarthttp.onreadystatechange = function () {
      // console.log(this.status, this.readyState);
      const [str, ready] = [this.status, this.readyState];
      console.log(str, ready);
      if (this.status == 200) {
        smarthttp.onload = function () {
          document.getElementById(ele).innerHTML = this.responseText;
        };
      } else {
        document.getElementById(ele).innerHTML = this.status;
        console.log(str);
      }
    };
    smarthttp.open("GET", path);
    smarthttp.send();
  } catch (err) {
    console.log(err.message);
  }
}
