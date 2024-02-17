import React, { useState } from 'react'
import '../../../src/App.css'
import Button from './Page2Components/Button'
import Header from './Page2Components/Header'
/* Menu */
import Menu from './Page2Components/Menu/index'
/* Menu Toggle
 */
import MenuToggle from './Page2Components/MenuWtoggleExternal/index'

const ThemeContext = React.createContext()

/* Headless Components */
import Star from './Page2Components/Star/Star'
import Toggle from './Page2Components/Toggle/index'
import { BsStarFill, BsStar } from 'react-icons/bs'

export default function Page2() {
  const sports = ['Tennis', 'Racquetal', 'Pickball', 'Squash']

  /**
   * Challenge part 1:
   * Add state to the App component. Default value === "light".
   * Pass that state as the value to the context provider.
   */
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <h1>React Context</h1>
      <ol>
        <li>create const ThemeContext = React.createContext</li>
        <li>wrapper ThemeContext.Provider value="..." </li>
        <li>export &#10100; ThemeContext &#10101;</li>
        <li>
          <b>Para outros componentes ter acesso:</b>
        </li>
        <li>Verificar a Header.jsx</li>
        <li>import contenxt from '../ComponentPaiProvider'</li>
        <li>Definir um: let value = React.useContext(ThemeContext)</li>
        <li>
          aqui usar <strong>React.useState</strong> != useState()
        </li>
      </ol>

      {/* Neste exemplo o createContext foi criado dentro do parent <Menu/> e nao aqui no App.js
      
     👉 mesmo wrapper com whatever tag like <main> o code still works, because context Teletransporta o state
      */}

      <Menu>
        <main>
          <Menu.Button className="button">Sports List</Menu.Button>
          <Menu.Dropdown>
            {sports.map((sport) => (
              <Menu.Item key={sport}>{sport}</Menu.Item>
            ))}
          </Menu.Dropdown>
        </main>
      </Menu>

      <hr></hr>
      <h1>Headless Components</h1>
      <p>don't have any styled UI to display; they're purely intented to provide functionality.</p>

      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="start filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="start" />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>

      <Toggle>
        <MenuToggle>
          <Toggle.Button>
            <MenuToggle.Button className="button">Sports List [Headless]</MenuToggle.Button>
          </Toggle.Button>
          <Toggle.On>
            <MenuToggle.Dropdown>
              {sports.map((sport) => (
                <Menu.Item key={sport}>{sport}</Menu.Item>
              ))}
            </MenuToggle.Dropdown>
          </Toggle.On>
        </MenuToggle>
      </Toggle>

      <Toggle>
        <Star />
      </Toggle>
      <hr></hr>

      {/*   <ThemeContext.Provider value={theme}>
        <div className="containerTheme dark-theme">
          <Header />
          <Button onClick={toggleTheme} />
        </div>
      </ThemeContext.Provider> */}

      {/* Challenge partNow that we're passing an object instead of a string value={theme} COMO O EXEMPLO ANTERIOR through context, update the Button and Header components to receive correct values again. */}

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {/*  <div className="containerTheme light-theme"> */}
        <div className={`containerTheme ${theme}-theme`}>
          <Header />
          <Button onClick={toggleTheme} />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export { ThemeContext }
