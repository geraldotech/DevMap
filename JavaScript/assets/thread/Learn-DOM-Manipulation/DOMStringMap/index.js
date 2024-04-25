
const productId = document.getElementById('productId').dataset.id
console.log(`productId`, productId)


//👉 data-test DOMStringMap

const Bye = document.querySelector("#bye");







console.log(Bye.dataset); // no DOM:  data-test o return: test: "content
/*
data-long-beach="california" return longBeach:'california'
*/

// Access the data
console.log(Bye.dataset.test); //this is a test
console.log(Bye.dataset.longBeach); //california

//Setting data direct in JS

Bye.dataset.novoName = "Costa"; //DOM will updated data-novo-name="Costa"