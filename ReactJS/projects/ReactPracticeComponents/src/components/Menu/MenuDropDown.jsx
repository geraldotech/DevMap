import React from 'react'
import { MenuContext } from './Menu'
//import isArrayWithObjects from '../Hooks/isArrayWithObjects'

export default function MenuDropDown({ items, keyName }) {
  const { on } = React.useContext(MenuContext)

  let data = items
  
  if (on && Array.isArray(data) && data.length > 0) {
    // If it's an array, check if the first element is an object
    if (typeof data[0] === 'object' && data[0] !== null && !Array.isArray(data[0])) {
      // If it's an array of objects, handle it accordingly
      return data.map((obj, index) => (
        <div key={index}>

           {/* Render the specified key-value pair */}
           <p>{`${obj[keyName]}`}</p>
        </div>
      ));
    } else {
      // If it's a plain array, just render its elements
      return data.map((item, index) => (
        <p key={index}>{item}</p>
      ));
    }
  } else {
    // If it's neither an array nor an array of objects, return null
    return null;
  }
 
}
