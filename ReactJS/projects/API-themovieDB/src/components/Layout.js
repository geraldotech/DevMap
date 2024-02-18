import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Layout({ mylanguage, textLanguage }) {
  const [language, setLanguage] = useState('en-US')

  function toggleLanguage() {
    setLanguage((prevchangelan) => (prevchangelan == 'en-US' ? 'pt-BR' : 'en-US'))
  }

  return (
    <>
      <Link className="navButton" to="/">
        Home
      </Link>
      {/* <button onClick={toggleLanguage} className="ChangeLanguage">
        Toggle Language
      </button> */}

      <button onClick={mylanguage} className="ChangeLanguage">
        {textLanguage === 'en-US' ? 'Mudar para Português' : 'Change to English'}
      </button>

      <Outlet context={language} />
    </>
  )
}
