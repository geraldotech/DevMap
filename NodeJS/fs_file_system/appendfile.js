const fs = require('fs');

fs.appendFile('geraldo.txt','\n outro conteudo',(err)=>{
    if(err) throw err;
    console.log('salvo novamente com sucesso! ');
})