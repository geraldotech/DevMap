import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/about'
import Form from './components/Form'
import Home from './components/Home'
import Sunday from './Sunday'

function App() {
  return (
    <div className="topMenu">
      <nav>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {' '}
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />}>
              Home
            </Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/form" element={<Form />}></Route>
          </Routes>
        </Router>
      </nav>

      <Sunday />
    </div>
  )
}

export default App
