# Regex

## Expressões Regulares

- [x] replace()
- [x] match() - retornará nulo se não encontrar nenhuma correspondência
- [x] search() - aceita uma expressão regular e retorna a posição da. string em que a primeira correspondência foi encontrada. Caso nenhuma correspondência seja encontrada, ele retornará -1.

Uma expressão regular é uma string (sequência de caracteres) que possui um padrão... [leia mais aqui](https://ricardo-reis.medium.com/express%C3%B5es-regulares-javascript-295da6deaee7)

## Criando uma expression regular:

```js
// padrão entre os caracteres de barras /, dessa forma:
let rex = /hi/gi

//ou pode usar o construtor RegExp
let re = new RegExp(/hi/)
```

### Testar se existe correspôndencia:

o objeto `RegExp` possui muitos métodos úteis. Um deles é o método test(), que permite testar se uma string contém uma correspondência do padrão da expressão regular.
O método `test()` retorna true se o argumento da string contiver uma correspondência.

```js
let rex = /hi/gi
console.log(rex.test('hello there hi')) //true
```

### Marcadores de padrão

o objeto RegExp também aceita um parâmetro opcional de marcação. Marcadores são configurações que alteram o comportamento da pesquisa.

1. marcador de ignorar `i` ignora se as letras são maiúsculas ou minúsculas durante a pesquisa.

```js
let rex = /hi/i
console.log(rex.test('Hi Gerald')) //true

//usar o marcador de padrão no construtor RegExp:
let res = new RegExp('hi', 'i')
console.log(res.test('Hi Gerald')) //true
```

2. marcador global `g` sem este o RegExp verifica apenas se há uma correspondência em uma string e retorna somente a primeira.

Sem o marcador global, o objeto RegExp verifica apenas se há uma correspondência em uma string e retorna somente a primeira.
Quando o marcador g está presente, o objeto RegExp procura por todas as correspondências e retorna todas elas. [leia mais aqui](https://ricardo-reis.medium.com/express%C3%B5es-regulares-javascript-295da6deaee7)

### exec()

O método exec() do RegExp realiza uma pesquisa por uma correspondência em uma string e retorna um array que contém informações detalhadas sobre a correspondência.

```js
let message = 'Hi, are you there? hi, HI...'
let myres = /hi/gi
let matches = []

let match
do {
  match = myres.exec(message)

  if (match) {
    matches.push(match)
  }
} while (match != null)

console.dir(matches) // Array(3)
console.warn(message[0]) //H
console.warn(message[19]) //h
console.warn(message[23]) //H
```

### Get onlyBarras with loop

```js
//via: https://stackoverflow.com/questions/16657152/matching-a-forward-slash-with-a-regex
let url = 'https://github.com/geraldotech/DevMap'
let res = /\//gi
//esquecer o /gi trava tudo!

let matches = []
let match
do {
  match = res.exec(url)
  if (match) {
    matches.push(match)
  }
} while (match != null)

console.log(`matches slash`, matches)
console.log(
  `matches slash`,
  matches.map((v) => v.index)
) // get only index
```

### Get words procedido por /barra

```js
const myurl = 'https://github.com/geraldotech/DevMap/oneTest'
const myregx = /[/](\w+)/gi
const results = myurl.match(myregx)

console.log(results)
console.log(results[1]) // GitUserName is index one /geraldotech
const userName = results[1] //const get index[1]

//getUserName only
console.log(userName.charAt(1) + userName.substr(2)) //geraldotech
```

### Links:

- [o-tipo-string-no-javascript](https://ricardo-reis.medium.com/o-tipo-string-no-javascript-e3fb621856d1)
- [expressoes-regulares-regex](https://ricardo-reis.medium.com/express%C3%B5es-regulares-regex-58052f54a875)
