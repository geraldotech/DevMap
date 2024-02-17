import React from 'react'
import { Outlet, Link, Navigate } from 'react-router-dom'

export default function AuthRequired() {
  const authenticated = true
  // Check the authenticated status of the user
  // If they're NOT authenticated
  // send the user to the login page
  // If they ARE authenticated
  // Render the Outlet

  /*   if (!authenticated) {
    return
  }
  return <Outlet /> */

  if (!authenticated) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
