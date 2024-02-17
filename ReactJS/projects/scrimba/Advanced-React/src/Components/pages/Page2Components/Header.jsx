import React from 'react'
import { ThemeContext } from '../Page2'

export default function Header() {
  //let value = React.useContext(ThemeContext)
  let value = React.useContext(ThemeContext)

  return (
    // v1 concatenacao <header className={value + '-theme'}> or strings literal below
    <header className={`${value.theme}-theme`}>
      {/*v1   <h1>{value[0].toUpperCase() + value.slice(1)} Theme</h1> */}
      <h1>{value.theme === 'dark' ? 'Dark' : 'Light'} Theme</h1>
    </header>
  )
}
