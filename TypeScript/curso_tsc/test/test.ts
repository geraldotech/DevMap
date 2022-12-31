//type annonation é quando definimos o dado manualmente
//type inferecence é quando o ts define de forma automática

//Os dados primitivos são => string, number and boolean;


function somar(a:number, b:number){
    console.log(`${a + b}`);
}
somar(1,2);
console.log(Math.PI.toFixed(2)); //depois da virgula
console.log(Math.PI.toPrecision(2)); //all numbers

const arr:number [] = [1,2,3,4];
const arr2:string [] = ['a','b','c'];
const arr3:Array<number> = [12,3,23];
const arr4:Array<string> = ['G','X','H'];

//7
const miarr:(number | string) [] = [123,23,'s','d','123'];
const miarr3:Array <string | number > = [123,'w','op'];

function algo(a:number | string){
    console.log(`${a}`);
}

algo('as');
algo(123);

function tem(a:number,b:string,c?:boolean){
    if(c){
        console.log(`${a} : ${b} : ${c}`);
        return;
    }
    console.log(`${a} : ${b}`);
}

tem(12,"12",true);
tem(12,"12");


type cad = number | string;

type cad2 = boolean;

function tipo(x: cad, y:cad2){
    console.log(`${x} : ${y}`);
}

tipo(2022,true);
tipo('sim',false);

const person:{name:string, age:number} = {name:"Feli",age:2022};
console.log(person);

var person2:{char:string, resets: number};

var pessoa = person2={char:"ORO",resets:200};

console.log(pessoa);


interface free {
    name: string
    vip: boolean
}

function mugnn(obj:free){
    console.log(`${obj.name} | ${obj.vip}`);
}

let cell:free = {name:"MG",vip: true};

mugnn(cell);


interface myobj {
    id: number
    rua: string
}

let end:myobj = {id:123, rua:"Paranapiacaba"};

console.log(end);




class Char {
    name
    resets
    vip

    constructor(name:string, resets: number, vip: boolean){
        this.name = name;
        this.resets = resets;
        this.vip = vip;
    }
}

function showit(obj: Char){
    console.log(`${obj.name} : ${obj.resets} : ${obj.vip}`)
}


let novo = new Char ("OROCHI", 2000, true);

showit(novo);






