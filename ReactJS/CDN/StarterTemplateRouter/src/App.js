const { useState } = React
const Link = ReactRouterDOM.Link
const Route = ReactRouterDOM.Route

import Home from './src/components/Home.js'
import About from './src/components/About.js'

/* components */
const Gmap = () => <h1>GmapDev from strings</h1>
class Form extends React.Component {
  render() {
    const age = () => {
      return 31
    }

    const msn = 'Form class Component'
    return (
      <h1>
        {msn} - {age()}
      </h1>
    )
  }
}

/* components */

function App() {
  const [counter, setCounter] = useState(0)

  function Increment() {
    setCounter((prevCounter) => prevCounter + 1)
  }
  function Decrement() {
    setCounter((prevCounter) => prevCounter - 1)
  }

  return (
    <>
      <ReactRouterDOM.HashRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gmap">GMAP</Link>
          </li>
        </ul>

        <Route path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/gmap" component={Gmap}></Route>
      </ReactRouterDOM.HashRouter>

      <Form />
      <button onClick={Decrement}>Increase Value</button>
      <button onClick={Increment}>Increase Value</button>
      <h1>{counter}</h1>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
