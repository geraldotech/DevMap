# ReactJS

```js
$ npm install -g create-react-app

//Inside directory:
$ npx create-react-app@5.0.0 my-app
$ npx clear-npx-cache

//Command terminal VScode iniciar server:
$ npm run start

//# 📌CTRL + ” (aspas) abrir terminal
```

1 - Button on click change text, tudo na page App.js

#import:
`import { useState } from "react";`

#in App.js

```js

//::before return
function handleClick() {
  setSrt("olá pessoas");
  console.log("hii");
}
const [str, setSrt] = useState("Ola Mundo");

//::inside retorn
<h1>{str}</h1>
<button onClick={() => handleClick()}>click here</button>
```

Full code => [gist.github.com](https://gist.github.com/geraldotech/041a1ab161bd36112d591f391397a20a#file-app-js)

## Componentes

> primeira letra maiuscula

- create => Mybody.js with:

```js
import React from "react";
const Mybody = () => {
  return <h2>Meu body title</h2>;
};
export default Mybody;

//ou export default de inicio
export default function TodoList() {
  return (
    <div>
      <p>todo </p>
    </div>
  );
}

```

Não esquecer de import from React e depois declarar export this Mybody Por fim import Mybody no App.js

`import Mybody from './Mybody';`

and just call ` <Mybody />`

# Props

Passar o parâmetros props + custom name

```js
import React from "react";
const Mybody = (props) => {
  return <h2>Super {props.conteudo}</h2>;
};
export default Mybody;

//then
<Mybody conteudo="Sunday!!" />;
```

## Multi Props

Pay for Attention AGORA PRECISA ENCAPSULAR COM `<div>` e return ()

```js
import React from "react";
const Mybody = (props) => {
  return (
    <div>
      <h2>Super {props.conteudo}</h2>
      <p>YouTube {props.category}</p>
    </div>
  );
};
export default Mybody;

//Alternativa usar <> Thanks Web Dev Simplified
function App() {
  return (
    <>
      <TodoList />
      <input type="text" />
    </>
  );
}
```
