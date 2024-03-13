const { useState } = React
const { Routes, BrowserRouter, Route, Link } = ReactRouterDOM

import Home from './src/components/Home.js'
import About from './src/components/About.js'

/* Gmap Component */
const Gmap = () => <h1 className="bg-blue-400 text-4xl mt-5">GmapDev from strings</h1>

/* Form Component */
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
/* Main App Component */
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
        <BrowserRouter>
          <ul className="flex justify-between flex-wrap gap-5 max-w-150  text-white-500 p-4  m-auto bg-teal-400">
            <li className="hover:font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/gmap">GMAP</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/test">Test</Link>
            </li>
            <li className="hover:font-bold">
              <Link to="/chatgpt">ChatGTP</Link>
            </li>
          </ul>
          <Routes>
            <Route
              path="/"
              exact
              element={<Home />}></Route>
            <Route
              path="/about"
              element={<About />}></Route>
            <Route
              path="/gmap"
              element={<Gmap />}></Route>
            <Route
              path="/test"
              element={<h1 className="bg-green-900 ">Test Page</h1>}
            />
            <Route
              path="/chatgpt"
              element={<ChatGTP />}
            />
          </Routes>
        </BrowserRouter>
      </nav>

      <Form />

     <Example/>

      <section className="text-center bg-gray-500 p-5 mt-20">
        <button
          className="bg-green-900 font-bold p-2 mx-5 rounded hover:bg-green-800 transition ease-in-out delay-150"
          onClick={Decrement}>
          Decrement Value
        </button>
        <br></br>
        <br></br>
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
