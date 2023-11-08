import links from './links.js'

document.getElementById('root').innerHTML = links
  .map((val) => {
    return `<a href="${val}">${val}</a>`
  })
  .join(' ')
