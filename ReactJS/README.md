<h1 align=center>ReactJS</h1>

> Library
> Requirements: NodeJS

- [Playground codeesandbox](https://codesandbox.io/s/6xkys7?file=%2Fsrc%2FApp.js&utm_medium=sandpack)

- [JSX-interpolation](#jsx-interpolation)
- [React Props](#props)
- [React Fragmentos](#react-fragmentos)
- [Router Hooks](#react-hooks)
- [Renderizar Listas](#renderizar-listas)
- [Render by condition](#render-by-condition)
- [React Router Basic](#react-router)
- [React Router Advanced](#react-router)
  move some projetos to /projects
  create this page
- [Icons](#react-icons)
- [Events and Forms](#eventos)

### CRA - Create React App

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
$ npm start

// Build
$ npm run build

// Start Build prevoew
$ serve -s build

```

## CreateApp with Vite

- Please [click here](../Vue/VueCLI/README.md#vite)

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

      <img
        src={url}
        alt="my img  "
      />
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
> React Props are read-only! You will get an erro if you try to change their value

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

- Full Example [SayMyName.js](./projects/React-Aulas/src/components/SayMyName.js)

## Default props value

```js
// nullish
;<div>{props.nome ?? 'default'}</div>

// set a new value
let nome
if (props.nome === undefined) {
  nome = 'default'
}

;<div>{nome}</div>

// after function before export default
...
SayHello.defaultProps = {
  nome: 'Default',
}

export default SayHello

```

- More about [propTypes and defaultProps](./projects/React-Aulas/src/components/Item.js)

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

## Passar eventos por props

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

> declare o event e deixe o mouse em cima para pegar as referências

- onChange= React.ChangeEventHandler
- onClick = React.MouseEventHandler
- onSubmit = React.FormEventHandler
- ...

```js
// example get input value
function handleSearch(event: ChangeEvent<HTMLInputElement>) {}

// get text area
function handleSearch(event: ChangeEvent<HTMLTextAreaElement>) {}
```

criar evento no component e import and call no elemento pai

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

- ### Forms onSubmit and prevent.default()

```jsx
function cadastrarUsuario(e) {
  e.preventDefault()
  console.log(`Cadastrou usuario`)
}
// or
;<form onSubmit={(e) => e.preventDefault()}>
  <input type="submit" value="send" onClick={handler} />
  ....
</form>

// or single inline
 <input
          type="submit"
          value="send"
          onClick={(event) => (event.preventDefault(), handler())}
 />
```

- or [set a useState with prevent Default](./projects/React-Aulas/src/components/Conditional.js)

- ### Form names get values

> by gmap

```jsx
function App() {
  function cadastrarUsuario(e) {
    e.preventDefault()
    console.log(e.target.x.value)
    console.log(e.target.y.value)
    const { x, y } = e.target
    console.log(parseInt(x.value) + parseInt(y.value))
  }
  return (
    <div>
      <h1>Somando</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input
            type="text"
            name="x"
            placeholder="n1"
          />
          <input
            type="text"
            name="y"
            placeholder="n2"
          />
        </div>

        <div>
          <input
            type="submit"
            value="Somar"
          />
        </div>
      </form>
    </div>
  )
}
```

# React Hooks

- gerenciamento de estados - State
- gerenciamento do ciclo de vida - Life Cycle
- Criar lógicas reutilizaveis entre os componentes

Built-in:

- `useContext()` - soon
- `useCallback()` - soon
- `Custom` - combine existing hooks intro custom, reusable pieces of logic

<hr>

- ## useState

- é um hook do React, consegue manusear o estado do um componente de forma simples,
- `useState(initialState)` initialState pode ser, 'string' {}, [], null, boolean, number READ MORE in [examples-basic react/useState](https://react.dev/reference/react/useState#examples-basic)

- funciona muito bem com eventos
- No local para inputs instead `for` deve usar `htmlFor`
- Check useState() + prevstate [counter.jsx](./ReactHooks/src/components/counter.jsx)

> Did you mean `htmlFor`?

```jsx
<form onSubmit={registerUser}>
  <div>
    <label htmlFor="user">User:</label>
    <input
      type="text"
      id="user"
      placeholder="user"
    />
  </div>
  <div>
    <label htmlFor="pass">Password:</label>
    <input
      type="password"
      id="pass"
      placeholder="password"
    />
  </div>
  <div>
    <input
      type="submit"
      value="Cadastrar"
    />
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

- **useState onInput**

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

- **useState with strings**

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

- ## useRef - get Input Value using

Are just like state, except changing them doens't cause a re-render. They're frequently used for manual DOM manipulation.

```jsx
import { useState, useRef } from 'react'
import './App.css'

function App() {
  const nameinput = useRef()
  const [getnome, setGetnome] = useState()

  function getmyname() {
    setGetnome(nameinput.current.value)
  }

  return (
    <>
      <h1>{getnome}</h1>
      <input
        ref={nameinput}
        type="text"
      />
      <button onClick={getmyname}>get My name</button>
    </>
  )
}
```

- Get Value from input [onClick using two functions](https://www.codingbeautydev.com/blog/react-get-input-value-on-button-click)

- ## useEffect

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

# Tips:

```jsx
//inline alert/console function
$ <button onClick={() => { alert('como vai')}}>ALERT</button>
```

# INLINE STYLES:

`marginTop` = `margin-top` evitando o uso de hífen

```jsx
<div style={{marginTop: '10px'}}> <Button event={(e) => segundoEvento(e, 20)} text="Segundo Evento" /></div>
<h1 style={{color: "red"}}>Hello Style!</h1>
```

# Renderizar listas

- Criar um Array
- Using map
- Using map destructuing objects [react-loop-through-array-of-objects](https://bobbyhadz.com/blog/react-loop-through-array-of-objects)

- [Example 1](./projects/React-Aulas/src/components/Listaarr.js)
- [Example 2](./projects/API-themovieDB/src/pages/Home/index_eg.map.js)
- `Cannot read properties of undefined (reading 'map'): verificar se adicionou um []` no useEffect
- `Warning: Each child in a list should have a unique "key" prop. key prop to fragment?` [https://stackoverflow.com/questions/59390955/can-i-add-a-key-prop-to-a-react-fragment](https://stackoverflow.com/questions/59390955/can-i-add-a-key-prop-to-a-react-fragment)

  ```js
  <React.Fragment key={your key}>
  ...
  </React.Fragment>
  ```

# Render by condition

> renderização condicional if

> É possível usar o state para criar as condições
> não é bom criar lógicas muito complexas nos templates, por não ser o local ideal para lógicas

- [ReactAulas Full Code](./projects/React-Aulas/src/components/Conditional.js)
- [Ternary](./projects/React-Aulas/src/components/Listaarr.js)

# State Lift

- Técnica usada para compartilhar o state
- é normal vários components dependerem do mesmo estado
- Centralizar o state no pai, e definir quem usa e quem define `(setState)`
- Entender para aplicar nos projetos

- [Full Code na rota React-Aulas/src/pages/Contato.js](React-Aulas/src/pages/Contato.js)

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
  - Now:

    - `import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'`
    - `<BrowserRouter || as❓>  ... </BrowserRouter  || as❓>`

  - Example 1 [Hard com App and main com RouterProvider]: [./project/React-Router/src/App.js](./React-Router)

  - Example 2 [set router views](./project/costs_project/src/App.js) and set [Router Link](./project/costs_project/src/components/layout/Navbar.js)

  - Example 3 srimba [???](./projects/????)
    - install router-dom and router-dom@6
    - go To index.js / main.js: `import { BrowserRouter } -from 'react-router-dom'`
    - Now wrapper the ` <App />`

<details>
<summary>Get Full code</summary>

```js
<Router>
  <Link to="/">Home</Link>
  <Link to="/company">Company</Link>
  <Routes>
    <Route
      exact
      path="/"
      element={<Home />}>
      Home
    </Route>
    <Route
      exact
      path="/company"
      element={<Company />}>
      Company
    </Route>
  </Routes>
</Router>
```

</details>

# React Icons

- Pacote externo de icones
- precisa adicionar via npm
- permite usar com a sintaxe parecida com a de components
- `npm install react-icons`
- no component: `import { nomeIcon } from 'react-icons/Bibioteca'`

## Font Awesome do React-Icons:

- [Icons LIST](https://react-icons.github.io/react-icons/icons?name=fa)
- `import { FaCentos } from 'react-icons/fa'`
- Multi import: `import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'`
- Apenas chamar o icon: `<FaCentos/>`

## Dev Icons:

- `import { IconName } from "react-icons/di";`

<hr>

## Font Awesome:

```js
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

// on component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe } from '@fortawesome/free-solid-svg-icons';

// usage:
<span><FontAwesomeIcon icon={faSearch} /></span>
```

## Load image local, public, remote, import

- [https://bobbyhadz.com/blog/react-display-image-from-url](https://bobbyhadz.com/blog/react-display-image-from-url)

```jsx
   <img src={require('./2.png')}

// get public folder fiels
   <img src="/logo192.png" alt="" />
```

## .env file for ReactAPP only

- create .env file in root
- set your variables"

```js
    REACT_APP_API_KEY=your-development-api-key
    REACT_APP_DATABASE_URL=https://your-development-database.com
```

- use variable: `{process.env.REACT_APP_API_KEY}`
- restart server
