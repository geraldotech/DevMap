import React from 'react'
import { useState, useRef } from 'react'

const Exer3 = () => {
  const [x, setX] = useState('Default: Costa')

  return (
    <div className="container">
      <h2>Exe 3</h2>
      <form>
        <input type="text" onChange={(e) => setX(e.target.value)} />
      </form>
      <p>{x}</p>
    </div>
  )
}

export default Exer3
