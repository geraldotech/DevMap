import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Layout({ mylanguage, textLanguage }) {
  return (
    <>
    
    <nav className='top-menu'>
     <Link className="navButton" to="/">
        Home
      </Link>

      <button onClick={mylanguage} className="ChangeLanguage">
        {textLanguage === 'en-US' ? 'Mudar para Português' : 'Switch to English'}
      </button>

      </nav>
      <Outlet />
    </>

    
  )
}
