//start array in 1 && undefined vs null
//no html undefined não seria mostrado
let arz = [,1,2,3];

console.log(arz[0]); // undefined
console.log(arz[1]); //1
console.log(arz[2]); //2

let arh = [null,1,2,3];
console.log(arh[0]); // null
console.log(arh[1]); // 1 
console.log(arh[2]); // 2


let ages = [1,2,3,4];
ages.splice(0,1)
console.log(ages[0]); //2


