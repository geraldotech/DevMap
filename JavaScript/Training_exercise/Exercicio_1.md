# JS Exercício 1

1. Usando variáveis calcule o ano de nascimento com base no ano atual e idade: Também faça uso do shorthand [] = []

<details>
<summary>res</summary>
<pre>
var age = 30;
var ano = 2022;
var res = ano - age;
document.getElementById("idade").innerHTML = res;

//shorthand
let [y,idade] = [2022,29];
console.log(y - idade);
//
</pre>
</details>

2. Faça que ao clicar no botão seja exibida uma mensagem de alert:

<details>
<summary>res</summary>
<pre>
function bnt() {
    alert("boa noite");
}
</pre>
</details>

3. Faça um button com <mark>.getElementById</mark> o clicar seja exibida uma mensagem de alert customizando a cor e font-size

<details>
<summary>res</summary>
<pre>
document.getElementById("bntx").onclick = function () {
    alert("boa noite");
}
</pre>
</details>

4. Contar de 1 até 10: 

<details>
<summary>res</summary>
<pre>
var cont = "";
for(i=1;i<=10;i++) {
    cont += i;
}
document.getElementById("contador").innerHTML = cont;
</pre>
</details>

5. Faça uma tabuada de um número: 

<details>
<summary>res</summary>
<pre>
var c = "";
var opt = 7;
for(a=1; a<=10; a++) {
    c += opt +' x '+a + '='+opt*a+'<br>';
}
document.getElementById("tabua").innerHTML = c;
</pre>
</details>

6. Mostrar a data e hora atual: 

<details>
<summary>res</summary>
<pre>
const d = new Date();
document.getElementById("hora").innerHTML = d;
</pre>
</details>

7. Como call JavasSript external file?
```js 
<script src="myscript.js"></script>
```
8. Faça um conteúdo ser alterado ao clicar em um botão:
e.g: pode usar para add uma imagem
<mark>`https://gpnotes.droppages.com/img/1.jpg`</mark>  

<details>
<summary>res</summary>
<pre>
//8
function txt2() {
    document.getElementById("txt").innerHTML = "Boa noite";
}

//8.2
function img2() {
    document.getElementById("img").innerHTML = '<img src="xxhttps://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg" />';
}
</pre>
</details>


9. Usando HTML + CSS + JavaScript faça um menu dropdown, quando selecionar a opção o conteúdo seja mostrado: *(create a new .js file script)* 


<details>
<summary>res</summary>
<pre>
document.getElementById("options").onchange = function () {
    var i = 1;
    var myDiv = document.getElementById(i);
    while (myDiv) {
        myDiv.style.display = 'none';
        myDiv = document.getElementById(++i);
    }
    document.getElementById(this.value).style.display = 'block';
}
</pre>
</details>



10. Fazer o Toggle/Swap Text (troca text) [ref](https://www.w3schools.com/howto/howto_js_toggle_text.asp)

<details>
<summary>res</summary>
<pre>
function texto2 () {
    var x = document.getElementById("texto");
    if (x.innerHTML == "Hello") {
        x.innerHTML = "Ola";
    } else {
        x.innerHTML = "Hello";
    }
}
</pre>
</details>

11. Faça um exemplo de Arrays com 3 valores: 

<details>
<summary>res</summary>
<pre>
network = ['NETFLEX ','<p style="background:DodgerBlue;display:inline">Live TIM</p>','<p style="background:red;display:inline"> CLARO</p>'];
document.getElementById("array").innerHTML = network;
</pre>
</details>

12. Faça uma tabuada de multiplicar com valor de entrada <input:  

<details>
<summary>res</summary>
<pre>
function multiplica() {
    var num = (document.getElementById("num").value);
    var saida = document.getElementById("saida");
    var mu = "";
    for(i=1;i<=10;i++)
    mu += num+' x '+i+' = '+num*i+'<br>';
    saida.innerHTML = mu;
}
</pre>
</details>

13. Usando o toggle swap faça uma imagem aparecer e ou desaparecer ao clicar no botão. dica use: html, css, e JS!
`https://gpnotes.droppages.com/img/garden.jpg` 

<details>
<summary>res</summary>
<pre>
function imgbnt() {
    var ximg = document.getElementById("imgx");
        if (ximg.style.display === "none") {
            ximg.style.display = 'block';
        } else {
            ximg.style.display = 'none';
    }
}
</pre>
</details>

14. Solicite um número e mostre se é par ou impar, faça usando if else e depois o operador ternário, resultado deve ser exibido com console.log  

<details>
<summary>res</summary>
<pre>
//14 console.log
//const n = prompt("Digite um valor:");
if (n %2 === 0) {
    console.log('EVEN - PAR');
} else {
    console.log('ODD - IMPAR');
}

//14.2 operador ternário:
//const nn = prompt("Inserir numero:");
//*nn %2 == 0 ? console.log(+nn+" PAR") : console.log(+nn+" IMPAR");
</pre>
</details>

15. Em uma div defina um id e class, caso a class da id seja =="geraldo" o nome que deve aparecer será Petronilo  


<details>
<summary>res</summary>
<pre>
let xj = document.getElementById('filho');
if(xj.className === "geraldo"){
    xj.textContent = "Petronilo";
} else {
    xj.className = "NaN Geraldo";
}
</pre>
</details>

16. Tabuada com form com required no valor m´áximo: 

<img src="https://gpnotes.droppages.com/blog-content/2022/16.jpg" width="60%">

<details>
<summary>res</summary>
<pre>
function btn(){
    //e.preventDefault()
    n1 = document.getElementById("n1").value;
    max = document.getElementById("max").value;
    //caso o fosse apenas um numero, checkout se esta vazio
  /*   if(n1 === ''){
      return false;
    } */
    myres = document.getElementById("myres");
    res = '';
  for(i = 1; i<=max; i++){
    res += n1+' x '+i+'='+i*n1+'<br>';
  }
  myres.innerHTML = res;
  }
</pre>
</details>

17. Ao clicar no botão seja atribuindo +1 sum onclick!

<details>
<summary>code</summary>
<pre>
let sum = 0;
function add(){
    let sumel = document.getElementById("x");
    sum = sum +1;
    sumel.innerHTML = sum;
}
</pre>
</details>
