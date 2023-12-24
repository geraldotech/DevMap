import React from 'react'
import { useState } from 'react'
import useCounter from '../hooks/useCounter'

const counter = () => {
  const { valorAtual, decrement, increment } = useCounter()

  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <h2>{valorAtual}</h2>
    </div>
  )
}

export default counter
