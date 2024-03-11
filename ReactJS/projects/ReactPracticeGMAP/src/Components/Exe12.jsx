import React, { useState } from 'react'

export default function Exe12() {
  const [formdata, setFormData] = useState({ name: '', age: '' })

  function handlerSubmit() {
    event.preventDefault()
    console.log(formdata)
  }

  function handlerChange() {
    const { name, value } = event.target
    console.log(name)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="container">
      <h1>Exe 12</h1>

      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={formdata.name}
          name="name"
          onChange={handlerChange}
        />
        <input
          type="email"
          value={formdata.age}
          name="age"
          onChange={handlerChange}
        />
        <input
          type="submit"
          value="Send"
        />
      </form>
    </div>
  )
}
