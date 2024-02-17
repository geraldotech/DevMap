import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom'

function Layout() {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: 'blue',
  }

  return (
    <div>
      <h3>Welcome to my page!</h3>
      <p>Example style and className active links</p>
      <p>You can use either inline styles or a className.</p>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : null)}>
          Home
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : null)}>
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'my-active' : null)}>
          Contact
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

function HomePage() {
  return (
    <main>
      <h2>Home</h2>
    </main>
  )
}

function AboutPage() {
  return (
    <main>
      <h2>About Me</h2>
    </main>
  )
}

function ContactPage() {
  return (
    <main>
      <h2>Contact</h2>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}>
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="about"
            element={<AboutPage />}
          />
          <Route
            path="contact"
            element={<ContactPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
