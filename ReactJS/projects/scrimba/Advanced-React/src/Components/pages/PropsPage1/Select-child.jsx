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

/*
// or
const Select = ({ text, children }) => {
  return (
    <div>
      <h2> {text}</h2>
      <select>{children}</select>
    </div>
  )
}

export default Select
 */
