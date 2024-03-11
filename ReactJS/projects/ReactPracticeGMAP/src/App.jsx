import { useState, useRef } from 'react'
import { FaAddressBook } from 'react-icons/fa6'
import './App.css'
import Exe1 from './Components/Exe1'
import Exe2 from './Components/Exe2'
import Exe3 from './Components/Exe3'
import Exe4 from './Components/Exe4'
import Exe5 from './Components/Exe5'
import Exe6 from './Components/Exe6'
import Exe7 from './Components/Exe7'
import Exe8 from './Components/Exe8'
import Exe9 from './Components/Exe9'
import Exe10 from './Components/Exe10'
import Exe11 from './Components/Exe11'
import Exe12 from './Components/Exe12'
import Exe13 from './Components/Exe13'
import Exe14 from './Components/Exe14'
import Exe15 from './Components/Exe15'
import Exe16 from './Components/Exe16'
import Exe17 from './Components/Exe17'
import Exe18 from './Components/Exe18'

import Saudacao from './Components/Saudacao'
import Toggle from './Components/ReactContext/index'
import Star from './Components/ReactContext/Start'


import Menu from './Components/Menu/Menu'

function App() {
  const [name, setName] = useState()

  return (
    <>
      <Exe1 />
      <Exe2 />
      <Exe3 />
      <Exe4 />
      <Exe5 />
      <Exe6 />
      <Exe7 />
      <h1>Exe 8</h1>
      <Exe8 min={10}>Geraldo Filho</Exe8>

      <div className="container">
        <Exe9 Propname={setName} />
        <p>{name}</p>
      </div>

      <Saudacao nome={name} />
      <Exe10 />
      <h1>10 continue... - Toggle React.Context </h1>
      <h2>Challenge:</h2>
      <ul>
        <li>1. Create a ToggleButton component</li>
        <li>2. Receive the `toggle` function from context </li>
        <li>3. Render a div with an onClick that calls `toggle`</li>
      </ul>
      <Toggle>
        <Toggle.Button>
          <Star />
        </Toggle.Button>
      </Toggle>

      <Exe11 />
      <Exe12 />
      <Exe13 />
      <Exe14 />
      <Exe15 />
      <Exe16 />   
      <Exe17 />   
      <Exe18 />   

      <Menu
        buttonText="Menu"
        items={['Download', 'Songs', 'Google']}
      />
    </>
  )
}

export default App
