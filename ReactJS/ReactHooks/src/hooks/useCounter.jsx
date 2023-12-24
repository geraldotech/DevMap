import { useState } from 'react'

export default function useCounter() {
  const [valorAtual, setValorAtual] = useState(100)

  const increment = () => {
    setValorAtual((prevCount) => prevCount + 1)
  }
  const decrement = () => {
    setValorAtual((prevCount) => prevCount - 1)
  }

  return {
    valorAtual,
    increment,
    decrement,
  }
}
