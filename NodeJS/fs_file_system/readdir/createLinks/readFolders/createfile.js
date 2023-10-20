const fs = require('fs/promises')
const path = require('path')

fs.readdir(path.join(__dirname)).then((files) => {
  console.log(files)
})
