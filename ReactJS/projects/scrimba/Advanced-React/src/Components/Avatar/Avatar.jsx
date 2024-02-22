import styles from './Avatar.module.css'
import React from 'react'
import { IoPersonSharp } from 'react-icons/io5'

const Avatar = ({ src, children, alt }) => {


  /* const avatarUlr = src
    ? src
    : 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'

  return (
    <div className={styles.avatar}>
      <img src={avatarUlr} alt={alt} />
      <p>{children ? children : 'default'}</p>
    </div>
  )
   */

  /* VERSION 2 */
  if (src) {
    return (
      <div className={styles.avatar}>
        <img src={src} alt={alt} />
      </div>
    )
  }
  if (children) {
    return <div className={styles.avatar}>{children}</div>
  }

  return (
    <div className="">
      <IoPersonSharp />
    </div>
  )
}

export default Avatar

/* VERSION 3 */

/*
<button onClick={props.onClick}>{!props.text ? 'Default' : props.text}</button>
*/