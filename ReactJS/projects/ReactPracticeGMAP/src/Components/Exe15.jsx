import React, { useEffect, useState } from 'react'

export default function Exe14() {

  const [cont, setCont] = useState(0)


  function handlerClick(){
    setCont(prev => prev +1)
  }
  useEffect(() => {
    console.log(`Exe 15 click event`)
  }, [cont])

  return (
    <>
  <div className='container'>
  <h1>Exe 15</h1>
  <button onClick={handlerClick}>Increment</button> 
    <h2>{cont}</h2>  
  </div>
    </>
  )
}
