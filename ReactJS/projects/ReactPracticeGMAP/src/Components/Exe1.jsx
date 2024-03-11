import { useState, useRef } from 'react'

const Exe1 = () => {
  const [inputname, setInputname] = useState('')
  const myname = useRef()

  function handlerForm(e) {
    e.preventDefault()

    console.log(e.target.custominputname.value)
    setInputname(myname.current.value)

    /* === DATA FORM === */
    const objform = new FormData(event.target)
    console.warn(objform.get('custominputname'))
    console.log(Object.fromEntries(objform).custominputname)
  }

  return (
    <div className="container">
      <h2>Exe 1</h2>
      <form style={{background: '#000', padding: '.5rem'}} onSubmit={handlerForm}>
        <input type="text" ref={myname} name="custominputname" />
        <input type="submit" value="send" />
        <input type="reset" value="Reset" />
        <p>Valor digitado: {inputname}</p>
        
      </form>
      {inputname.toLocaleLowerCase() == 'a' && <h1>Letra A</h1>}
      {inputname.toLocaleLowerCase() == 'b' && <h1>Letra B</h1>}
      {inputname.toLocaleLowerCase() == 'c' && <h1>Letra C</h1>}
    </div>
  )
}

export default Exe1
