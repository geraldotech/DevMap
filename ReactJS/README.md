<h1 align=center>ReactJS</h1>

> Library
> Requerements: NodeJS

```js
// npx create-react-app
$ npm install -g create-react-app
$ npm uninstall -g create-react-app


// create-react-app npm
$ npm install -g create-react-app

// create-react-app npx
$ npx create-react-app@5.0.0 <my-app>
$ cd <my-app>
$ npx clear-npx-cache

// Start Server
$ npm run start
```

## CreateApp with Vite

- Vanilla, Vue, React, Preact, Lit, Svelte, Solid, Qwik, Others

  ```shell
  $ npm create vite@latest
  ```

# JSX {interpolation}

## strings, import CSS Styles and functions

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
      {/*  using this CSS class */}

      <p>Hello {name.toUpperCase()}</p>

      <p>{sum(5, 3)}</p>

      <img src={url} alt="my img  " />
    </div>
  )
}

export default App
```

## Components

> start with Capital letter

Geralmente criar uma pasta `src/componentes > create a HelloWord.js`

- Like in VueJS wrapper - embrulhar return with div or fragment
- Can use semantic html wrapper `<footer>`, `main`, `nav`...

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

// v4 para components pouco conteudo return inline direct
function Button(pros) {
  return <button>{pros.text}</button>
}

export default Button
```

On **App.js** import `HelloWord.js` and call this attribute

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

> shorthand for propriedades

- passado como atribudo como um tag, comparando com html: `<img src="" alt="" />`
- Create a file `SayMyName.js`

```jsx
function SayMyName(props) {
  return (
    <div>
      <p>Fala ai {props.nome} !!</p>
    </div>
  )
}
```

- **App.js**

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
<Pessoa  nome="Geraldo"  idade="30" profissao="Sistemas"  foto="https://via.placeholder.com/50" />

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

- Pode ser adicionado de modo global por meio do <ins>index.css</ins>,
- porém é possível estializar a nível de components facilitando a manutenção.

- create a `Frase.module.css` and define styles, instead **class-myclass** use **class_myclass**
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

- Permite a criação de um component sem elemento pai: `<> </>`
- inves de retornar uma `<div>` renderiza o elemento puro,
- a menos que tenha necessidade _e.g_ em um card o uso de `<div>` seria necessário.

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

### Adicionando form.name and get values

> by gmap

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


// Using destructuring and somando values
function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault()
    const { x, y } = e.target
    console.log(+x.value + +y.value)
  }
```

# React Hooks

- gerenciamento de estados - State
- gerenciamento do ciclo de vida - Life Cycle
- Criar lógicas reutilizaveis entre os componentes

Alguns:

- `useState()`
- `useEffect()`
- `useContext()`

  - ### useState

- é um hook do React, consegue manusear o estado do um componente de forma simples,
- funciona muito bem com eventos
- No local para inputs instead `for` deve usar `htmlFor`
- Check useState() + prevstate [counter.jsx](./ReactHooks/src/components/counter.jsx)

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

3 - Não precisou adicionar o `attr name` na input

4 - define a function que é chamada no `<form onSubmit={registerUser}>`

```jsx
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

### useState on input;

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

### useState with strings

- import: `import { useState } from "react";`

```js
// App.js

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


// inline change state
<button onClick={() => setHello('Hiiii')}>Click me</button>
```

Full code => [gist.github.com](https://gist.github.com/geraldotech/041a1ab161bd36112d591f391397a20a#file-app-js)

<hr>

- # useEffect

  > means: useEfeito colateral

  - useEffect multiple consoles:
    - porque o React está rodando em `StrictMode` que é o modo de desenvolvimento, no worries, em produção isso não vai ocorrer.
  - reagir as etapas do ciclo de vida do component que são: crição, atualização e destruição, example ir em [useEffectexample.jsx](./ReactHooks/src/components/useEffectexample.jsx) e para logs de destruição + toggle boolean ir em [/about.jsx](./ReactHooks/src/components/about.jsx/about.jsx)
  - Criar os próprios hooks

    - extrair lógicas e transformar em hooks
    - declarar funçöes seguindo o padrão `use` e.g:
      - `useCounter`
      - `useContador`
        Check [CounterCustomHook.jsx](./ReactHooks/src/components/CounterCustomHook.jsx) e [/hooks/useCounter.jsx](./ReactHooks/src/hooks/useCounter.jsx)

- # useRef - get Input Value using

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

# Tips:

```jsx
//inline alert/console function
$ <button onClick={() => { alert('como vai')}}>ALERT</button>
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

[ReactAulas Full Code](React-Aulas/src/components/Conditional.js)

# Renderizar listas

- Criar um Array
- Using map
- Using map destructuing objects [react-loop-through-array-of-objects](https://bobbyhadz.com/blog/react-loop-through-array-of-objects)

- [Example 1](React-Aulas/src/components/Listaarr.js)
- [Example 2](API-themovieDB/src/pages/Home/index_eg.map.js)

# State Lift

- Tecnica usada para compartilhar o state
- é normal vários components dependerem do mesmo estado
- Centralizar o state no pai, e definir quem usa e quem define `(setState)`
- Entender para aplicar nos projetos

- [Full Code Statelift.js](React-Aulas/src/components/Statelift.js)
- [Full Code Saudacao.js](React-Aulas/src/components/Saudacao.js)

```jsx
// App.js

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

## Snippets

- VSCode [extenstion](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

- `rafce` - arrow function
- `rfce` - function..

# React Router

- Precisa instalar esse pacote no projeto

  - `npm install react-router-dom`
  - `npm install react-router-dom@6`
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

- Fazer os respectivos components e importar

# React Icons

- Pacote externo de icones
- precisa adicionar via npm
- permite usar com a sintaxe parecida com a de components
- `npm install react-icons`
- no component: `import { nomeIcon } from 'react-icons/Bibioteca'`

## Font Awesome:

- [Icons LIST](https://react-icons.github.io/react-icons/icons?name=fa)
- `import { FaCentos } from 'react-icons/fa'`
- Multi import: `import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'`
- Apenas chamar o icon: `<FaCentos/>`

## Dev Icons:

- `import { IconName } from "react-icons/di";`

<hr>
