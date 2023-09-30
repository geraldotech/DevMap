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

# JSX interpolation strings, import CSS Styles and functions

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

<button onClick={function () {console.log(`hello`)}}>arrow functions are more beautiful</button>
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

// v4 para components pouco conteudo return direct
function Button(pros) {
  return <button>{pros.text}</button>
}

export default Button

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

# React Fragmentos

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

- Deve fazer o import: `import PropTypes from 'prop-types'`
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

<details>
<summary>Full Example</summary>

```jsx
import PropTypes from 'prop-types'

function Item({ marca, lacamento }) {
  return (
    <>
      <li>
        {marca} - {lacamento}
      </li>
    </>
  )
}

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  lacamento: PropTypes.number,
}

Item.defaultProps = {
  marca: 'Faltou a marca',
  lacamento: 0,
}

export default Item
```

</details>

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

### onSubmit and prevent.default()

```jsx
function cadastrarUsuario(e) {
  e.preventDefault()
  console.log(`Cadastrou usuario`)
}
```

### Adicionando form.name by gmap and get values

```jsx
function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault()
    console.log(`Cadastrou usuario`)
    console.log(e.target.nome.value)
  }

  return (
    <div>
      <h1>Somando</h1>
      <form onSubmit={cadastrarUsuario}>
       <div>
          <input type="text" name="x" placeholder="n1" />
          <input type="text" name="y" placeholder="n2" />
        </div>

        <div>
          <input type="submit" value="Somar" />
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

# useState

é um hook do React, consegue manusear o estado do um componente de forma simples, funciona muito bem com eventos

1 - No local para inputs instead `for` deve usar `htmlFor`

> Did you mean `htmlFor`?

```jsx
<form onSubmit={registerUser}>
  <div>
    <label htmlFor="user">User:</label>
    <input type="text" id="user" placeholder="user" />
  </div>
  <div>
    <label htmlFor="pass">Password:</label>
    <input type="password" id="pass" placeholder="password" />
  </div>
  <div>
    <input type="submit" value="Cadastrar" />
  </div>
</form>
```

2 - import `import {useState} from 'react'`

3 - Nao precisou adicionar o attr name no input

4 -

```jsx
// definir a function que é chamada no  <form onSubmit={registerUser}>
function Form() {
  function registerUser(e) {
    e.preventDefault()
    console.log(name)
  }
 // const com o set`${yourvalue}State`
  const [name, setName] = useState()


// adiciona na input onChange...

<input type="text" id="user" placeholder="user" onChange={(e) => setName(e.target.value)} />

// default values
const [name, setName] = useState('admin')

// input add a a value
value={name}

// multiple values
const [name, setName] = useState()
const [password, setPassword] = useState()
// do the same in password

<input type="password" id="pass" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
```

useState on input;

```jsx
import {useState} from 'react'

const [idade, setIdade] = useState('')


function Idadefun(e){
  console.log(e)
setIdade(e.target.value)
}

<input type='text' onInput={Idadefun} />
<p>{idade}</p>
```

# Tips:

```jsx
//inline alert/console function
$ <button onClick={() => { alert('como vai')}}> ALERT</button>
```

# Passar eventos por props

```jsx
//define no component filho Button.js
function Button(props) {
  return <button onClick={props.event}>{props.text}</button>
}

// import no pai e faca as respectivas functions
  <Button event={meuEvento} text="Primeiro Evento" />
  <Button event={segundoEvento} text="Segundo Evento" />

// pass params
 <Button event={(e) => segundoEvento(e, 20)} text="Segundo Evento" />
```

### Function por props

```js
<button onClick={props.myfun}>{props.text}</button>

<Buttonx myfun={Makesomething} text="Download" />

```

# INLINE STYLES:

`marginTop` = `margin-top` evitando o uso de hífen

```jsx
<div style={{marginTop: '10px'}}> <Button event={(e) => segundoEvento(e, 20)} text="Segundo Evento" /></div>
<h1 style={{color: "red"}}>Hello Style!</h1>
```

# Render by condition - renderização condicional if

> É possível usar o state para criar as condições
> não é bom criar lógicas muito complexas nos templates, por não ser o local ideal para lógicas

[Full Code](React-Aulas/src/components/Conditional.js)

# Renderizar listas

> Criar um Array
> Using map

[Full Code](React-Aulas/src/components/Listaarr.js)

# State Lift

> Tecnica usada para compartilhar o state
> é normal vários components dependerem do mesmo estado
> Centralizar o state no pai, e definor quem usa e quem define (setState)
> Entender para aplicar nos projetos

[Full Code 1](React-Aulas/src/components/Satelift.js)
[Full Code 2](React-Aulas/src/components/Saudacao.js)

App.js

```jsx
function App() {
  const [nome, setNome] = useState()
  return (
    <div className="App">
      <h1>State Lift</h1>
      <StateLift setNome={setNome} />
      {nome}

      <Saudacao nome={nome} />
    </div>
  )
}`
```

# React Router

> Precisa instalar esse pacote no projeto

- `npm install react-router-dom`
- import: `import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'`

```jsx
<Router>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/empresa">Empresa</Link>
    </li>
    <li>
      <Link to="/contato">Contato</Link>
    </li>
  </ul>

  <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route path="/empresa" element={<Empresa />}></Route>
    <Route path="/contato" element={<Contato />}></Route>
  </Routes>
</Router>
```

Fazer os respectivos components e importar

### How get Input Value in React?

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
