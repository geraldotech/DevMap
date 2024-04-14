import React from 'react'

export default function isArrayWithObjects(arr) {  

  const check = Array.isArray(arr) && arr.length > 0 && arr.every(item => typeof item === 'object' && item !== null && !Array.isArray(item));

  return check
}
