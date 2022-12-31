/*
Narrowing é um recurso de TS para identificar tipos de dados;
*/

// 1 type guard
/*
O type guard é basicamente uma validação do tipo utilizando o typeof;
● Desta maneira podemos comparar o retorno do operador com um 
possível tipo;
● Todos os dados vem como string, exemplo: “string”, “number”, 
“boolean
*/

function sum(a:number | string, b: number | string){
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number"){
        console.log(a + b)
    } else {console.log('impossivel realizar a soma')}
}
sum("2","2");
sum(24,2);
sum(2,"2");

/* 2 - Checando se valor existe
*/

function operations(arr: number [], operation?: string | undefined){
    if(operation){
        if(operation === "sum"){
            const sum = arr.reduce((i, total)=> i + total);
            console.log(sum)
        } else if(operation === "multiply"){
            const mul = arr.reduce((i, total)=> i * total);
            console.log(mul)
        }
    }else {
        console.log("definir uma operacao");
    }
}

operations([1,2,3,4], "sum");
operations([1,2,3,4], "multiply");

// 3 - Operador instanceof
/* 
Para além dos tipos primitivos, podemos trabalhar com instanceof
Checando se um dado pertence a uma determinada classe;
E ele vai servir até para as nossas próprias classes;
*/

class User {
    name
    constructor(name: string){
        this.name = name;
    }
}

class SuperUser extends User{
    constructor(name:string){
        super(name)
    }
}

const john = new User ("John");
const eu = new SuperUser("Geraldo");

console.log(john)
console.log(eu)

function userGreeting(user: object){
    if(user instanceof SuperUser){
        console.log(`Olá, ${user.name} your is Admin Premium`)
    } else if (user instanceof User){
        console.log(`Olá, ${user.name}`)
    } 
}

userGreeting(eu)
userGreeting(john)

// 4 - operador in
// O operador in é utilizado para checar se existe uma propriedade no objeto

class Dog{
    name
    breed

    constructor(name:string, breed?:string){
        this.name = name;
        if(breed){
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca");
const dod = new Dog("Bob","Pastor Alemão");


function showDogDetails(dog: Dog){
    if('breed' in dog){
        console.log(`O cachorro é da raça ${dog.breed}`);
    } else {
        console.log(`O cachorro é um srd`);
    }
}
showDogDetails(turca);
showDogDetails(dod);

//ts é preencher os requisitos que a gente mesmo difinou


