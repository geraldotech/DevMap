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


//Spread Operators ...
const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];
const pizzas = [...featured,'vegan',...specialty];

console.log(pizzas); // (7) ['Deep Dish', 'Pepperoni', 'Hawaiian', 'vegan', 'Meatzza', 'Spicy Mama', 'Margherita']


const arr = [1,2,3,4];
const arr2 = [5,6,7,8,9,10];
console.log(...arr,...arr2); // 1 2 3 4 5 6 7 8 9 10


//see more https://www.youtube.com/watch?v=j3bXlt3NOZA

// https://dev.to/sagar/three-dots---in-javascript-26ci

// https://javascript.info/destructuring-assignment