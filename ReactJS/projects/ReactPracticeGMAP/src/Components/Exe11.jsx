import React from 'react'
import Toggle from './ReactContext'
import { BsStar, BsStarFill } from 'react-icons/bs'
import Star from './ReactContext/Start'

export default function Exe11() {
  return (
    <div className='container'>
      <h1>Exe11</h1>

    <Toggle>
      <Toggle.Button>
          <Star/>
      </Toggle.Button>
    </Toggle>
    </div>
  )
}
