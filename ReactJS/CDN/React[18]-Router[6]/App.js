// const Router = ReactRouterDOM.BrowserRouter
// const Routes = ReactRouterDOM.Routes
// const Route = ReactRouterDOM.Route
// const Link = ReactRouterDOM.Link

const { Routes, BrowserRouter, Route, Link } = ReactRouterDOM

function Contact() {
  return <h1>Contact Page</h1>
}

const App = () => (
  <>
    <BrowserRouter>
      <Link to="/">Home</Link> <br></br>
      <Link to="/contact">Contact</Link>
      <Routes>
        <Route
          path="/"
          element={<h1>Home Page</h1>}></Route>
        <Route
          path="/contact"
          element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  </>
)

const Home = () => <h1>Home</h1>
const Login = () => <h1>Login</h1>
const Register = () => <h1>Register now</h1>

ReactDOM.createRoot(document.querySelector('#root')).render(<App />)
