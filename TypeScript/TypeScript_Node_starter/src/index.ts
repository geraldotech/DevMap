let age:number = 30;
let name:string = "Mark";
console.log(`My name is ${name}, I am ${age} years old!`);

let Numbers: Array<number> = [1,2,3,4];

console.log(Numbers.reduce((total, val) => total+= val));