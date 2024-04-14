import React from "react"
import Menu from "./components/Menu/Menu"
import MenuButton from "./components/Menu/MenuButton"
import MenuDropDown from "./components/Menu/MenuDropDown"
import { MenuDrilling } from './components/MenuDrilling/Menu'

/* Menu Drilling Children */

import { MenuChildren } from './components/MenuDrillingChil/Menu'
import { MenuChilBtn } from './components/MenuDrillingChil/MenuButton'
import { MenuDropdown } from './components/MenuDrillingChil/MenuDropdown'
import Item from './components/MenuDrillingChil/MenuItem'

import { Company, CompanyButton, CompanyMenu } from "./components/Company/Company"

import Parent from './components/SmartParent/Parent'
import SonBtn from './components/SmartParent/SonBtn'
import Content from './components/SmartParent/content'

import { SmartDrilling } from './components/PropsClick/SmartDrilling'



function App() {
  const [on, setOn] = React.useState(false)
  const natoAlphabet = [
    { letter: 'a', phonetic: 'Alpha' },
    { letter: 'b', phonetic: 'Bravo' },
    { letter: 'c', phonetic: 'Charlie' },
    { letter: 'd', phonetic: 'Delta' },
    { letter: 'e', phonetic: 'Echo' },
    { letter: 'f', phonetic: 'Foxtrot' },
    { letter: 'g', phonetic: 'Golf' },
    { letter: 'h', phonetic: 'Hotel' },
    { letter: 'i', phonetic: 'India' },
    { letter: 'j', phonetic: 'Juliett' },
    { letter: 'k', phonetic: 'Kilo' },
    { letter: 'l', phonetic: 'Lima' },
    { letter: 'm', phonetic: 'Mike' },
    { letter: 'n', phonetic: 'November' },
    { letter: 'o', phonetic: 'Oscar' },
    { letter: 'p', phonetic: 'Papa' },
    { letter: 'q', phonetic: 'Quebec' },
    { letter: 'r', phonetic: 'Romeo' },
    { letter: 's', phonetic: 'Sierra' },
    { letter: 't', phonetic: 'Tango' },
    { letter: 'u', phonetic: 'Uniform' },
    { letter: 'v', phonetic: 'Victor' },
    { letter: 'w', phonetic: 'Whiskey' },
    { letter: 'x', phonetic: 'X-ray' },
    { letter: 'y', phonetic: 'Yankee' },
    { letter: 'z', phonetic: 'Zulu' }
  ];

  const natoPhoneticAlphabet = [
    'Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel',
    'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa',
    'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey',
    'X-ray', 'Yankee', 'Zulu'
  ];

  function toggle() {
    setOn(prev => !prev)
  }

  return (
    <>
      <h1>1 - Create a single Nested Component = Company - CompanyButton - CompanyMenu</h1>
      <Company>
        <CompanyButton toggle={toggle} />
        <CompanyMenu items={['A', 'B', 'C']} on={on} />
      </Company>

      <hr></hr>
      <Menu>
        <MenuButton>Toggle Menu</MenuButton>
        <MenuDropDown items={natoAlphabet} keyName={'phonetic'} />
      </Menu>

      <Menu>
        <MenuButton>Toggle Menu</MenuButton>
        <MenuDropDown items={natoPhoneticAlphabet} />
      </Menu>


      <h1>Menu Drilling</h1>
      <MenuDrilling />

      <h1>Menu Drilling with children</h1>

      <MenuChildren>
        <MenuChilBtn>
          Menu button click me
        </MenuChilBtn>

        <MenuDropdown>
          {[1, 2, 4].map((value, index) => (
            <Item key={value}>
              {value}
            </Item>
          ))}
        </MenuDropdown>
      </MenuChildren>

      <h1 id="balance">Smart Context here</h1>
      <Parent>
        <SonBtn>
          <Content />
        </SonBtn>
      </Parent>

      <h1>Estudando Props</h1>
      <SmartDrilling />
    </>
  )
}

export default App
