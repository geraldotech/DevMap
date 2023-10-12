# React Router 2023

`main.jsx`

```jsx
// import router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// make folder src/router > components and import
import Home from './routes/Home'
import Contact from './routes/Contact'

// set array with objects
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])

// instead <App/>
   <RouterProvider router={router} />
```

- Mas para reaprover components go to App.jsx and import Outlet

```js
import './App.css'

//reaproveitamente de estrutura
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <p>NavBar</p>
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default App
```

now change Array to

```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])
```

- Creating a 404 page: make a component and import
- now add between element and children

```js
 element: <App />,
 /* ➡️ */    errorElement: <ErrorPage />,
    children: ....

```

- creating Navbar in `components/Navbar.jsx`

```jsx
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'/contact'}>Contacts</Link>
    </nav>
  )
}

export default Navbar
```

- import in `App.jsx` and done

## Nested Routers

> nested routers - dynamic routes

- create a `ContactDetails component`
- add a new path object with dinamic :id

```jsx
children: [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  //nested routers
  {
    path: '/contact/:id',
    element: <ContactDetails />,
  },
],
  (
    // in parent page Contact.jsx import Links and make a menu
    <div>
      <p>
        <Link to="/contact/1">Contato</Link>
      </p>
      <p>
        <Link to="/contact/2">Contato 2</Link>
      </p>
      <p>
        <Link to="/contact/3">Contato 3</Link>
      </p>
    </div>
  )
```

# useParams Hook

- Getting the id
- add this hook in ContactsDetails
- set a const and use it

```js
import { useParams } from 'react-router-dom'

const ContactDetails = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>Contacts</h1>
      <h2>Pagina: {id}</h2>
    </div>
  )
}

export default ContactDetails

// redirect
import { useParams, useNavigate } from 'react-router-dom'

const ContactDetails = () => {
  const { id } = useParams()

  // redirect
  // simulando redirecionar para home apos enviar o form

  const navigate = useNavigate()
  const handleContact = () => {
    console.log('Contato enviado')
    return navigate('/')
  }
  return (
    <div>
      <h1>Contacts</h1>
      <h2>Pagina: {id}</h2>
      <button onClick={handleContact}>Enviar</button>
    </div>
  )
}

export default ContactDetails

// redirect: Navigate
// main.tsx

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      //nested routers - dynamic routes
      {
        path: '/contact/:id',
        element: <ContactDetails />,
      },
      // navigate | redirect
      {
        path: 'oldcontact',
        element: <Navigate to="/contact" />,
      },
    ],
  },
])

```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
