const fs = require('fs');
const read = require('readline');


fs.rename('file.txt','file3.txt',function(err){
    console.log("apagado foi renomeado!");
});