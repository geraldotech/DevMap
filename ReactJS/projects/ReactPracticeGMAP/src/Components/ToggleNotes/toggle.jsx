import React, { useState } from 'react'

const ToggleContext = React.createContext()

export default function Toggle({ children }) {
  const [on, setOne] = useState(false)

  function toggle() {
    setOne((prev) => !prev)
    console.log(on)
  }

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  )
}

export { ToggleContext }
