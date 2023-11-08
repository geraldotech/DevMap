const fs = require('fs/promises')
const path = require('path')

// get all files
let html
fs.readdir(path.join(__dirname)).then((files) => {
  html = files.filter((file) => path.extname(file).includes('.html'))

  const template = `
const links = ${Array.from(JSON.stringify(html)).join('')}

 document.querySelector('#root').innerHTML = links.map(${(val) => {
   return `<a href="${val}">${val}</a>`
 }}).join(' ') `
  /*   const template = `
  const links = ${JSON.stringify(html)}
  console.log(links)
  document.querySelector('#root').innerHTML = \`${9 + 9}\`
  ` */

  fs.writeFile('index.js', template, function (err) {
    if (err) throw err
    console.log('arquivo criado com sucesso!')
  })
})
