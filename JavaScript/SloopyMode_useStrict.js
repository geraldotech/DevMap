/*
Sloopy Mode vs use strict
- [use strict](https://www.w3schools.com/js/js_strict.asp)
- By default JS is in Sloppy Mode `modo desleixado`
- The entire contents of type: module are automatically in strict mode, with no statement needed to initiate it 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

// Sloppy Mode params iguais
function test(a, a) {
  console.log(a);
}
test(1, 2); // 2

//Limitando dentro de function

function mul(y, y) {
  //"use strict";
  console.log(y);
}

mul(4, 5); // Duplicate parameter name not allowed in this context

let obj = {};

Object.defineProperty(obj, "propA", { value: 10, writable: false });

console.log(obj); //10
obj.propA = 20;
console.log(obj); //10 sem erros e same value because writable: false

//Caso add 'use strict' o return seria: Cannot assign to read only property 'propA' of object '#<Object>'
