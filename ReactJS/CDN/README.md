# ReactJS CDN Babel

### v18 production

```js
 <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.production.min.js"
    ></script>
  <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
    ></script>
```

### v18 development

```js
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
```

### v17 production

```js
 <script
      crossorigin
      src="https://unpkg.com/react@17.0.0/umd/react.production.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.production.min.js"
    ></script>
```

Lastest version

```js
<script src="https://unpkg.com/react/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
```

# Babel

```js
  <!-- Load Babel -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

Div root `<div id="root"></div>`

then to version 17 e 18 pro `Hello Wordl!`

```js
<script type="text/babel">
  const container = document.getElementById("root"); ReactDOM.render({' '}
  <h1>Ola</h1>, container);
</script>
```

then to version 18 development `Hello Word` includes createRoot, 18 production version não mostra avisos de desenvolvimento.

```js
//  ReactDOM.render is no longer supported in React 18. Use createRoot instead.
;<script type="text/babel">
  const container = document.getElementById("root"); const root =
  ReactDOM.createRoot(container); root.render(<h1>Hello React 18</h1>);
</script>

// new
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <p>Hello</p>
  </>
)
```

Direct

```js
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<h1>Hello</h1>)
```

External File

- `<script src="main.babel" type="text/babel"></script>`
- or .js
- `<script src="main.js" type="text/babel"></script>`

> JSX expressions must have one parent element
> Então nosso return ficaria assim:

```js
const container = document.getElementById('root')
ReactDOM.render(<h1>Ola</h1>, container)
```

# 🎉Components

> 👉 Primeira letra deve ser Maiúscula

```js
class App extends React.Component {
  render() {
    return <p>Hello</p>
  }
}
```

Chamar `ReactDOM.render(<App />, container);`

> one parent element

```js
class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello</h2>
        <p>React</p>
      </div>
    )
  }
}
```

# Multiples components + CSS

```js
ReactDOM.render(
  <div class="main">
    <App />
    <Mobile />
  </div>,
  container
)
```

# Function nativas + var + onClick

> > function fora do scopo da class

- Em baixo do render
- usar {}

```js
class App extends React.Component {
  render() {
    function msn() {
      console.log('aaa')
    }
    function PrintName() {
      return `Geraldo`
    }

    const name = 'gmapdev'

    return (
      <div>
        <h2>Hello</h2>
        <p>{name}</p>
        <p>{PrintName()}</p>
        <button onClick={msn}>Click</button>
      </div>
    )
  }
}
```

## Function React `this`

- antes do render

```js
class App extends React.Component {
  printName() {
    return <h1>Welcome gmapdev</h1>
  }
  render() {
    return this.printName()
  }
}

//outro modo
class App extends React.Component {
  printName() {
    return <p>Welcome gmapdev</p>
  }
  render() {
    return <h1>{this.printName()}</h1>
  }
}

//method chamando outro
class App extends React.Component {
  getBrand() {
    return 'SmartUpdate'
  }

  printName() {
    return <p>{this.getBrand()}</p>
  }
  render() {
    return <h1>{this.printName()}</h1>
  }
}
//button click

class App extends React.Component {
  getName() {
    console.log('click')
  }
  render() {
    return <button onClick={this.getName}>Click</button>
  }
}
```
