const fs = require('fs');
const read = require('readline');


fs.readFile('array.txt',function(err,data){

let str = data.toString();

let newStr = str.substr(0,10);

console.log(newStr);

})