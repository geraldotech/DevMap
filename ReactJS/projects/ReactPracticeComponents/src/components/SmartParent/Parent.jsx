import React, { useState } from 'react'

const ToggleContexto = React.createContext()

function Parent({ children }) {
  const [on, setOn] = useState(true)
  const [saldo, setSaldo] = useState(100)

  function toggle() {
    setOn(prev => !prev)
    // onClick set a saldo
    setSaldo(prev => prev + 1)
  }

  return <ToggleContexto.Provider value={{ on, toggle, saldo }}>{children}</ToggleContexto.Provider>
}

export default Parent

export { ToggleContexto }
