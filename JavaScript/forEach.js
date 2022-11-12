// 1 - forEach alone function

const arr = [1, 2, 3, 4];
var sum = 0;
function add(x) {
  sum += x;
}
arr.forEach(add);
console.log(sum); //10

//2 forEach function includes

const mm = [1, 2, 3, 4];
var val = 0;
mm.forEach((value) => (val += value));
console.log(val); //10

//3 operadores [+] [-] [*] [/] [**]
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function multiplicar(y) {
  console.log(y * 2);
}
num.forEach(multiplicar); //2,4,8,10,12,14,16,20

//4 display ind and ele
num.forEach((ele, ind) => console.log(ind + ":" + ele));
