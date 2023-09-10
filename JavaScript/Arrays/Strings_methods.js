//🟢 1 - #replaceAll()

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

//🟢 2 - #trim()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

console.log("Ger ald F F".trim().split(" "));

const str = " foo      ";
console.log(str.length); //10
console.log(str.trim().length); // 'foo' 3

//todos https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

/* [=============================================================================]
🟢 3 - #trim() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

/* 
🟢 4 - #charAt() Get the first character in a string:  */

// 📌Pegar uma string deixar UpperCase()

const x = `/blog`;
/* charAt(1) = B 
.toLocaleUpperCase() = Maiusculo
+ concatenar com x.substr(2) 
*/
console.log(x.charAt(1).toLocaleUpperCase() + x.substr(2)); // Blog

//👉First Letter Capitalize
//https://flexiple.com/javascript/javascript-capitalize-first-letter/

//📌Map a Array
const cat = ["Developer", "amazon", "google", "android"];
const cat2 = cat.map((el) => el.charAt(0).toLocaleUpperCase() + el.slice(1));

console.log(`cat2`, cat2); // ['Developer', 'Amazon', 'Google', 'Android']
//📌String
const str = `geraldo`;
const str2 = str.charAt(0).toLocaleUpperCase() + str.slice(1);

console.log(`str2`, str2); //Geraldo

/* [=============================================================================]
🟢 5 - #search()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

*/

/* [=============================================================================]
🟢 6 - #startsWith() #endsWith() - for Strings
*/
console.log("Geraldo".startsWith("G")); //true
console.log("Geraldo".endsWith("G")); //false
//📌não apenas 1 letra
console.log("Geraldo".startsWith("Ger")); //true
console.log("Geraldo".endsWith("aldo")); //true

//📌todas as letras
console.log("Geraldo".startsWith("Geraldo")); //true
console.log("Geraldo".endsWith("Geraldo")); //true

/* [=============================================================================]
🟢 7 - #repeat
*/
const lt = "Geraldo";
console.log("hello", lt.repeat(10));

/* [=============================================================================]
🟢 8 - #match() 
https://ricardo-reis.medium.com/o-tipo-string-no-javascript-e3fb621856d1
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
*/

/* [=============================================================================]
🟢 9 - #substring  extrair uma sequência de caracteres de uma string. returns the substring.

substring(indexStart, indexEnd);
*/

//📌e.g usando o indexOf para auxiliar no parametro do substring

let str = "finding substring in string";
let ind = str.indexOf("sub");
console.log(ind); //8
console.log(str.substring(8)); //  substring in string

//📌e.g usando o lastIndexOf para auxiliar no parametro do substring

const mystr = "Did you hear my covert";
console.log(mystr.lastIndexOf("co")); //16

//📌já notando as direnças entre substring e substr começando em 0 mesmo resultado
console.log(mystr.substring(0, 15)); // Did you hear my
console.log(mystr.substr(0, 15)); // Did you hear my

/*
The difference is in the second argument

📌 substring - second argument is the index to stop at (but not include),  
aceita apenas o end negativo contudo definindo 0 start positivo

📌 substr - second argument  is the maximum length to return, accepts a negative starting position or 

🚩 MDN considers substr legacy. This feature is no longer recommended.
https://tinyurl.com/mzp65jky
*/

console.log(`/blog`.substr(2)); // log   - Get A partir desse ponto
console.log(`/blog`.substring(2)); // log   - Get A partir desse ponto
console.log("Geraldo".substring(1, 5)); //eral
console.log("Geraldo".substr(1, 5)); //erald
console.log("Geraldo".substring(0, 5)); //eral
console.log("Geraldo".substr(-4)); //Geraldo -4 letras da direita para esquerda => aldo
console.log("JavaScript".substr(-6)); // Script
console.log("Feriado".substr(-2)); // /do
console.log("JavaScript".substr(-5, 1)); // c
console.log("JavaScript".substr(-3, 2)); // ip
console.log("JavaScript".substring(2, -1)); // Ja


/* [=============================================================================]
🟢 10 - Math //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
//recomendo ler http://devfuria.com.br/javascript/numeros-aleatorios/
*/
Math.round = arredonda para cima ou para baixo
Math.ceil = arredonda sempre para cima
Math.floor = arredonda para baixo
Math.pow(2,16)
 function po(a,b){
         return console.log(Math.pow(a,b));
     }

//gerar números randômicos
Math.random();
Math.floor(Math.random() * 10); // 0 - 10
Math.floor(Math.random() * 5 +1); // 0 - 5

Math.PI

//📌Math.max() returns the number with the highest value:
const a = [1,2,3,4];
console.log(Math.max(...a));

const ages = [12, 3234, 54, 34];
console.log(Math.max(1, 2, 3, 4)); //4
console.log(Math.max(ages)); // NaN
console.log(Math.max(...ages)); //3234

//📌usando apply:null
const num = [1,2,3,4];
console.log(Math.max.apply(null, num));

//📌 for of by gmap
const arr = [1,2,3,4];
let n = ''
for(const i of arr){
  n = Math.max(i);
}
console.log(n); //4

/* [=============================================================================]
🟢 11 - pads
padStart - define o tamanho minimo, e adiciona um complemento caso não tenha o mínimo
padStart or end se baseia em dois parâmetros:

- padLength
- padString - opcional , suporta string/number
*/

let str = "1234".padStart(10,"*");
console.log(str);

let cpf = "083".padStart(11,0);
console.log(cpf);


// padEnd() e.g string truncada
let str2 = "1234567".padEnd(10,"Hello");
console.log(str2);

// Imported from READ.ME
<summary>toString, toFixed, toPrecision, toUpperCase, toLowerCase, parseInt, toLocaleString</summary>
<a href="https://codepen.io/geraldopcf/pen/PoRVXQB" target="_blank">CodePen</a>

/*
<h2>toString converter</h2>
<form>
  <label for="number">Number:</label>
  <input type="number" />
</form>
<div>Binary: <span id="res"></span></div>
<div>Hex: <span id="hex"></span></div>
*/


// #toFixed depois da virgula
console.log(Math.PI.toFixed(2)); // 3.14

// #toPrecision
console.log(Math.PI.toPrecision(2)); //3.1

// #toUpperCase and toLowerCase
let firtName = "Geraldo";
console.log(firtName.toUpperCase()); //GERALDO
console.log(firtName.toLocaleUpperCase()); //GERALDO

/*
The locale is based on the language settings of the browser.

Generally, this method returns the same result as the toLowerCase() method. However, for some locales, where language conflict with the regular Unicode case mappings occurs (such as Turkish), the results may vary.
*/

console.log(firtName.toLowerCase()); //geraldo
console.log(firtName.toLocaleLowerCase()); //geraldo

// #toString
//https://linuxhint.com/javascript-tostring-method/
let age = 29;
console.log(typeof age); //number

let aget = age.toString();
console.log(typeof aget); //now is a string

// decimal to binary
(2022).toString(2); // '11111100110'

//parseInt binary to decimal
parseInt(1111, 2); // 15

//convert to base(2) binary
const ipnumber = [192, 168, 100, 200];
let binary = ipnumber.map((value) => value.toString(2));
console.log(binary); //[ '11000000', '10101000', '1100100', '11001000' ]

//Also support base(8) octal , base(16) hexadecimal

//Array
console.log([1, 2, 3, 4].toString());

//Moedas
//https://franciscochaves.com.br/blog/formatacao-de-moedas-em-javascript
var atual = 600.0;
var saldo = 2000;

var f = atual.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
var g = saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
console.log(f); //R$ 600,00
console.log(g); //R$ 2.000,00