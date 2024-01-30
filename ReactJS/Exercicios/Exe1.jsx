import { useState, useRef } from 'react'

const Exe1 = () => {
  const [name, setName] = useState('')
  const myname = useRef()

  function handlerForm(e) {
    e.preventDefault()
    console.log(e.target.nome.value)
    setName(myname.current.value)
  }

  return (
    <>
      <h2>Exe 1</h2>
      <form onSubmit={handlerForm}>
        <input type="text" ref={myname} name="nome" />
        <input type="submit" value="send" />
      </form>
      <h2>{name}</h2>
    </>
  )
}

export default Exe1
