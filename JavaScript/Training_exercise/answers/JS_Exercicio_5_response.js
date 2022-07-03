//1
//<p id="demo"></p>

document.addEventListener('click', noclique);

function noclique(){
    document.getElementById('demo').innerHTML = 'ola';
}

//1.1
//create a div 
mydiv = document.getElementById("mydiv");

mydiv.addEventListener("mouseover", function(){
  alert('passou sobre a div');
});


//1.2 assim tbm funciona by me, declarar a funcao antes ou depois
document.addEventListener('click', function (){
document.getElementById('demo').innerHTML = 'geraldo filho';
});


//2
document.addEventListener("keypress", function(event) {
  if (event.key === 't') {
    alert('hi');
  }
});


//2.1 by me

document.addEventListener("keypress", my);
function my(event){
 if(event.key === 'a'){
     alert("A");
 }
}
//tambem funciona declarando e de event!
  if(e.key === 'z'){
//3
const body = document.querySelector('body');
document.addEventListener("keypress", function msn(event){
    if(event.key === 'r'){
        body.style.backgroundColor = 'red';
    } else if (event.key === 'b'){
        body.style.backgroundColor = 'black';
    } else if (event.key === 'a'){
        body.style.backgroundColor = 'dodgerblue';
    }
});

//exemplo com classname, eventlistener, getlementbyid

const body = document.querySelector('body');
var classe = document.getElementsByClassName('menu');
document.addEventListener("keypress", function(bg){
    if(bg.key === 't'){
        document.getElementById('txt').innerHTML = 'my red screen';
        body.style.backgroundColor = 'red';
        classe[0].innerHTML = 'quick test';
    }
});


//4
const greet = {
    title: 'my website',
}
document.body.innerHTML = greet?.title;

//5
document.body.innerHTML = document.lastModified;

//5.2
//   <p>This document was last modified <span id="demo"></span>.</p>

   
    document.getElementById("demo").innerHTML = document.lastModified;

//6
txt = document.createTextNode("Awesome!");
document.body.appendChild(txt);

//7 
txt = document.createTextNode('Bem vindo');
h1 = document.createElement("h1");
h1.appendChild(txt);
document.body.appendChild(h1);


//7.1
// <input type="submit" id="calc" value="Enviar" />


var count = 0;   
document.getElementById("calc").onclick = function(){
if(count >=2){
    return false;
} else {
    count++;    
}    
res = document.createTextNode('ola');
    h1 = document.createElement("h1");
    h1.appendChild(res);
    document.body.appendChild(h1);
}


//8 
 //inside html document body
 
//9
//modo com valor inicial no html

//html
/*  <button class="btn">AUMENTAR</button>
    <span id="conta">0</span> */
	
//css
  }
    .btn:active{
        background-color: green;
    }	
	
//js

var res = document.querySelector('#conta');
document.querySelector('.btn').addEventListener('click', function(){
var add = parseInt(res.textContent) +1;
res.textContent = add;
    });

//10 modo valor inicial no js
var inicio = '0';
var res = document.querySelector('#conta');
document.querySelector('.btn').addEventListener('click', function(){
var add = parseInt(inicio) +1;
inicio = add;
res.textContent = add;
   });
   
//11
//=> https://www.w3schools.com/jsref/met_node_appendchild.asp

//12
//html
   /*  <button class="btn">AUMENTAR</button>
    <p>Limite Total: <span id="total"></span></p> 
    <p>Aumentou: <span id="aumento"></span></p>   
            <br>
        </div>
    </div> */
	
	//js

	    var limite_total = 500;
    document.getElementById('total').innerHTML = limite_total;
    var start = 0;
    document.querySelector('.btn').addEventListener('click', function(){
    //start + start = 200
    var add = parseInt(start) +100;
    start = add;
    document.getElementById('aumento').innerHTML = add;
    total.innerHTML = limite_total + add;
        });


//13 inside folder

//14 
msn = document.createTextNode("Geraldo");
h1 = document.createElement("h1");
h1.appendChild(msn)
var p = document.body.appendChild(h1);

document.addEventListener("click", function(){
p.classList.add("red");
});

//15

const app = document.getElementById('app');

img = document.createElement("img");
//set a class both works
//img.setAttribute("class", "myimg");
//img.classList.add("myimg2");
img.setAttribute("alt", "apapstop");
img.setAttribute("src", `${"http://smartdicastutorial.appspot.com/images/6d88733c461.jpg"}`);
app?.appendChild(img);



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of


//ESPECIAL
// 1 list with map
const arr = ['Geraldo','Filho','Alpha','Bravo','Charlie'];

document.getElementById("root").innerHTML = `
<ul>
${arr.map((value) => {
  return `<li>${value}</li>`
}).join('')}
<ul>`

//2 list com for of
arr3 = ['Carnes','Arroz','Feijao','Tea','Apple'];
function lista(arrx, fun){
  let get = [];
  for(item of arrx){
    get.push(fun(item))
  }

  return get.join('');
}

res = lista(arr3, (html)=> {
  return `<li>${html}</li>`
})
document.getElementById("root2").innerHTML = `<ul>${res}</ul>`;

//3 list for of 2
 const lista3 = ['Geraldo','Felipe','PC','NVME','Mcz'];

function leitura(arr,fun){
  const get3 = [];
  for(item of arr){
    get3.push(fun(item))
  }
  return get3.join('');
}

function myli(content){
  return `<ul><li>${content}</li></ul>`
}

const todos = leitura(lista3,myli);
document.getElementById("root3").innerHTML = todos;

//Array forEach inline
arr5 = ['geraldo','banana','orange','´pineaple'];

arr5.forEach((element,index) => {
  console.log(index+':'+element)
}) 


//5 for of show index
arr7 = [1,2,3,4,5];
for(index of arr.keys()){
  console.log(index)
}







