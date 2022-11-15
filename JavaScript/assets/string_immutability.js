// String Immutability

// String Immutability
var myVar = "Hello World";
myVar.toUpperCase();
console.log(myVar); // still equals to “Hello World”.


// The method will return a new String object it will not change the existing String reference. So we have to assign it to a new variable to get the desired value.
const nova = myVar.toUpperCase();
console.log(nova);


/*
Note: We also cannot assign a new character to an index in String by square bracket notation. As Strings are immutable, by doing that we will be updating the content of String reference which cannot be possible in case of immutability.
*/


let minhavar = "Hello";
minhavar[0] = "s";

console.log(minhavar); // Hello


//refs https://medium.com/@codesprintpro/javascript-string-immutability-ead81df30693