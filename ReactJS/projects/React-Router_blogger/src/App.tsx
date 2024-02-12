import './App.css'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

// reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="main">
      <Navbar />
      {/*   <h1>React Router</h1> */}
      <section className="content">
        <Outlet />
      </section>
      <Footer />
    </div>
  )
}

export default App
