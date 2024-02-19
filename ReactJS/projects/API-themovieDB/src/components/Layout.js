import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Layout({ mylanguage, textLanguage }) {
  return (
    <>
      <Link className="navButton" to="/">
        Home
      </Link>

      <button onClick={mylanguage} className="ChangeLanguage">
        {textLanguage === 'en-US' ? 'Mudar para Português' : 'Change to English'}
      </button>

      <Outlet />
    </>
  )
}
