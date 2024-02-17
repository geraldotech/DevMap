import React from 'react'
import PropTypes from 'prop-types'

const SayHello = (props) => {
  return (
    <>
      <h1>Page 3</h1>
      <div>Nome:{props.name}</div>
      <div>Age: {props.age}</div>
    </>
  )
}

SayHello.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
}

export default SayHello
