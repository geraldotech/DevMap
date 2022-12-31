# 👉Operadores de atribuição aritmética:

# +=, -=, \*=, /= e %=

      Usando Operadores para alterar o valor das variáveis
      https://www.javascriptprogressivo.net/2018/12/Operadores-Atribuicao-Como-Usar.html?m=1

```js
//e.g x + y qual valor resultado adicionando o novo valor dentro do p´roprio x, substritindo o valor anterior de x?

let [x, y] = [2, 8];
//x = x + y; // é o mesmo que usar *=😀
x += y; //😎
console.log(x); //10

let [z, a] = [2, 8];
z -= a;
console.log(z); // -6

let [q, s] = [2, 8];
q /= s;
console.log(q); //0.25

let g = 30;
g %= 2;
console.log(g); //0

let [x2, y2] = [10, 1];
//x2 = y2++; //👍nesse ponto x2 perdeu seu oldValue e agora tem 1 como valor
//x2 = ++y2; //👍 Primeiro y se incrementa e passa a valer 2 e depois x recebe esse valor ambos valem 2
//x2 += ++y2; // qual valor? x2 pega o valor de 2 e soma com seu oldvalue 10, agora x2 = 12 e y2 = 2
//x2 = --y2; // ambos 0
x2 += --y2; // x2 permanece com 10 pq y2 decrementou para 0
console.log(x2, y2);
```

More examples:

```js
let n = 5;
n++;
console.log(n); //6
n = n + 2;
console.log(n); //8
n += n;
console.log(n); //16
n += 4 + n;
console.log(n); //20

let a = 2;
a = a * a;
console.log(a); //4

let b = 5;
b *= 5;
console.log(b);

let saldo = 100;
saldo /= 2;
console.log(saldo); //50
saldo = saldo / 2;
console.log(saldo); //25

saldo = saldo += 5;
console.log(saldo); // 30

saldo %= 2;
console.log(saldo); //0

console.log(saldo); //0
```
