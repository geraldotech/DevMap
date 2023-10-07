const fs = require('fs')

fs.stat('/etc/passwd', function (err, stat) {
  if (err == null) {
    //Exist
    console.log(`existe`)
  } else if (err.code == 'ENOENT') {
    // NO exist
    console.log(`nao tem`)
  }
})
