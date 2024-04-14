import React from 'react'

const MenuContext = React.createContext()

export default function Menu({ children }) {
  const [on, setOn] = React.useState(false)

  function toggle() {
    setOn((prevOn) => !prevOn)
  }

  return <MenuContext.Provider value={{ on, toggle }}>{children}</MenuContext.Provider>
}

export { MenuContext }
