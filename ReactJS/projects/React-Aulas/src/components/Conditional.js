import { useRef, useState } from 'react'

//adicionadp useRef para limpar o input value after submit
// thanks https://bobbyhadz.com/blog/react-clear-input-value

function Condicional() {
  //set state para onchange
  const [email, setEmail] = useState()

  //set state for function
  const [userEmail, setUserEmail] = useState()
  const userInput = useRef(null)

  function enviarEmail(e) {
    //prevent default
    e.preventDefault()
    // call this useState and fill with email value of onchange acima now userEmail get the same value
    setUserEmail(email)

    userInput.current.value = ''
  }
  function limparEmail() {
    //clean the value
    setUserEmail('')
  }
  return (
    <div>
      <h1>Cadastre o seu e-mail:</h1>
      <form>
        <input
          type="email"
          placeholder="digite seu email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          ref={userInput}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar email
        </button>
        {/*  se userEmail foi preenchido, se userEmail fo true ou seja tiver algum valor */}

        {userEmail && (
          <div>
            <p>O email do user é : {userEmail}</p>
            <button onClick={limparEmail}>Limpar Email</button>

            <hr></hr>
            {/*  // by gmap reset a new value */}
            <button
              onClick={(e) => {
                e.preventDefault()
                setUserEmail('hacked@hacker.com')
              }}
            >
              Set new
            </button>
          </div>
        )}
      </form>
    </div>
  )
}

export default Condicional
