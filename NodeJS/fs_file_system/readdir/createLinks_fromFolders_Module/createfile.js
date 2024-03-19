/* created by #gmapdev */

const fs = require('fs/promises')
const path = require('path')

/* If want specific folder incluing all sub folders  */

/* fs.readdir(path.join(__dirname, 'containers')).then((files) =>  */



// remove containers folder or change ther name to get all files in root but in jeys you can set what will be not includes in final array list
// need adjust custom link in src/index

const customDir = 'containers'

fs.readdir(path.join(__dirname, customDir)).then((files) => {
  //exclude this folders and files from links
  const keys = ['js', 'html', 'src', 'README']
  const folders = files.filter(
    (val) => !keys.some((exclui) => val.includes(exclui))
  )

  const template = `
const links = ${Array.from(JSON.stringify(folders)).join('')}
let currentDir = '${customDir}'
export {links, currentDir}; `

  fs.writeFile('./src/links.js', template, function (err) {
    if (err) throw err
    console.log('file created with success!')
  })
})
