//1
var sum = 0;
const n = [1,2,3,4];
for(var i = 0; i < n.length; i++){
    sum+= n[i]
}
console.log(sum)

//2
function somar(arr){
    let soma = 0;
    for(value of arr){
        soma += value;
    }
    return console.log(soma);
}
somar([5,9]); //14
somar(myarr);  //or call a arr


//3
busca = animais.filter((animal)=> animal.tipo === 'gato');
console.log(busca)

//4
dogage = animais.filter((animal) => animal.tipo === 'cao')
.map((cao)=> cao.idade +1)
console.log(dogage)



//5
busca = animais.filter((animal) => animal.tipo === 'cao')
.map((cao) => cao.idade +1)
.reduce((total, value)=> total+= value)
console.log(busca)

//6
const busca3 = animais.reduce((acc, curr) => {
  if (curr.tipo == "cao") return (acc += curr.idade *= 2);
  else return acc;
}, 0);

console.log(busca3);


//7
    <input type="text" id="input" />
    <div id="res"></div>
    

    const input = document.querySelector("#input");
    input.addEventListener("input", function (event) {
      const str = this.value;
      console.log(str);
      document.getElementById("res").innerHTML = str;
    });

// 7 - DOM - Event alternative: oninput
<input type="text" id="input" />
<div id="res"></div>

document.querySelector("input").oninput = function () {
  console.log(this.value);
  res.innerHTML = this.value;
};

//7.1

<input type="text" id="input" />
    <div id="out"></div>


    const input = document.querySelector("input");
    input.addEventListener("input", function () {
      const str = this.value;
      console.log(str);
      if (str == "ge") {
        document.getElementById("out").innerHTML = "Geraldo";
      }
    });

//8
//DOM

<input type="text" />
<div id="res"></div>


const input = document.querySelector("input");
input.addEventListener("input", function () {
  let str = this.value;

  const written = {
    0: "Zero",
    1: "One",
    G: "GeraldoX",
  };

  const getn = (val) => {
    return written[val] || "other";
  };
  const root = document.querySelector(`#root`);
  root.innerHTML = getn(str);
  if (str.length === 0) return (root.innerHTML = ``);
});
