import React from 'react'
import { ToggleContext } from './Toggle'

export default function ToggleButton({ children }) {
  const { on, toggle } = React.useContext(ToggleContext)

  function handleChangeState() {
    setTimeout(() => {
      toggle()
    }, 2000)
  }

  return <div onClick={handleChangeState}>{children}</div>
}
