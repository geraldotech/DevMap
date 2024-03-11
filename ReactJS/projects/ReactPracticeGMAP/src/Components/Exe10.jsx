import React from 'react'
import { Toggle, ToggleButton, ToggleMessage, ToggleOn, ToggleOff } from './ToggleNotes'

export default function Exe10() {
  return (
    <div className='container'>
      <h1>Exe10</h1>
      <Toggle>
        <ToggleButton>
          <ToggleMessage />
        </ToggleButton>
        <ToggleOn>ativado</ToggleOn>
        <ToggleOff>desligado</ToggleOff>
      </Toggle>
    </div>
  )
}
