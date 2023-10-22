const fs = require('fs/promises')
const path = require('path')

fs.readdir(path.join(__dirname)).then((files) => {
  //exclude from links
  const keys = ['js', 'html', 'src']
  const folders = files.filter((val) => !keys.some((sum) => val.endsWith(sum)))

  const template = `const links = ${Array.from(JSON.stringify(folders)).join(
    ''
  )}
export default links; `

  fs.writeFile('./src/links.js', template, function (err) {
    if (err) throw err
    console.log('arquivo criado com sucesso!')
  })
})
