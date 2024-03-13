const { useState } = React
const Link = ReactRouterDOM.Link
const Route = ReactRouterDOM.Route

import Home from './src/components/Home.js'
import About from './src/components/About.js'

/* components */
const Gmap = () => (
  <h1 className="bg-blue-400 text-4xl mt-5">GmapDev from strings</h1>
)
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
    <div className="container mx-auto">
      <nav>
        <ReactRouterDOM.HashRouter>
          <ul className="flex justify-start gap-20 max-w-90 text-2xl text-white-500 p-2  m-auto bg-teal-400">
            <li className="hover:font-bold">
              <Link to="/" >Home</Link>
            </li>
            <li className="hover:font-bold">
              {' '}
              <Link to="/about">About</Link>
            </li>
            <li className="hover:font-bold">
              {' '}
              <Link to="/gmap">GMAP</Link>
            </li>
          </ul>
        </ReactRouterDOM.HashRouter>
      </nav>

      <ReactRouterDOM.HashRouter>
        <Route path="/" exact  component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/gmap" component={Gmap}></Route>
      </ReactRouterDOM.HashRouter>

      <Form />
      <section className="text-center bg-gray-500 p-5 mt-20">
        <button
          className="bg-green-900 font-bold p-2 mx-5 rounded hover:bg-green-800 transition ease-in-out delay-150"
          onClick={Decrement}>
          Decrement Value
        </button>
        <button
          className="bg-green-900 font-bold p-2 mx-5 rounded hover:bg-green-800 transition"
          onClick={Increment}>
          Increase Value
        </button>

        <h1 className="text-4xl ">{counter}</h1>
      </section>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
