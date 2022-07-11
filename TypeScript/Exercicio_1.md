# TypeScript

###### Array[2] = Fazer Array 2 sintaxe

[Oficial](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)
>>Load HTML first add defer like:


1.Fazer uma `div#app` e adicionar um elemento com um Hello Word!
<details>
<summary>res</summary>
&lt;div id="app"&gt; &lt;/div &gt;
<pre>
const app = document.getElementById('app');
const p = document.createElement("p");
p.textContent = "Hello Word PEOPLE!";
app?.appendChild(p);
</pre>
</details>
2. O que é o Type Annotation e Type Inference?
<details>
<summary>res</summary>  

- Type Annotation:
é quando definimos o tipo de dados manualmente.

- Type Inference:
é quando o TS identifica e define o tipo de dados para nós.
 
</details>  
3. Quais os tipos de dados primitivos?
<details>
<summary>res</summary>  
<code>boolean, string and number</code>
</details> 
4. Fazer uma função de soma com parametros tipados
<details>
<summary>res</summary>  
<pre>
function somar(a:number, b:number){
    return console.log(a + b);
}
somar(2,2)
</pre>
</details> 
5. `Math.PI` use  toFixed and toPrecision 
<details>
<summary>res</summary>  
<pre>
console.log(Math.PI.toFixed(2)); //depois da virgula
console.log(Math.PI.toPrecision(2)) //todos os numbers
</pre>
</details>    
6. Fazer Array de numbers e string, use as 2 sintaxe:
<details>
<summary>res</summary>  
<pre>
const ages:number [] = [1,2,3];
const year: Array<number> = [2008,2005];
console.log(ages.concat(year))

const names:string [] = ["A","B","C"];
const foo: Array<string> = ["Type","Script"];
console.log(names.concat(foo))
</pre>
</details>
7. Exemplo de Union Types em function e em Array[2]
<details>
<summary>res</summary>  
<pre>
function saldo(balance: number | string){
    console.log(`Meu saldo é ${balance}`);
}
saldo(2)
saldo("200")
</pre>
Array:
<pre>
const arr:(number | string) [] = [1,"Geraldo"];
const alba:Array<number | string> = [5,"zeta"];
console.log(alba)
arr.push("5555")
console.log(arr)
</pre>
</details>   
8. Validando argumento opcional - validação de props opcionais, removendo mensagem de undefined
<details>
<summary>res</summary>  
<pre>
function meusum(a:number, b?:number){
    if(b != undefined){
        return   console.log(`${a} e ${b}`)
    }
    return console.log(`${a}`)
}

meusum(5,9)
</pre>
</details>
9. Type alias "taipi elias" recurso opcional mais fácil de chamá-lo em vez de criar expressões complexas com Union types
<details>
<summary>res</summary>  
<pre>
type ID = number;
type N = string;


function somar(a: ID, b:N){
    return (a+b)
}
console.log(`${somar(2,"G")} yes man`)
</pre>
</details>    
10. Exemplo de objeto tipado string+number
<details>
<summary>res</summary>  
<pre>
const person:{name:string, age:number} = {name:"Geraldo", age:29};
console.log(person)
</pre>
<pre>
var person:{name:string, age:number};
var person2 = person={name:"Geraldo", age:29};

console.log(person2)
</pre>
</details>   
11. Fazer 2 exemplos  com interfaces (function e objet)
Muito usado em React é um assunto muito importante!
- Uma outra maneira de nomear um tipo de objeto;
- Podemos determinar um nome para o tipo;
- E também escolher quais as propriedades e seus tipos;
*/
<details>
<summary>res</summary> 
function: 
<pre>
interface free {
    x: number,
    y: number
}
function mult(obj:free){
    console.log(`${obj.x * obj.y}`)
}
const all:free = {x: 5, y: 9}
mult(all)
</pre>
object:
<pre>
interface pre {
    name: string
    age: number
}
let myself:pre = {name:"Geraldo",age:29};
</pre>
</details>  
12. Exemplo de class with contructor: 
<details>
<summary>res</summary>  
<pre>
class User {
    name
    role
    isApproved
    constructor(name: string, role:string, isApproved: boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
}
const costa = new User("Geraldo","admin",true);
console.log(costa)
</pre>
</details>      