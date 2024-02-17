import React, { useState } from 'react'
import '../../../src/App.css'
import Menu from './Page2Components/MenuChallenge3/index'
import MenuHook from './Page2Components/MenuChallengeUseHooks'
import Star from './Page2Components/StarrWtoggleExternal/Star'
import UnderstandReffs from '../RefsPage3/UnderstandReffs'
import FormReact from '../RefsPage3/FormReact'
import Decision from '../Decision'
import Decision2 from '../Decision2'
import Decision3 from '../Decision3'
import Toggle from './Page2Components/Toggle'
import StarHook from './Page2Components/StartHooks/Star'

const ThemeContext = React.createContext()

export function Page3() {
  const sports = ['Tennis', 'Racquetal', 'Pickball', 'Squash']

  return (
    <>
      <h1>Challenge:</h1>
      <p>
        * Move other Toggle logic to be composed with the Menu <br />* components internally, so the person using our Menu <br />* component never needs to touch the generic Toggle at all.
      </p>

      <Menu onOpen={() => console.log(`Menu toggled`)}>
        <Menu.Button className="button">Sports List</Menu.Button>
        <Menu.Dropdown>
          {sports.map((sport) => (
            <Menu.Item key={sport}>{sport}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>

      <Star onChange={() => console.log(`Star was clicked! `)} />
      <UnderstandReffs />

      <hr></hr>

      <FormReact />

      <hr></hr>

      <Decision
        sayName={function (bool) {
          console.log(bool)
        }}
      />
      <hr></hr>

      <p>O params pode ser qualquer nome</p>
      <Decision sayName={(verdade) => console.log(verdade ? 'Vou sair' : 'nao vou sair')} />

      <hr></hr>
      <p>Get React Elements - JS Objects</p>
      <p>
        Decision expose internal state to delegate what it render in parent component
        <code>check console.log(sayName(goingOut))</code>
      </p>
      <Decision2
        render={(goingOut) => {
          return <h1>Am I going out tonight?? {goingOut ? 'Yes!' : 'Nope...'}</h1>
        }}
      />
      <hr></hr>
      <p>&#10100;children version&#10101;</p>
      <Decision3>
        {(goingOut) => {
          return <h1>Am I going out tonight?? {goingOut ? 'Yes!' : 'Nope...'}</h1>
        }}
      </Decision3>

      <hr></hr>
      <h1>Div toggle color Challenge</h1>

      {/*  Challenge:
       * Part 2:
       * Instead of rendering Toggle.On and Toggle.Off, use a single
       * Toggle.Display to render the div below. Toggle.Display will
       * take a function as a child (don't forget to wrap that function
       * in curly braces since it's JS inside of JSX) and will receive
       * the `on` state as its parameter.
       *
       * From that function, you should return the div below, but this
       * time conditionally render the `filled` className based on
       * the value of `on`.
       *
       * You'll know it worked if clicking the box shows a transition
       * between the white background and the blue background. See
       * style.css for details on what's happening there. */}

      {/* vai prover UM fn para rendeizar baseado no state que o pai contem */}
      <Toggle>
        <Toggle.Button>
          <Toggle.On></Toggle.On>
          <Toggle.Off></Toggle.Off>
          <Toggle.Display>{(on) => <div className={`box ${on ? 'filled' : ''}`}></div>}</Toggle.Display>
        </Toggle.Button>
      </Toggle>

      <hr></hr>
      <h2>Using toggle() custom Hooks</h2>
      {/*   <StarHook /> */}

      <hr></hr>
      <h1>Menu Challenge toggle() custom Hooks</h1>
      <MenuHook onOpen={() => console.log('Opened/closed')}>
        <MenuHook.Button className="button">Sports List</MenuHook.Button>
        <MenuHook.Dropdown>
          {sports.map((sport) => (
            <MenuHook.Item key={sport}>{sport}</MenuHook.Item>
          ))}
        </MenuHook.Dropdown>
      </MenuHook>
    </>
  )
}

export { ThemeContext }
