import { useState } from 'react'
export default function Exe6() {
  const [on, setOn] = useState(false)
  let x = 10

  function toggle() {
    //setOn((prev) => !prev)
    setOn((prevOn) => !prevOn)
  }

  return (
    <div className="container">
      <h2>Exe6</h2>
      <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>

      {on && <div>LIGADO</div>}
      {on ? <div>LIGADO</div> : <p>DESLIGADO</p>}
      {on ? <div>ON</div> : null}
    </div>
  )
}
