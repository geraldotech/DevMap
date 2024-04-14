import React from 'react'
import { Button } from './Button'
import SmartButton from './SmartButton'

export function SmartDrilling() {
  function hanlderClick() {
    console.log(`click`)
  }

  return (
    <>
      <h2>Props</h2>

      <Button
        onClick={hanlderClick}
        text="Hello I am a Button"
        age={3}
      />

      <Button
        onClick={hanlderClick}
        age="idade text"
        text="Button 2"
      />

      <div style={{ height: '.2rem', backgroundColor: 'dodgerblue', marginBlock: '1em', borderRadius: '10px 10px' }}></div>

      <SmartButton
        type="send"
        num="Send now"
        onClick={hanlderClick}>
        this content
      </SmartButton>

      <SmartButton
        type="download"
        num="Go "
        onClick={hanlderClick}>
        React
      </SmartButton>

      <SmartButton></SmartButton>
    </>
  )
}
