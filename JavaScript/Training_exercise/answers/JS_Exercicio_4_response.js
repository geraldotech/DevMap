//1
https://codepen.io/geraldopcf/pen/JjMZoBW


    <button onclick="getarr()">Get Random</button>
    <span id="myarr"></span>
</body>


function getarr(){
var arr = new Array("Avestruz", "Águia", "Burro", "Borboleta", "Cachorro", "Cabra", "Carneiro", 
	"Camelo", "Cobra", "Coelho", "Cavalo", "Elefante", "Galo", "Gato", "Jacaré", "Leão", "Macaco", "Porco", 
	"Pavão", "Peru", "Touro", "Tigre", "Urso", "Veado", "Vaca");

var choice = arr[Math.floor(Math.random() * arr.length)];
document.getElementById("myarr").innerHTML = choice;
}

//2

Gera numero entre 0 e 9
document.getElementById("myarr").innerHTML = Math.floor(Math.random() * 10);

caso add +1 gera entre 0 e 10
Math.random() * 10 +1)

case +6 gera entre 1 e 15:
document.getElementById("myarr").innerHTML = Math.floor(Math.random() * 10 +6);



//3
function getarr(){
var arr = new Array("Geraldo","Urso","Juli","Camilly","Giulia","Isabella","Felipe");
x = arr[Math.floor(Math.random() * arr.length)];
document.getElementById("demo").innerHTML = x;
}


//4

const n = prompt("Digite a number: ");
let x = Math.pow(n,2);
console.log(x);

//5
var x = Boolean(15 > 10);
console.log(x);

let [a,b] = [5,2];
let x = Boolean(a > b);
console.log(x);

//or even easier
document.getElementById("demo").innerHTML = 10 > 5;


//6
let [a,b] = [5,6];
console.log(`A soma de a + b = ${a + b}`);



//7

function getx(){
  arr = ['Mouse','teclado','monitor','headset'];

x = document.getElementById("x").value
arr.length = x;
document.getElementById("res").innerText = arr;
}

// 8
const str = [];
str[0] = 5;
str[1] = 2;
console.log(str.reduce((total, val) => total+= val));

// 8 v2
x = 5;
y = 6;
 
arr = [];
arr[0] = x;
arr[1] = y;

console.log(arr[0] + arr[1]);


//11
person = {
  nome:"Geraldo",
  city:"Mcz",
  show: function get(nome,city){
    console.log(this.nome,this.city);
  }
}
person.show()


//12
msn = setInterval(function(){
  alert("bom dia");
  clearInterval(msn) //limpa
},3000)

//12.1
const contador = () =>{

  let start = document.querySelector("span"); //sets 0 in span
  let valuecont = start.innerHTML; 


  setInterval(function() {
valuecont--;
if(valuecont < 0){
  valuecont = 0;
}
start.innerHTML = valuecont;
  },1000)
}

contador()

//13
const cont = ()=>{
  let start = document.querySelector("span");
  let valuecont = start.innerHTML;

setInterval(function(){
valuecont--;
if(valuecont <0){
  valuecont = 0;
}
start.innerHTML = valuecont;
},1000)
}

cont();




//13.1
<div id="link" style="display: none;">
<p><a href="http://hostinger.com.br" target="_blank">goes here</a></p>
</div>
const contador = () => {

  let start = document.querySelector("span");
  let valuecont = start.innerHTML;
  
  setInterval(()=>{
    valuecont--;
    if(valuecont < 0) {
      valuecont = 0;
    } else if (valuecont == 0){
      document.getElementById("link").style.display = 'block';
    }
    start.innerHTML = valuecont;
  },1000)
  }
  contador();
  

