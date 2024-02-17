import React from 'react'
import useEffectOnUpdate from '../../../../hooks/useEffectOnUpdate'
import useToggle from '../../../../hooks/useToggle'

const ToggleContext = React.createContext()

// Toggle aceita uma prop onToggle, essa nao passa pelo Provider

//to check has funtion
// "noop function " no operation
// so was added onToggle is a empty
export default function Toggle({ children, onToggle = () => {} }) {
  //const [on, setOn] = React.useState(false)
  const firstRender = React.useRef(true)

  // usando custom Hooks
  // complete arbitrary you can use others names if you want
  const [on, setOn] = useToggle()

  useEffectOnUpdate(() => {
    onToggle()
  }, [on])

  // inline useEffectOnUpdate(onToggle(), [on])

  function toggle() {
    setOn((prevOn) => !prevOn)
  }

  return <ToggleContext.Provider value={{ on, toggle }}>{children}</ToggleContext.Provider>
}
export { ToggleContext }

/*
BEFORE USE CUSTOM HOOKS
const ToggleContext = React.createContext()

// Toggle aceita uma prop onToggle, essa nao passa pelo Provider 

//to check has funtion
//noop no operation
//so was added onToggle is a empty
export default function Toggle({ children, onToggle = () => {} }) {
  const [on, setOn] = React.useState(false)
  const firstRender = React.useRef(true)

  function toggle() {
    setOn((prevOn) => !prevOn)
  }

  React.useEffect(() => {
    //resolve o bug de chamar o toggled na primeira renderizacao, only call
     //when click button 
    if (firstRender.current) {
      firstRender.current = false
    } else {
      onToggle()
    }
    //onToggle()
  }, [on])

  return <ToggleContext.Provider value={{ on, toggle }}>{children}</ToggleContext.Provider>
}

export { ToggleContext } 
*/
