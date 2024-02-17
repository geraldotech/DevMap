import React from 'react'
import classNames from 'classnames'
/**
 * https://scrimba.com/learn/react/button-fix-classname-issue-codf94a228624327bb16a7802
 * Challenge: accept the `size` prop and set the `className` of the
 * <button> to:
 *
 * "button-small" if `size` is "sm"
 * "button-large" if `size` is "lg"
 *
 * Note: don't try to manually add a `className` to the Button
 * instance in index.js yet. (DO add `className` to this file
 * as part of the challenge, though.)
 */

function ButtonChallenge({ children, size, className, variant, ...rest }) {
  /* ======= ✅VERSION 1 com ternary======== */

  let sizeClass = size ? `${size}` : ''
  // classNames é um library que joining classNames, fiz uso, mais penso que dependendo do cenário é muito desnecessário
  const allClass = classNames(sizeClass, className)
  console.log(allClass) // allClass recebe todas as classes so usar no ClassName={allClass}

  /* ======= ✅VERSION  2 with ifs======== */

  // let sizeClass
  // rest.className adiciona o valor extra além das predefinidas
  // if (size === 'sm') sizeClass = `'small' // ${className}`
  // if (size === 'lg') sizeClass = 'big ' // + className

  // NOTE se nao tiver ...rest como props do button, tera que chamar  ${rest.className}`
  //v2// sizeClass = sizeClass + ` ${className}`
  // v3 className={sizeClass + ' ' + className}
  // v4 below template strings

  return (
    <button className={`${sizeClass} ${className} ${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default ButtonChallenge
