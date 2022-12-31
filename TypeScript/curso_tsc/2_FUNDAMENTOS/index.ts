console.log("PAIR PROGRAMIMING")
//Tipos primitivos são number, string, boolean

// number
let x:number = 10;

console.log(x)

x = 15;
console.log(typeof x)

const y:number = 15.2334
console.log(typeof y)
console.log(y.toPrecision(3))
console.log(y.toFixed(3))

console.log(Math.PI.toFixed(2))
console.log(Math.PI.toPrecision(2))

// string

const firtName: string = "Geraldo";

console.log(firtName.toUpperCase())
console.log(firtName.toLowerCase())

const lastName:string = "Filho";

let fullName: string

fullName = firtName + " " + lastName;
console.log(fullName)

// Boolean - valores booleanos true or false
let a:boolean = false;

console.log(a)
console.log(typeof a)

a = true
console.log(a)



/// inference e annotation

const ann:string = "test";

let inf = "Ola";

//4 - parametros tipados

function somar(a: number,b: number){
    console.log(a,b)
}

somar(4,2)








