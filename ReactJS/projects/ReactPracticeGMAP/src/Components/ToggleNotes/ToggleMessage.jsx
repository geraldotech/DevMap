import React from 'react'

import { ToggleContext } from './toggle'

export default function ToggleMessage() {
  const { on } = React.useContext(ToggleContext)

  return <div>{on ? 'show' : 'off'}</div>
}
