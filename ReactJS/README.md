# ReactJS

```js
// creating app after installed Node:
$ npx create-react-app <myappname>


$ npm install -g create-react-app

//Inside directory:
$ npx create-react-app@5.0.0 my-app
$ npx clear-npx-cache

//Command terminal VScode iniciar server:
$ npm run start

```

JSX interpolation strings, import CSS Styles and functions

```jsx
import './App.css'
import './foo.css' // creating and import this

function App() {
  const name = 'Geraldo'
  const url = 'https://via.placeholder.com/100'

  function sum(a, b) {
    return a + b
  }

  return (
    <div className="App">
      <h1 className="notion">Ola React</h1>
      {/*  using this CSS clas */}

      <p>Hello {name.toUpperCase()}</p>

      <p>{sum(5, 3)}</p>

      <img src={url} alt="my img  " />
    </div>
  )
}

export default App
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

//::inside return
<h1>{str}</h1>
<button onClick={() => handleClick()}>click here</button>
```

Full code => [gist.github.com](https://gist.github.com/geraldotech/041a1ab161bd36112d591f391397a20a#file-app-js)

## Components

> primeira letra maiuscula

`src/componentes > create a HelloWord.js`

assim como no Vue wrapper - embrulhar, enrolar usando uma div, main... porém geralmente é uma div

```js
// v1
import React from "react"; // ainda precisa dessa line?
const Mybody = () => {
  return <h2>Meu body title</h2>;
};
export default Mybody;

// v2 ou export default de inicio
export default function TodoList() {
  return (
    <div>
      <p>todo </p>
    </div>
  );
}

// v3
`src/componentes > create a HelloWord.js`

function HelloWord(){
return (
<div>
<p>Hello from component</p>
</div>
)
}
export default HelloWord;   // fazer o export
```

import `App.js`

```jsx
import './App.css'
import HelloWord from './components/HelloWord'

function App() {
  return (
    <div className="App">
      <HelloWord />
    </div>
  )
}

export default App
```

# Props

> propriedades

passado como atribudo como um tag, comparando com html: `<img src="" alt="" />`

Create a file `SayMyName.js`

```js
function SayMyName(props) {
  return (
    <div>
      <p>Fala ai {props.nome} !!</p>
    </div>
  )
}
```

App.js

```jsx
import SayMyName from './components/SayMyName'

function App() {
  const name = 'Filho'

  return (
    <div className="App">
      <HelloWord />
      <SayMyName nome="Geraldo" />
      <SayMyName nome="Costa" />
      <SayMyName nome={name} /> // dynamic
    </div>
  )
}
```

## Multi Props

<del>Pay for Attention AGORA PRECISA ENCAPSULAR COM `<div>` e return ()</del>

```jsx
// v1
function Pessoa(props) {
  return (
    <div>
      <img src={props.foto} alt={props.nome} />
      <h2>Nome: {props.nome}</h2>
      <h2>Idade: {props.idade}</h2>
      <h2>Profissão: {props.profissao}</h2>
    </div>
  )
}

// v2 alternative [better]

function Pessoa({ foto, nome, idade, profissao }) {
  return (
    <div>
      <img src={foto} alt={nome} />
      <h2>Nome: {nome}</h2>
      <h2>Idade: {idade}</h2>
      <h2>Profissão: {profissao}</h2>
    </div>
  )
}

// App.js import and use it:

;<Pessoa
  nome="Geraldo"
  idade="30"
  profissao="Sistemas"
  foto="https://via.placeholder.com/50"
/>

//When for passar numero add between {}
<Item marca="Ferrari" lacamento={1985} />

//Alternativa usar <> Thanks Web Dev Simplified
function App() {
  return (
    <>
      <TodoList />
      <input type="text" />
    </>
  )
}
```

# CSS Modules

pode ser adicionado de modo global por meio do index.css, porém é possível estializar a nível de components facilitando a manutenção.

- e.g: create a `Frase.module.css` and define styles
- on component `import styles from './Frase.module.css'`

  - ```jsx
    import styles from './Frase.module.css'

    function Frase() {
      return (
        <div className={styles.fraseContainer}>
          <p>Component com uma frase</p>
        </div>
      )
    }
    export default Frase
    ```

# React Fragmmentos

Permite a criação de um component sem elemento pai: `<> </>`
com isso ao inves de retornar uma <div> renderiza o elemento puro, a menos que tenha necessidade _e.g_ em um card o uso de <div> seria necessário.

```jsx
function List() {
  return (
    <>
      <p>My List</p>
    </>
  )
}

export default List
```

# Tipos de Props:

- Definir tipos para as props
- Possibilidade de definir um valor padrão: usar o obj `default Props`

- import: `import PropTypes from 'prop-types'`
- Acima de exports adicionar:

  > Item = ComponentName

  - ```jsx
    Item.propTypes = {
      marca: PropTypes.string,
    }
    ```

- Required just add `.isRequired`

```jsx
Item.propTypes = {
  marca: PropTypes.string.isRequired,
}
```

- Default values

```jsx
Item.defaultProps = {
  marca: 'Faltou a marca',
  lacamento: 'Faltou ano de lancamento',
}
```

# Eventos

- onClick
- criar evento no component e import and call no elemento pai

```jsx
function Evento() {
  function meuEvento() {
    console.log('Ativando click')
  }

  return (
    <div>
      <p>clique para disparar um evento</p>
      <button onClick={meuEvento}>Ativar</button>
    </div>
  )
}

export default Evento
```

Props nos eventos

```jsx
function Evento({ numero }) {
  function meuEvento() {
    console.log('Ativando click', numero)
  }

  return (
    <div>
      <p>clique para disparar um evento</p>
      <button onClick={meuEvento}>Ativar</button>
    </div>
  )
}

export default Evento

//call in parent
<Evento numero={1} />
<Evento numero={2} />
```

### prevent.default

```jsx
function cadastrarUsuario(e) {
  e.preventDefault()
  console.log(`Cadastrou usuario`)
}
```

##### extra adicionando form.name by gmap and get values

```jsx
function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault()
    console.log(`Cadastrou usuario`)
    console.log(e.target.nome.value)
  }

  return (
    <div>
      <h1>Meu Cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input type="text" name="nome" placeholder="your name" />
        </div>

        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}


// Using destruction and somando values

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault()
    const { x, y } = e.target
    console.log(+x.value + +y.value)
  }
```

# How get Input Value in React?

```jsx
// add useRef
import React, { useState, useRef } from 'react'

//define const
const todoNameRef = useRef()

//function get value
function handleAddTodo(e) {
  const name = todoNameRef.current.value
  //if name empty return
  if (name === '') return
  console.warn(name)
  //clean input after click
  todoNameRef.current.value = null
}

//App.html
<input ref={todoNameRef} type="text" />
<button onClick={handleAddTodo}>Add Todo</button>
```
