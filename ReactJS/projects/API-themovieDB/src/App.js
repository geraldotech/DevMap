import React, { useState } from 'react'
import './global.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './pages/Home/Details'
import Layout from './components/Layout'

export default function App() {
  const [idioma, setIdioma] = useState('en-US')

  function toggleLanguage() {
    setIdioma((previdioma) => (previdioma === 'en-US' ? 'pt-BR' : 'en-US'))
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout mylanguage={toggleLanguage} textLanguage={idioma} />}>
            <Route path="/" element={<Home languagetype={idioma} />} />
            <Route path="/details/:id" element={<Details languagetype={idioma} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
