//leitura de arquivos
const fs = require('fs');


fs.readFile('geraldo.txt',function(err,data){

    console.log((data.toString()));;
    //toString() buffer converte para String
})