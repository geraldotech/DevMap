import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './pages/Home/Details'
import Layout from './components/Layout'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
