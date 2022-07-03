//JavaScript Exercicios 2

//1
const d = new Date();
//or direct way
document.write(Date());
document.write('<img src="http://cdn-content.geraldo.tech/super.jpg" />');


//2
<button onclick="get()">
OPEN
</button>

function get(){
const novo = window.open();
novo.document.write("NOVA PAGINA AQUI");
}

//3

	<button onclick="get()">
		OPEN
		</button>		
		esse texto será apagado
		function get(){
document.write("NOVA PAGINA AQUI");
}

//4


<script>
const n = prompt("Codigo:");
// adiciona um filtro para numeros inteiros
var x = parseInt(n);
switch (n) {
	case '1':1
	document.write("SX");
	break;

	case '2':
	document.write("C6");
	break;

	case '3':
	document.write("Trigg");
	break;

	default:3
	document.write("NAO ENCONTRADO");

}

//5

	<input id="n2" />
	<button onclick="get()">consultar</button>

	<div id="res"></div>


<script>
function get(){
var n2 = document.getElementById("n2").value;
var res = document.getElementById("res");
switch (n2) {
	case '1':
	res.innerHTML = "SX"
	break;

	case '2':
	res.innerHTML = "C6"
	break;

	case '3':
	res.innerHTML = "Trigg"
	break;

	default:
	res.innerHTML = "NAO ENCONTRADO"

}
}
</script>


//6
<div id="info"></div>
const pessoa = {
name: 'Geraldo',
age: ' 29' ,
city: ' Maceio',
}
console.log(pessoa);
document.write(Object.values(pessoa));
document.getElementById("info").innerHTML = Object.values(pessoa);

//7
const pessoa = {
name: 'Geraldo',
age: ' 29' ,
city: ' Maceio',
}
console.log(pessoa);
document.write(pessoa.name + ' mora em ' +pessoa.city+'<br>');
document.getElementById("info").innerHTML = pessoa.name +' tem'+pessoa.age+' anos';


//8
	<div id="frutas"></div>
<script>
let lista = "";
const frutas = ['ORANGE','APPLE','PINEAPLE','GRAPES'];
frutas.forEach(getid);
document.getElementById("frutas").innerHTML = lista;
function getid(index, item){
	lista += item+':'+index+'<br>';
}
</script>

//9
<style>
ul li a {
    display: block;
}
</style>
</head>
<body>
    <nav>
        <ul>
           <li>
            <a href="" class="menu">HOME</a>
            <a href="http://youtube.com" class="menu">Youtube</a>
            <a href="" class="menu">Google</a>
            </li>
        </ul>
    </nav>    
    <script>
const menu = document.getElementsByClassName('menu');
menu[0].innerHTML = 'ola';
menu[1].style.backgroundColor = 'red';
menu[2].href = 'http://google.com';
    </script>


//10
<div id="data"></div>

<script>
const d = new Date();
let dia = d.getDate();
let mes = d.getMonth() +1;
let ano = d.getFullYear();

document.getElementById("data").innerHTML = "Data de hoje: "+dia+'/'+mes+'/'+ano;
</script>


//11
<label for="opera">Selecionar uma operadora:</label>
<select id="opera">
    <option value="">-choice-</option>
    <option value="sx">Santander</option>
    <option value="rappy">RAPPI CARD</option>
</select>

<p></p>

    <script>
        var select = document.querySelector('select');
        var para = document.querySelector('p');
        select.addEventListener('change', opera);

        function opera(){
            var choice = select.value;
            if (choice === 'sx') {
                para.innerHTML = 'VERMELHO';
            } else if (choice === 'rappy'){
                para.innerHTML = 'LANCHES';
            } else {
                para.innerHTML = '';
            }
        }
    </script>


    12)
    <input id="valor" />
<button onclick="getvalor()">
CONFIRMAR
</button>


function getvalor() {
var valor = document.getElementById('valor').value;
alert("Digitou "+valor);
}

13)
https://github.com/geraldotech/JavaScript/blob/main/Functions/Calculadora-RadioButton.js


14)

<button onclick="getlink()">GET LINK</button>
    <script>
        function getlink(){
            document.write('redirecting....');
            location.href= "https://github.com/geraldotech/JavaScript/blob/main/Calculadora-RadioButton.js";
        }        
    </script>

15)
<script>
  let ul = location.href;
  document.write('Sua url: ' +ul);
    </script>


16)
##1
<button onclick="get()">Go TOP</button>
    <script>
        function get(){
            location.href = '#top';
        }
    </script>
##2
<button onclick="location.href=('#top')">Ir no topo</button>
##3
<button onclick="window.scrollTo(5,5)">scroll</button>

	
17)
    <script>
//limitando o Float com toFixed()
n1 = 7.1;
n2 = 2.3;
x = n1+n2;
console.log(x.toFixed(2));
    </script>
	
18)
removed

19)

<input type="text" id="name" value="" />
<input type="button" id="btn" value="Confirmar" /><br>
Digite: imagem
<div id="res"></div>
<div id="url"></div>

<script>

document.getElementById('btn').onclick = function () {
    var name = document.getElementById('name').value;

//work  
document.getElementById('img').innerHTML='<img src=\'https://gpnotes.droppages.com/img/'+name+'.jpg\'>'; 

 //mostra a url da imagem
var url =  document.getElementById('url');
url.innerHTML = '<br> URL GERADA:  '+'https://gpnotes.droppages.com/img/'+name+'.jpg';
url.href = 'https://gpnotes.droppages.com/img/'+name+'.jpg';

    ///works too
    //document.getElementById('res').innerHTML='<img src=\'https://gpnotes.droppages.com/blog-content/2022/'+document.getElementById('name').value +'.jpg\'>';
}


//another exempli gratia
//https://stackoverflow.com/questions/17634019/javascript-load-an-image-from-url-and-display


20)
https://github.com/geraldotech/JavaScript/blob/main/Functions/functions.js

21)
<body onload="loaded()">    
<img src="https://gpnotes.droppages.com/img/6MB.jpg" />
    <script>
        function loaded(){
            alert('100 carregada!');
        }
    </script>

22)
    <script>
        person = {
            name: 'Geraldo',
            age: 30,
            city: 'Maceio'
        }
        person['age'] = 22;
        person.city = 'Rio';
       console.log(person.age);
       console.log(person['city']);
    </script>