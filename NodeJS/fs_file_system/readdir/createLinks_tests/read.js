const fs = require('fs')

fs.readFile('index.js', (err, data) => {
  console.log(data.toString())

  data.toString().replace('change', 'change2')
})
