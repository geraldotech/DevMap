import {links, currentDir} from './links.js'

console.log(currentDir)

document.getElementById('root').innerHTML = links
  .map((val) => {
    return `<a href="${currentDir}/${val}">${val}</a>`
  })
  .join(' ')
