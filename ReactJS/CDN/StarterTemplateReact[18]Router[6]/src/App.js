const { useState } = React
const { Routes, BrowserRouter, Route, Link, HashRouter, Outlet } = ReactRouterDOM

import Home from './src/components/Home.js'
import About from './src/components/About.js'

/* Gmap Component */
const Gmap = () => <h1 className="bg-blue-400 text-4xl mt-5">GmapDev from strings</h1>

/* Form Component */
class Form extends React.Component {
  render() {
    const age = () => {
      return 31
    }

    const msn = 'Form Class Component'
    return (
      <h1>
        {msn} - {age()}
      </h1>
    )
  }
}
/* Main App Component */
function App() {
  const [counter, setCounter] = useState(0)

  function Increment() {
    setCounter((prevCounter) => prevCounter + 1)
  }
  function Decrement() {
    setCounter((prevCounter) => prevCounter - 1)
  }

  return (
    <div className="container mx-auto">
      {/* to remove hash remove <HashRouter/> parent by <BrowserRouter/> */}

      <nav>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              exact
              element={<Home />}></Route>
            <Route
              path="posts"
              element={<Posts />}>
              <Route
                index
                element={<PostsList />}
              />
              <Route
                path=":slug"
                element={<Post />}></Route>
            </Route>
            <Route
              path="/about"
              element={<About />}></Route>
            <Route
              path="/gmap"
              element={<Gmap />}></Route>
            <Route
              path="/test"
              element={<h1 className="bg-green-900 ">Test Page</h1>}
            />
            <Route
              path="/chatgpt"
              element={<ChatGTP />}
            />
            <Route
              path="*"
              element={<h1>404 page</h1>}
            />
          </Routes>
        </HashRouter>
      </nav>

      <Form />

      <section className="text-center bg-gray-500 p-5 mt-20">
        <button
          className="bg-gray-300 font-bold p-2 mx-5 rounded hover:bg-gray-400 transition ease-in-out delay-150"
          onClick={Decrement}>
          Decrement Value
        </button>

        <button
          className="bg-gray-300 font-bold p-2 mx-5 rounded hover:bg-gray-400 transition ease-in-out delay-150"
          onClick={Increment}>
          Increase Value
        </button>

        <h1 className="text-4xl my-10">{counter}</h1>
      </section>

      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">React Blogger</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a
              href="https://flowbite.com/"
              className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
