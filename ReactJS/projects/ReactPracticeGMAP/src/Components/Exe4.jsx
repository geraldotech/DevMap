import React from 'react'
import { useState } from 'react'
import styles from './Exe4.module.css'

const Exe4 = () => {
  const [x, setX] = useState('')
  const [y, setY] = useState('')

  function cleanInputs() {
    setY('')
    setX('')
  }

  function callme() {
    console.log(`hello input one`)
  }

  return (
    <div className={styles.form}>
      <h2>Exe 4</h2>
      <form>
        <input
          type="text"
          onChange={(e) => (setX(+e.target.value), callme())}
        />
        <input type="text" onChange={(e) => setY(+e.target.value)} />
        <input type="reset" value="reset" onClick={cleanInputs} />
      </form>
      <p>{`Soma: ${x} + ${y} = ${x + y}`}</p>
    </div>
  )
}

export default Exe4
