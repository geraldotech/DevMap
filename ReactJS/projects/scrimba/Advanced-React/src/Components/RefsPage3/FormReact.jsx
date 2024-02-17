import React, { useState } from 'react'
import styles from './FormReact.module.css'

export default function FormReact() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const inputRef = React.useRef(null)

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!text) {
      return
    }
    setList((prevList) => [...prevList, text])
    setText('')
    // Focus back to the input element
    inputRef.current.focus()
  }

  return (
    <div className={styles.form}>
      <h2>FormReact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="Idea"
          ref={inputRef}
        />
        <button>Submit</button>
      </form>
      <ol>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </div>
  )
}
