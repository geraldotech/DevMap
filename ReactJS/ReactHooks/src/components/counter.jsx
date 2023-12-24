import React from 'react'
import { useState } from 'react'

const counter = () => {
  const [count, setCount] = useState(0)
  const [hello, setHello] = useState('Hello World!')

  const increment = () => {
    setCount((prevCount) => {
      setHello('Geraldo tem: ' + prevCount + 1)
      return prevCount + 1
    })
  }

  return (
    <div>
      <h3>
        Counter with{' '}
        <a href="https://medium.com/geekculture/using-prevstate-with-react-basic-and-complex-f7f8ab4ce1b6">
          preState
        </a>
      </h3>
      <button onClick={increment}>Click me</button>
      <h2>{count}</h2>

      <hr></hr>
      <button onClick={increment}>Click me text</button>
      <h2>{hello}</h2>
    </div>
  )
}

export default counter
