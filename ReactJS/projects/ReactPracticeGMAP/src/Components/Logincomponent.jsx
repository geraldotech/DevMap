import React, { useRef, useState } from 'react'

// Constructor function for Person objects
// Custom object constructor

export default function exe01() {
  const [password, setPassword] = useState('')
  const [userLogin, setUserLogin] = useState('')

  const userName = useRef()

  function handlerSubmit() {
    event.preventDefault()

    /* REACT REF */
    setUserLogin(userName.current.value)

    /* DATA FORM CONSTRUCTOR */
    const formobj = new FormData(event.target)
    const obj = Object.fromEntries(formobj)
    setPassword(obj.password)
  }

  const users = {
    gera: {
      name: 'Geraldo',
      login: 'ge',
      password: '123',
      city: 'Maceio',
      saldo: 10000,
      avatar: 'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg',
    },
  }

  users.fel = {
    name: 'Felipe',
    password: '123',
    city: 'Palmeira',
    saldo: 56503,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XcE2-SRKjkHOK83FOafrsYCMKrMYZV9ytTj0WvYzlA&s',
  }

  function user(name, city, password, saldo, avatar) {
    ;(this.name = name), (this.password = password), (this.city = city), (this.saldo = saldo), (this.avatar = avatar)
  }

  function createNewUser(name, city, password, saldo, avatar) {
    const newUser = new user(name, city, password, saldo, avatar)
    users[name] = newUser
  }

  createNewUser('master', '', '123', 0, '')

  function CheckLogin(userLogin, password) {
    if (password == users[userLogin]?.password) {
      console.log(`Logado com `, users[userLogin]?.name)
      return currentUser(userLogin)
    }
  }

  function currentUser(userLogin) {
    return (
      <div>
        <h2>
          Bem vindo {users[userLogin].name} a {users[userLogin].city ?? 'sua cidade'}
        </h2>
        <ul>
          <li>Saldo: {users[userLogin].saldo}</li>
        </ul>

        <img
          src={users[userLogin].avatar ?? 'https://placehold.jp/200x200.png'}
          width="20%"
          alt=""
        />
      </div>
    )
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Login Users:</h1>

      <form
        style={{ backgroundColor: '#000', padding: '1rem' }}
        onSubmit={handlerSubmit}>
        <input
          style={{ display: 'block', margin: '1rem' }}
          type="text"
          placeholder="seu nome"
          ref={userName}
          name="seunome"
        />
        <input
          style={{ display: 'block', margin: '1rem' }}
          type="password"
          placeholder="sua senha"
          name="password"
        />
        <input
          style={{ display: 'block', margin: '1rem' }}
          type="submit"
          value="Enviar"
        />

        <input
          style={{ display: 'block', margin: '1rem' }}
          type="reset"
          value="Clean"
        />
      </form>

      {CheckLogin(userLogin, password)}
    </div>
  )
}
