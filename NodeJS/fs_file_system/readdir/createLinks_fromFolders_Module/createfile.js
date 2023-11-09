/* created by #gmapdev */

const fs = require('fs/promises')
const path = require('path')

/* If want specific folder incluing all sub folders  */

/* fs.readdir(path.join(__dirname, 'containers')).then((files) =>  */

const parent = 'containers'
fs.readdir(path.join(__dirname, parent)).then((files) => {
  //exclude this folders and files from links
  const keys = ['js', 'html', 'src', 'README']
  const folders = files.filter(
    (val) => !keys.some((exclui) => val.includes(exclui))
  )

  const template = `const links = ${Array.from(JSON.stringify(folders)).join(
    ''
  )}
export default links; `

  fs.writeFile('./src/links.js', template, function (err) {
    if (err) throw err
    console.log('file created with success!')
  })
})
