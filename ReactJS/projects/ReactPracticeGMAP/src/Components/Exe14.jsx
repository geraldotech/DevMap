import React from 'react'

export default function Exe14() {

  const condition = 10> 4;

  return (
    
   <div className='container'>
   <h1>Exe  14</h1>
    <button disabled={condition}>DOWNLOAD </button>
    <button>Download 2</button>
   </div>
    
  )
}
