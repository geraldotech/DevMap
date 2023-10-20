const fs = require('fs/promises')
const path = require('path')

/* fs.readdir(path.join(__dirname)).then((files) => {
  const pdf = files.filter((file) => file.endsWith('pdf'))
  console.log(pdf)
})
 */

/* fs.readdir(path.join(__dirname)).then((files) => {
  // get only extensions
  const pdf = files.filter((file) => console.log(path.extname(file)))
}) */

/* my version
fs.readdir(path.join(__dirname)).then((files) => {
  const acceptedExtensions = ['.pdf', '.html']

  const myfilter = files.filter((file) =>
    acceptedExtensions.some((cada) => file.endsWith(cada))
  )
  console.log(myfilter)
})
  */

// v2
fs.readdir(path.join(__dirname)).then((files) => {
  const acceptedExtensions = ['.pdf', '.html']
  // get only extensions
  const pdf = files.filter((file) =>
    acceptedExtensions.includes(path.extname(file))
  )
  console.warn(pdf)
})
