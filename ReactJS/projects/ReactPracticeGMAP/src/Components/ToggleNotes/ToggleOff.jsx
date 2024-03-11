import React from 'react'

import { ToggleContext } from './toggle'

export default function ToggleOn({ msn, children }) {
  const { on } = React.useContext(ToggleContext)

  return <p>{on ? null : children}</p>
}
