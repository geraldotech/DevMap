/* Components class with this */
class App extends React.Component {
  render() {
    return <h1>My App: {this.props.appname}</h1>
  }
}

class MeuApp extends React.Component {
  getName = () => {
    console.log(this)
  }
  ParImpar(num) {
    return parseInt(num) % 2 == 0 ? 'par' : 'impar'
  }
  render() {
    const msn = 'function after'

    function DepoisRender() {
      return (
        <h1>
          {msn} <code>render()</code> no this
        </h1>
      )
    }
    return (
      <div>
        <h2>Hello from ReactJS</h2>
        <button onClick={this.getName}>Click</button>
        <h2>{this.ParImpar(this.props.parouimpar)}</h2>
        <h2>{DepoisRender()}</h2>
      </div>
    )
  }
}
/* Components class with this */

/* Components functions props  */
function ParImpar(props) {
  const num = props.numero % 2 == 0 ? `par` : `impar`
  return <h1>{num}</h1>
}

/*more about https://pt-br.legacy.reactjs.org/docs/components-and-props.html */

/* Components functions and support child funtions */
function Codepen(props) {
  const ff = 'function'

  function insideFun() {
    return <p>I am child {ff}</p>
  }
  const foo = () => {
    return <p>Child Arrow {ff}</p>
  }

  return (
    <h1>
      <span>
        {' '}
        Hello: {props.last} and {insideFun()} and {foo()}
      </span>
    </h1>
  )
}
/* Components ends */

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  <>
    <App appname="App React com CDN" />
    <hr></hr>
    <Codepen last="Geraldo" />
    <hr></hr>
    <ParImpar numero="1" />
    <ParImpar numero="10" />
    <hr></hr>
    <MeuApp parouimpar="2" />
  </>
)
