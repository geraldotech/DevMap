//1
const app = document.createElement("div");
app.setAttribute("id","app");
app.textContent = "Hi mon!";
document.body?.appendChild(app);

//2 type annotation é quando definir o dado manualmente
//type inference é quando o TypeScript define de forma automatica

//3 number, string and boolean

//4 
function somar(a:number, b:number){
    console.log(`${a + b}`)
}
somar(2,4)

//5
console.log(Math.PI.toFixed(2)); //depois da virgula
console.log(Math.PI.toPrecision(2)) //todos os numbers

//6
const arr:number [] = [1,2,3,4];
const arr2:Array <number> = [5,6,7,8,9,10];
console.log(...arr)
const arr3:string [] = ["a","b","c"];

//see more https://www.youtube.com/watch?v=j3bXlt3NOZA

// https://dev.to/sagar/three-dots---in-javascript-26ci

//Spread Operators ...
const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured,'vegan',...specialty];

console.log(pizzas); 


//Rest Parameters
// allow you to pass in an indefinite number of arguments into a function.
function restp(...args){    
    console.log(args);
}
restp(1,2,3,6,9);


//somar infiny numbers
function add(...num){
    let total = 0;
    for(const n of num){
        total += n;
    }

    return total;
}
const res = add(5,6,9,8,7,3,12);
console.log(res) //50

//more params
function add2(a,b,...num){
    console.log(a); //1
    console.log(b); //2
    console.log(num); // 20 + 30 = 50
    let total2 = 0;

    for(const n2 of num){
        total2 += n2;
    }

    return total2;
}
const res2 = add2(1,2,20,30);
console.log(res2) // 1,2 20+30 = 50







