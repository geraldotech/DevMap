// 1 - Arrays
let numbers: number [] = [1,2,3];

numbers.push(4)

console.log(numbers[2])

const names: string [] = ["Geraldo","Costa"];

console.log(names)

// 2 - outra sintaxe array

const arr: Array<number> = [100,5,23,5];
console.log(arr[0])

// 3 - any

const arr1:any = ['test',1,{nome:"Geraldo"}]

console.log(arr1)

arr1.push([1,2,3])

console.log(arr1)


// 4 - parametros tipados

function somar(a: number,b: number){
    console.log(a + b)
}

somar(4,2)

// 5 - tipo de retorno de funções

//bloquear esse tipo de retorno numero add :string afer ()
//function greeting(name:string):string {
function greeting(name:string):string{    
    return `Ola ${name}`
}
console.log(greeting("Geraldo"))


// 6 - função anonima
setTimeout(function(){

    const salarry:number = 1000;
//console.log(parseFloat(salarry))
//console.log(salarry)

},2000)

// 7 - tipos de objeto
function passCoordinates(coord:{x: number, y: number}){
    console.log("X coordinates: "+ coord.x)
    console.log("Y coordinates: "+ coord.y)
}

const ObjCoord = {x: 329, y:84.2};

passCoordinates(ObjCoord)

const pessoaObj:{nome:string, surname:string} = {nome: "Geraldo", surname:"Filho"}
console.log(pessoaObj)

// 8 - Propriedades opcionais
/*
Para ter esse resultado devemos colocar uma interrogação:
{nome: string, sobrenome?: string}
*/

function showNumbers(a:number, b:number, c?:number){
    console.log("A: " +a)
    console.log("B: " +b)
   if(c){  //se tiver C imprime // isso tbm remove a mensagem de undefined
    console.log("C: " +c)
   }
}

showNumbers(1,2,3)
showNumbers(1,2) //sem erros pq ao adicionar ? define que o C é opcional

// 9 - validando argumento opcional - validação de props opcionais

function advancedGreeting(firstName:string, lastName?:string){

if(lastName !== undefined){
 return (`Olá, ${firstName} ${lastName}, tudo bem?`)
}

return (`Ola, ${firstName}, tudo bem?`)

}

console.log(advancedGreeting("Geraldo","Filho"))
console.log(advancedGreeting("Felipe"))

// 10 - Union types exclusivo do TS
/*
- O Union type é uma alternativa melhor do que o any;
- Onde podemos determinar dois tipos para um dado;
- Onde podemos determinar dois tipos para um dado;
A sintaxe: number | string
*/

function showBalance(balance: string | number){
    console.log(`o saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")

const arr2: Array<number | string | boolean> = [1,"tes"];

const arr9:(number | string) [] = [1,"Geraldo"];
/*
11 - Avançando em union types

- Podemos utilizar condicionais para validação do tipo de union types;
- Com isso é possível trilhar rumos diferentes, baseado no tipo de dado;
-  Para checar o tipo utilizamos typeof; */

function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuario não aprovado"
    }
    return `A função do usuário é ${role}`
}

console.log(showUserRole(true));
console.log(showUserRole("Admin"));

/*
12 - Type alias (talk: "taipi elias")

Type alias é um recurso que permite criar um tipo e determinar o que ele verifica Desta maneira temos uma maneira mais fácil de chamá-lo em vez de criar expressões complexas com Union types, por exemplo;
*/

type ID = string | number

function showId(id: ID){
    console.log(`O ID é ${id}`)
}
showId(1)
showId("300")

type IP = string

function showIP(ip: IP){
    console.log(`Meu IP: ${ip}`)
}
showIP("192.168.0.5");

//13 - Interfaces 
/*
Muito usado em React é um assunto muito importante!
- Uma outra maneira de nomear um tipo de objeto;
- Podemos determinar um nome para o tipo;
- E também escolher quais as propriedades e seus tipos;
*/
interface Point {
    x:number
    y:number
    z:number
}

function showCoords(obj:Point){
console.log(`X: ${obj.x} Y:${obj.y} Z:${obj.z}`)
}

const coordObj:Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj);

//14 interfaces vs type alias
/*
- Na maioria das vezes podemos optar entre qualquer um dos recursos
sem problemas;
- A única diferença é que a Interface pode ser alterada ao longo do 
código, já o alias não;
- Ou seja, se pretendemos mudar como o tipo se conforma, devemos escolher a Interface
*/

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Geraldo", age: 29};

console.log(somePerson)

type persontype = {
    name:string
}

/*
15 - Literal types

- é um recurso que permite colocar valores como tipos;
- Isso restringe o uso a não só tipos, como também os próprios valores;
- Este recurso é muito utilizado com Union types
_double check_
*/


//não tem muito nexo
let test: "testando"
test = "testando"
console.log(test)


//e.g com Union Type
function showDirection(direction: "left" | "right" | "center"){
console.log(`A direção é: ${direction}`)
}

showDirection("left")

/*
16 - Non-null Assertion Operator

Às vezes o TypeScript pode evidenciar um erro, baseado em um valor que no momento do código ainda não está disponível
Porém se sabemos que este valor será preenchido, podemos evitar o erro;
Utilizamos o caractere !
*/

const p = document.getElementById("some_p");

console.log(p.innerText)
console.log(p!.innerText)

/*
17 - Bigint
Com o tipo bigint podemos declarar números com valores muito altos;
- Podemos utilizar a notação literal, exemplo: 100n
- Para este recurso precisamos mudar a configuração do TS, para versão mínima de ES2020
*/


