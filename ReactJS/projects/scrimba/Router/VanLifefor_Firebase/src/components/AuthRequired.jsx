import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

export default function AuthRequired() {
  const authenticated = false
  const isLoggeing = localStorage.getItem('loggedin')
  const location = useLocation()

  if (!isLoggeing) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.

    return <Navigate to="/login" state={{ message: 'You must log in first', from: location }} replace />
  }

  return <Outlet />
}
