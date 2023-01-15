//forma iterativa

let some = 0;
const arr = [1, 2, 3, 4];
for (const i of arr) {
  some += i;
}

//👉forma recursiva
const arr2 = [10, 12, 18, 20];
function soma(array, n) {
  if (n == 0) return 0;
  return array[n - 1] + soma(array, n - 1);
}
console.log(soma(arr2, arr2.length));
//👉
function diminui(num) {
  if (num < 0) return;
  console.log(num);
  diminui(num - 1);
}
diminui(5);

//👉
let a = [5, 15, 10, 20];
function calc(arr) {
  if (arr.length == 0) return 8;
  else return arr.pop() + calc(arr);
}

console.log(calc(a)); //58

//👉iterativa
let somar = 0;
for (i = 0; i < a.length; i++) {
  somar += a[i];
}
console.log(somar); //50
//fibonnac
function fibonnac(n) {
  if (n < 2) return 1;
  return fibonnac(n - 1) + fibonnac(n - 2);
}
/*
  
  */
console.log(fibonnac(5));
