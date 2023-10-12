import './App.css'
import Navbar from './components/NavBar'

//reaproveitamente de estrutura
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default App
