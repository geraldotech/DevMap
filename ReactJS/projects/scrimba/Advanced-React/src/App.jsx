import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/pages/Home'
import Page1 from './Components/pages/Page1'
import Page2 from './Components/pages/Page2'
import { Page3 } from './Components/pages/Page3'

function App() {
  return (
    <Router>
      <nav className="top-menu">
        <Link to="/">Home</Link>
        <Link
          to="/page1"
          title="Props, button Compound-Components - prop drilling">
          Page 1
        </Link>
        <Link
          to="/page2"
          title="React Context">
          Page 2
        </Link>
        <Link
          to="/page3"
          title="React Context">
          Page 3
        </Link>
      </nav>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}></Route>
          <Route
            exact
            path="/page1"
            element={<Page1 />}></Route>
          <Route
            exact
            path="/page2"
            element={<Page2 />}></Route>
          <Route
            exact
            path="/page3"
            element={<Page3 />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
