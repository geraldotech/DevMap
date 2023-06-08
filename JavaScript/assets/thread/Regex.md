# Regex

## Expressões Regulares

[Expressões_Regulares](https://ricardo-reis.medium.com/express%C3%B5es-regulares-javascript-295da6deaee7)
[o-tipo-string-no-javascript](https://ricardo-reis.medium.com/o-tipo-string-no-javascript-e3fb621856d1)
[expressoes-regulares-regex](https://ricardo-reis.medium.com/express%C3%B5es-regulares-regex-58052f54a875)

- replace()
- match() - retornará nulo se não encontrar nenhuma correspondência
- search() - aceita uma expressão regular e retorna a posição da string em que a primeira correspondência foi encontrada. Caso nenhuma correspondência seja encontrada, ele retornará -1.

```js
let re = new RegExp(/hi/);
let res = re.test("hi geraldo");
console.log(res); // true

//Para ignorar  maiúsculas ou minúsculas, você usa o sinalizador i, dessa forma:

let re2 = new RegExp(/hi/i);
console.log(re2.test("HI Geraldo")); // true

//sem usar new RegExp
let rex = /hi/gi;
console.log(rex.test("hello there hi")); //true

// Global and I
let message = "Hi, are you there? hi, HI...";
let myres = /hi/gi;

console.log(myres.test(message)); //true

let matches = [];

let match;
do {
  match = myres.exec(message);

  if (match) {
    matches.push(match);
  }
} while (match != null);

console.dir(matches);
console.log(message[19], message[23]); // h H

// Procurar strings
let tech = "Are you Ok?, Apple Google Microsoft, I'm OK";
let ares = tech.match(/OK/gi);
console.log(ares); // ['ok', 'OK']
```
