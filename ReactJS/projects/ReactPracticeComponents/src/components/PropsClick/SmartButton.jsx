import React from 'react'
import { Download, Send, HelpCircle, Ban } from 'lucide-react'

export default function SmartButton({ children, num, ...props }) {
  //console.log(props)

  const checkButtonType = props.type
  let buttontype

  if (checkButtonType == 'download') buttontype = <Download />
  if (checkButtonType == 'send') buttontype = <Send />
  if (!checkButtonType == 'send') buttontype = <HelpCircle />

  if (children) {
    return (
      <button
        title={props.type}
        {...props}
        style={{ color: '#000c15', fontSize: '1rem' }}>
        {buttontype}
        {num}
        {children}
      </button>
    )
  }
  return (
    <button
      {...props}
      disabled>
      <strong>
        {' '}
        <Ban style={{ color: 'red' }} />
        Define children to use this button
      </strong>
    </button>
  )
}
