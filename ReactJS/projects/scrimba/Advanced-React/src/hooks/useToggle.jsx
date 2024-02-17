import React from 'react'

export default function useToggle() {
  const [on, setOn] = React.useState(false)

  function toggle() {
    setOn((prevOn) => !prevOn)
    //console.log(`toggled hook`)
  }

  return [on, toggle]
}
