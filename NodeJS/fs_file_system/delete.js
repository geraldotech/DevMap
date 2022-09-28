const fs = require('fs');
const read = require('readline');


fs.unlink('file2.txt',function(err){
    console.log("apagado foi (unlink) apagado!");
});