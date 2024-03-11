import { React } from 'react'

const Select = (props) => {
  return (
    <div>
      <h2> {props.text}</h2>
      <select>{props.children}</select>
    </div>
  )
}

export default Select
