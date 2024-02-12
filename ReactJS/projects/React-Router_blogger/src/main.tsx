import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// configurando router
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Home from './routes/Home'
import Contact from './routes/Contact'
import ErrorPage from './routes/ErrorPage'
import ContactDetails from './routes/ContactDetails'
import Blog from './routes/Blog'
import Template from './routes/Template'

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
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        //path: '/blog/:id',
        path: '/blog/:slug',
        element: <Template />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
