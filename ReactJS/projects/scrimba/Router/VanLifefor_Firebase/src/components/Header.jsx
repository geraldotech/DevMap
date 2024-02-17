import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import imageUrl from '/src/assets/images/avatar-icon.png'
import { BsXOctagonFill } from 'react-icons/bs'

export default function Header() {
  const activeLink = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  }

  const navigate = useNavigate()
  function fakeLogOut() {
    localStorage.removeItem('loggedin')
    navigate('/login')
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink to="/host" style={({ isActive }) => (isActive ? activeLink : null)}>
          Host
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => (isActive ? activeLink : null)}>
          About
        </NavLink>
        <NavLink to="/vans" className={({ isActive }) => (isActive ? 'active-link' : null)}>
          Vans
        </NavLink>
        <NavLink to="login">
          <img src={imageUrl} className="login-icon" />
        </NavLink>

        {10 > 4 && <BsXOctagonFill onClick={fakeLogOut} title="Log out" className="logout-button" />}
      </nav>
    </header>
  )
}
