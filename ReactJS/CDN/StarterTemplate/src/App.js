const { useState } = React

import Natal from './src/components/Natal.js'
import About from './src/components/About.js'

/* class component */
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
/* class component */

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

      <Form />
      <Natal msg="Natal" />
      <About />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
