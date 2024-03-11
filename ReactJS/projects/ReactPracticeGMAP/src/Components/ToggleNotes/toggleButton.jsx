import React from 'react'
import { ToggleContext } from '../ToggleNotes/toggle'

export function ToggleButton({ children }) {
  const { toggle } = React.useContext(ToggleContext)

  return <button onClick={toggle}>{children}</button>
}
