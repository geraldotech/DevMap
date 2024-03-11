import React from 'react'
import { useState, useRef } from 'react'

const Exer2 = () => {
  const [nome, setNome] = useState('')
  const seunome = useRef('')

  const handlerInput = (e) => {
    setNome(e.target.value)
    console.log(seunome.current.value)
  }

  return (
    <div className="container">
      <h2>Exe 2</h2>
      <input type="text" onInput={handlerInput} ref={seunome} />
      <p>{nome}</p>
    </div>
  )
}

export default Exer2
