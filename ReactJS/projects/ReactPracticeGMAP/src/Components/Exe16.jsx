import React from 'react'

export default function Exe16() {

  function message(val, index) {
    return <p>Hello from index {index + 1}</p>
  }

  return (
    <>
  <div className='container'>
      <h2>Exe16</h2>
      {Array.from({ length: 10 }).map((val, index) => {
        return (
         /*  <div key={index}>
            <p>
              {index} - {val}
            </p>
          </div> */
          <div key={index}>
            {message(val, index)}
          </div>
        )
      })}
  </div>
    </>
  )
}
