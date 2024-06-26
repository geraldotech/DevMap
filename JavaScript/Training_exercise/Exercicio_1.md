# JS Exercício 1

1. Usando variáveis calcule o ano de nascimento com base no ano atual e idade, também faça uso do shorthand [] = []

<details>
<summary>res</summary>

```js
var age = 30;
var ano = 2022;
var res = ano - age;
document.getElementById("idade").innerHTML = res;

//shorthand
let [y,idade] = [2022,29];
console.log(y - idade);
//
```
</details>

2. Faça que ao clicar no botão seja exibida uma mensagem de alert:

<details>
<summary>res</summary>

```js
function bnt() {
    alert("boa noite");
}
```
</details>

3. Faça um button com <mark>.getElementById</mark> o clicar seja exibida uma mensagem de alert customizando a cor e font-size

<details>
<summary>res</summary>

```js
document.getElementById("bntx").onclick = function () {
    alert("boa noite");
}
```
</details>

4. Contar de 1 até 10: 

<details>
<summary>res</summary>

```js
var cont = "";
for(i=1;i<=10;i++) {
    cont += i;
}
document.getElementById("contador").innerHTML = cont;
```
</details>

5. Faça uma tabuada de um número: 

<details>
<summary>res</summary>

```js
var c = "";
var opt = 7;
for(a=1; a<=10; a++) {
    c += opt +' x '+a + '='+opt*a+'<br>';
}
document.getElementById("tabua").innerHTML = c;
```
</details>

6. Mostrar a data e hora atual: 

<details>
<summary>res</summary>

```js
const d = new Date();
document.getElementById("hora").innerHTML = d;
```
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

```js
function txt2() {
    document.getElementById("txt").innerHTML = "Boa noite";
}

//8.2
function img2() {
    document.getElementById("img").innerHTML = '<img src="xxhttps://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg" />';
}
```
</details>


9. Usando HTML + CSS + JavaScript faça um menu dropdown, quando selecionar a opção o conteúdo seja mostrado: *(create a new .js file script)* 

<details>
<summary>res </summary>

```html
<select name="options" id="options">
<option value="1">Selecionar: </option>
<option value="2">SX</option>
<option value="3">Trigg</option>
</select>

<g id="1" style="display:block"></g>
<g id="2">5000</g>
<g id="3">6000</g>
```

```js
document.getElementById("options").onchange = function () {
    var i = 1;
    var myDiv = document.getElementById(i);
    while (myDiv) {
        myDiv.style.display = 'none';
        myDiv = document.getElementById(++i);
    }
    document.getElementById(this.value).style.display = 'block';
}
```

</details>



10. Fazer o Toggle/Swap Text (troca text) [ref](https://www.w3schools.com/howto/howto_js_toggle_text.asp)

<details>
<summary>res</summary>

```js
function texto2 () {
    var x = document.getElementById("texto");
    if (x.innerHTML == "Hello") {
        x.innerHTML = "Ola";
    } else {
        x.innerHTML = "Hello";
    }
}
```
</details>
<summary>res Alternative by gmap</summary>

```js
const p = document.querySelector('p')
let x = true

function toggle(){
  x = !x
  p.style.display = x ? 'block' : 'none'
}
```
</details>

11. Faça um exemplo de Arrays com 3 valores: 

<details>
<summary>res</summary>

```js
network = ['NETFLEX ','<p style="background:DodgerBlue;display:inline">Live TIM</p>','<p style="background:red;display:inline"> CLARO</p>'];
document.getElementById("array").innerHTML = network;
```
</details>

12. Faça uma tabuada de multiplicar com valor de entrada <input:  

<details>
<summary>res</summary>

```js
function multiplica() {
    var num = (document.getElementById("num").value);
    var saida = document.getElementById("saida");
    var mu = "";
    for(i=1;i<=10;i++)
    mu += num+' x '+i+' = '+num*i+'<br>';
    saida.innerHTML = mu;
}
```
</details>

13. Usando o toggle swap faça uma imagem aparecer e ou desaparecer ao clicar no botão. dica use: html, css, e JS!
`https://gpnotes.droppages.com/img/garden.jpg` 

<details>
<summary>res</summary>

```html
<button onclick="imgbnt()">show img</button>
<imgx id="imgx" style="display: none;">
    <img src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg" width="250px" height="250px" />
</imgx>

```

```js
function imgbnt() {
    var ximg = document.getElementById("imgx");
        if (ximg.style.display === "none") {
            ximg.style.display = 'block';
        } else {
            ximg.style.display = 'none';
    }
}
```
</details>

<details>
<summary>res Alernative by GMAP</summary>


```js
const div = document.querySelector("div")

/* STATES */
let y = true
/* SAVE current Text */
let defaultText = div.innerText

function swap(){
y = !y
div.innerText = y ? defaultText : 'newText'
}
```
</details>

14. Solicite um número e mostre se é par ou impar, faça usando if else e depois o operador ternário, resultado deve ser exibido com console.log  

<details>
<summary>res</summary>

```js
const n = prompt("Digite um valor:");
if (n %2 === 0) {
    console.log('EVEN - PAR');
} else {
    console.log('ODD - IMPAR');
}

//14.2 operador ternário:
const nn = prompt("Inserir numero:");
nn %2 == 0 ? console.log(+nn+" PAR") : console.log(+nn+" IMPAR");
```
</details>

15. Em uma div defina um id e class, caso a class da id seja =="geraldo" o nome que deve aparecer será Petronilo  

<details>
<summary>res</summary>

```js
let xj = document.getElementById('filho');
if(xj.className === "geraldo"){
    xj.textContent = "Petronilo";
} else {
    xj.className = "NaN Geraldo";
}
```
</details>

16. Tabuada com form com required no valor m´áximo: 

<img src="https://gpnotes.droppages.com/blog-content/2022/16.jpg" width="60%">

<details>
<summary>res</summary>

```js
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
```
</details>

17. Ao clicar no botão seja atribuindo +1 sum onclick!

<details>
<summary>code</summary>

```js
let sum = 0;
function add(){
    let sumel = document.getElementById("x");
    sum = sum +1;
    sumel.innerHTML = sum;
}
```
</details>
