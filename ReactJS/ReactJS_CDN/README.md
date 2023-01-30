# ReactJS CDN Babel

importação dos scripts

```js
 <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.production.min.js"
    ></script>
  <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
    ></script>
 <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

Div root `<div id="root"></div>`

then Hello Wordl!

```js
<script type="text/babel">
  const container = document.getElementById("root"); ReactDOM.render(
  <h1>Ola</h1>, container);
</script>
```

Em um arquivo separado importe por `<script src="file.babel" type="text/babel"></script>`

> JSX expressions must have one parent element
> Então nosso return ficaria assim:

```js
const container = document.getElementById("root");
ReactDOM.render(<h1>Ola</h1>, container);
```

# Registrando components

> 👉 primeira letra deve ser Maiúscula

```js
class App extends React.Component {
  render() {
    return <p>Hello</p>;
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
    );
  }
}
```

# Render multiples components + CSS class

```js
ReactDOM.render(
  <div class="main">
    <App />
    <Mobile />
  </div>,
  container
);
```

# Function nativas + var + onClick

> > function fora do scopo da class

- Em baixo do render
- usar {}

```js
class App extends React.Component {
  render() {
    function msn() {
      console.log("aaa");
    }
    function PrintName() {
      return `Geraldo`;
    }

    const name = "gmapdev";

    return (
      <div>
        <h2>Hello</h2>
        <p>{name}</p>
        <p>{PrintName()}</p>
        <button onClick={msn}>Click</button>
      </div>
    );
  }
}
```

## Function React `this`

- antes do render

```js
class App extends React.Component {
  printName() {
    return <h1>Welcome gmapdev</h1>;
  }
  render() {
    return this.printName();
  }
}

//outro modo
class App extends React.Component {
  printName() {
    return <p>Welcome gmapdev</p>;
  }
  render() {
    return <h1>{this.printName()}</h1>;
  }
}

//method chamando outro
class App extends React.Component {
  getBrand() {
    return "SmartUpdate";
  }

  printName() {
    return <p>{this.getBrand()}</p>;
  }
  render() {
    return <h1>{this.printName()}</h1>;
  }
}
//button click

class App extends React.Component {
  getName() {
    console.log("click");
  }
  render() {
    return <button onClick={this.getName}>Click</button>;
  }
}
```
