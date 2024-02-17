import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='site-wrapper'>
      <h6>This is the Layout page</h6>
      <Header />
      <Outlet />
      <Footer />
      </div>
  )
}
