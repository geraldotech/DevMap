const fs = require('fs');

fs.writeFile('file2.txt','teste',function(err){
    if(err) throw err;
    console.log('arquivo criado com sucesso!');
})