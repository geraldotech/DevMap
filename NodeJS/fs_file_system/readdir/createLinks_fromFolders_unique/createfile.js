const fs = require('fs/promises')
const path = require('path')

fs.readdir(path.join(__dirname)).then((files) => {
  //exclude from links
  const keys = ['js', 'html', 'src']

  const folders = files.filter((val) => !keys.some((sum) => val.endsWith(sum)))

  const template = `
const links = ${Array.from(JSON.stringify(folders)).join('')}

 document.querySelector('#root').innerHTML = links.map(${(val) => {
   return `<a href="${val}">${val}</a>`
 }}).join(' ') `

  fs.writeFile('./src/index.js', template, function (err) {
    if (err) throw err
    console.log('arquivo criado com sucesso!')
  })
})
