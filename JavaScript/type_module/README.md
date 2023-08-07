# Type module

- works only in web servers

- main.js must be type `module`

```js
<script type="module" src="./src/main.js"></script>
```

# export default inicio

```js
export default function techs() {
  const arr = ["JavaScript", "TypeScript", "VueJS"];
  return arr;
}
```

main.js

```js
import tecnologias from "./tech.js";
console.log(tecnologias());
```

Multiples ? não funciona, return:
`Uncaught SyntaxError: Duplicate export of 'default`

# export default no final

```js
const brazilStates = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará"];

export default brazilStates;
```

main.js import e pronto para usar

> Caso deseje saiba que o export default permite personalizar o nome do import

```js
import estados from "./estados.js";
console.log("log", estados);
```

Tudo ok e no caso de mais consts ?

```js
const brazilStates = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará"];
const cities = ["RJ", "Maceio", "SP"];
export default { brazilStates, cities };
```

A saída será todos os Arrays, poderá acessar individualmente assim:

```js
console.log(estados.brazilStates);
```

# export {nomeExato, nomeExato2} "sem default"

De início declarando o export vamos criar outro arquivo:

list.js uma function que retona uma string

```js
export function listaA() {
  let A = "Alpha";
  return A;
}
```

main.js o import deve estar {entre} e usar "nome exato"

```js
import { listaA } from "./list.js";
console.log(listaA());
```

To export multiple variables:

```js
export function listaA() {
  let A = "Alpha";
  return A;
}
export const Aircrafts = "A320";
```

```js
import { listaA, Aircrafts } from "./list.js";
console.log(listaA());
console.log(Aircrafts);
```

# Nested

Concatenando string entre módulos `irmãos`

airplan.js

```js
const modelos = `Airbus A380, Boeing 747, Airbus A340, Boeing 777`;
export default modelos;
```

No list.js import...

```js
import modelos from "./airplan.js";
export const Aircrafts = "A320 " + modelos;
```

main.js

```js
import { listaA, Aircrafts } from "./list.js";
console.log(listaA());
console.log(Aircrafts);
```

👉saída esperada:

- `Alpha`
- `A320 Airbus A380, Boeing 747, Airbus A340, Boeing 777`

- e.g functions params: [https://javascript.info/modules-intro](https://javascript.info/modules-intro)