### by gmapdev

## [CodePen Full code](https://codepen.io/geraldopcf/pen/wvjvNpg)
também disponível em:
## [gmapdev_netlify](https://gmapdev.netlify.app/demo/input_checkbox_search.html)

```js

const person = [
  { nome: "GEL", idade: 29, Estado: "RJ" },
  { nome: "FELIPE", idade: 10, Estado: "AL" },
  { nome: "ISABELLA", idade: 5, Estado: "RJ" },
  { nome: "CAMILLY", idade: 10, Estado: "SP" },
  { nome: "ISA", idade: 5, Estado: "RS" },
  { nome: "MELISSA", idade: 21, Estado: "MG" },
];

const res = document.getElementById('ress');
const inputCheck = document.querySelectorAll("input[type='checkbox'][name=type]");
const inputField = document.querySelector("#inputField");
const results = document.querySelector("#results");
inputField.addEventListener("input", dados);

function dados() {
  //get this.value and transforma tudo em maiusculo
  const str = this.value.toUpperCase();
  
  console.log(str);
inputCheck.forEach(function(e){  
    let opt = Array.from(inputCheck)
    .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value)        
          res.innerHTML = `Buscando por: ${opt.join(", ")}`;          
          getopt(opt, str);   
          
});  
} 

//VERIFICAR o que está marcado e chamar a função correspondente!
function getopt(opt,str) { 
str2 = str;
//check if every are true // ambos marcados
const keys = ["name","estado","age"];
const keys2 = ["name","estado"];
const every_opt = keys.every(el => opt.includes(el));
console.log('every marcado??',every_opt,);
const byNames = opt.includes("name");
const byAges = opt.includes("age");
//const byEstados = opt.filter(el => el.includes("estado"));
const byEstados = opt.includes("estado");
const byNamesAndEsta = keys2.every(el => opt.includes(el));
console.log("names and Estado ?",byNamesAndEsta);
//console.log('Estado:', byEstados);

if(every_opt) {
  GetAll(str);
  return;
}
if(byNamesAndEsta){
  NameEstado(str);
  return;
}
if(byAges) {
  FilterAges(+str);
  return;
}
if(byNames) {
  FilterNames(str);
  return;
}
if(byEstados){
  FilterEsta(str);
  return;
}
//os returns acima são importantes se caso true não chamar outras funções e caso nenhum checkbox estiver marcado enviar a mensagem abaixo:
res.innerHTML = "<span style='color:red'>Select a option!</span>";
}


function FilterNames(obj){  
   const valor = person.filter((el) => el.nome === obj);
   valor.length != 0 ? results.innerHTML = JSON.stringify(valor) : results.innerHTML = "Not found names"
 }

 function FilterAges(obj) {
   const Idade = person.filter(el => el.idade === obj);
   Idade == '' ? results.innerHTML = "Not found ages" : results.innerHTML = JSON.stringify(Idade);
 }

function GetAll(obj){
  const res = person.filter(el => {
    return el.Estado === obj || el.nome === obj || el.idade === +obj;
  });
  res == '' ? results.innerHTML = "Not found Get_All" :  results.innerHTML = JSON.stringify(res);
}

function FilterEsta(obj) {
   const Esta = person.filter(el => el.Estado === obj);
   Esta == '' ? results.innerHTML = "Not found Estado" : results.innerHTML = JSON.stringify(Esta);
 }

 function NameEstado(obj){
  const valor2 = person.filter((el) => el.nome === obj || el.Estado === obj);
  valor2.length != 0 ? results.innerHTML = JSON.stringify(valor2) : results.innerHTML = "Not found Name Estados"
}

//area de testes
//GetAll("SP");

```