import { useState } from 'react'
import styles from './Form.module.css'
import CounterCustomHook from './CounterCustomHook'

const Form = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function alertUser() {
    const val = +prompt('Set a value: ')
    setCount(val)
  }

  return (
    <>
      <nav className={styles.formMenu}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => setCount(10)}>10</button>
        <button onClick={alertUser}>Set a value</button>
      </nav>
      <h2>{count}</h2>

      <h1>Custom Hook below</h1>
      <CounterCustomHook />
    </>
  )
}

export default Form
