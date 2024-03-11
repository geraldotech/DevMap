import React, { useState, useRef } from 'react'

const Exe5 = () => {
  const xx = useRef('')
  const yy = useRef('')
  const [x, setX] = useState('')
  const [y, setY] = useState('')

  function Handler() {
    setX(+xx.current.value)
    setY(+yy.current.value)
  }

  return (
    <div className="container">
      <h2>Exe5</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="number" ref={xx} placeholder="x" />
        <input type="number" ref={yy} placeholder="y" />
        <input type="submit" value="Send" onClick={Handler} />
        <input type="reset" value="Reset" />
      </form>
      <p>Soma: {x + y}</p>
      <p>Subtração: {x - y}</p>
    </div>
  )
}

export default Exe5
