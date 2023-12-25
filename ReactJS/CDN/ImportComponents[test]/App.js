const { useState } = React
const Link = ReactRouterDOM.Link
const Route = ReactRouterDOM.Route

import Home from './components/Home.js'
import Login from './components/Login.js'

function App() {
  const [counter, setCounter] = useState(0)

  function Increment() {
    setCounter((prevCounter) => prevCounter + 1)
  }
  function Decrement() {
    setCounter((prevCounter) => prevCounter - 1)
  }

  const age = () => {
    return 30
  }

  const msn = 'Home Page'
  return (
    <>
      <h1>
        {msn} - {age()}
      </h1>
      <button onClick={Decrement}>Increase Value</button>
      <button onClick={Increment}>Increase Value</button>
      <h1>{counter}</h1>
    </>
  )
}

class Form extends React.Component {
  render() {
    const age = () => {
      return 31
    }

    const msn = 'Form Page'
    return (
      <h1>
        {msn} - {age()}
      </h1>
    )
  }
}

import Natal from './components/Natal.js'
import About from './components/About.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <ReactRouterDOM.HashRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>

      <Route path="/" exact component={<Home />} />
      <Route path="/login" component={<Login />} />
    </ReactRouterDOM.HashRouter>
    <Form />
    <Natal msg="Natal" />
    <About />
  </>
)
