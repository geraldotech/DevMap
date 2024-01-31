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
    <div>
      <h2>Exe5</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" ref={xx} placeholder="x" />
        <input type="text" ref={yy} placeholder="y" />
        <input type="submit" value="Send" onClick={Handler} />
      </form>
      <p>{x + y}</p>
      <p>{x * y}</p>
    </div>
  )
}

export default Exe5
