const fs = require('fs')

fs.readFile('index.js', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  const result = data.replace('Geraldo', 'Fel')

  fs.writeFile('index.js', result, 'utf8', function (err) {
    if (err) return console.log(err)
  })
})
