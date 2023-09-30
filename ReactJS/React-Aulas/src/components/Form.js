import { useState } from 'react'

function Form() {
  function registerUser(e) {
    e.preventDefault()
    console.log(`O usuario ${name} foi cadastrado com a senha ${password}`)
  }

  const [name, setName] = useState()
  const [password, setPassword] = useState()

  return (
    <div>
      <h1>Meu Cadastro</h1>
      <form onSubmit={registerUser}>
        <div>
          <label htmlFor="user">Usuario:</label>
          <input
            type="text"
            id="user"
            placeholder="user"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="pass"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}

export default Form
