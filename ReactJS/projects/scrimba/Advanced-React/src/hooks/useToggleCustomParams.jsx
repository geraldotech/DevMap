import React from 'react'
import useEffectOnUpdate from './useEffectOnUpdate'

export default function useToggle({ initialValue = false, onToggle = () => {} }) {
  const [on, setOn] = React.useState(false)

  function toggle() {
    setOn((prevOn) => !prevOn)
    //console.log(`toggled hook`)
  }

  useEffectOnUpdate(onToggle, [on])

  return [on, toggle]
}
