```js
// forma iterativa

let some = 0
const arr = [1, 2, 3, 4]
for (const i of arr) {
  some += i
}

//👉 forma recursiva

const arr2 = [10, 12, 18, 20]
function soma(array, n) {
  if (n == 0) return 0
  return array[n - 1] + soma(array, n - 1)
}
console.log(soma(arr2, arr2.length))


//👉
function diminui(num) {
  if (num < 0) return
  console.log(num)
  diminui(num - 1)
}
diminui(5)

//👉
let a = [5, 15, 10, 20]
function calc(arr) {
  if (arr.length == 0) return 8
  else return arr.pop() + calc(arr)
}

console.log(calc(a)) // 58

//👉 iterativa
let somar = 0
for (i = 0; i < a.length; i++) {
  somar += a[i]
}
console.log(somar) //50

// fibonnac
function fibonnac(n) {
  if (n < 2) return 1
  return fibonnac(n - 1) + fibonnac(n - 2)
}

console.log(fibonnac(5)) // 8


let a = [5,15,10,20]

function calc(arr){
  if(arr.length == 0)
  return 8
  else
  return arr.pop() + calc(arr)
}

console.log(calc(a))

// app diminui determinado numero, e.g 5, 4, 3, 2, 1... porém 4 é o mesmo que 👉 5 myfun(num - 1), myfunc(num -1) seria 4 e assim por diante
function diminui(num){
  //condição de saida para evitar infinity loop
  if (num < 0) return
  console.log(num)
  return diminui(num - 1)
}
diminui(5)

// recursive
function foo(n){
  if(n > 1){
    return n * foo(n -1)
  }
  return n
}

console.log(foo(4)) // 24

primeira chamada:
n = 4
n * fun(n - 1) 👉 4 x 3 = 12
return: fun = 12 e n = 3

segunda chamada:
n = 3 porém na call -1 então n = 2

n * fun(n - 1) 👉 2 x 12 = 24
return: fun = 24 e n = 2

terceira chamada:
n = 2 porém  na call n = 1
fun(n - 1) 1 > 1 is false return n

resumo: 4 x 3 = 12 👉 2 * 12 = 2


// iterative
function foo2(n) {
  let result = 1;
  console.log(result)
  for (let i = 2 ; i <= n; i++) {
    result *= i;
    console.log(i, result)
  }
  return result;
}
console.log(foo2(4))  // 24

result *= 1 x [2] = 2 👉 2 x [3] = 6 👉
6 x [4] = 24
```
