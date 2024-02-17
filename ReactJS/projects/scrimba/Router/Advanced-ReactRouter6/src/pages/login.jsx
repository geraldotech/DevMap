import React from 'react'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'
import { loginUser } from '../api'

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({ email: '', password: '' })
  const [status, setStatus] = React.useState('idle')
  const [error, setError] = React.useState(null)

  const location = useLocation()
  console.log(location)
  const navigate = useNavigate()

  // check obj if all undefined throw /host
  const currentLocationTrytoGo = location.state?.from?.pathname ?? '/host'
  console.log(currentLocationTrytoGo)

  // alternative used in video
  //const from = location.state?.from || '/host'

  function handleSubmit(e) {
    e.preventDefault()

    setStatus('submitting')
    loginUser(loginFormData)
      .then((data) => {
        setError(null)
        localStorage.setItem('loggedin', true)
        navigate(currentLocationTrytoGo, { replace: true })
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setStatus('idle')
      })

    console.log(loginFormData)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="login-container">
      <h3 className="login-error">{location.state?.message}</h3>
      <h1>Sign in to your account</h1>

      {error?.message && <h3 className="login-error">{error.message}</h3>}

      <form onSubmit={handleSubmit} className="login-form">
        <input name="email" onChange={handleChange} type="email" placeholder="Email address" value={loginFormData.email} />
        <input name="password" onChange={handleChange} type="password" placeholder="Password" value={loginFormData.password} />
        <button disabled={status === 'submitting'}>{status === 'submitting' ? 'Loggin.. ' : 'Log in'}</button>
      </form>
    </div>
  )
}
