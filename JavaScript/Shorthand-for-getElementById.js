//Shorhand for getElementById

//function
const get = function(id){ return document.getElementById(id) };
get("root").textContent = 'Hello World!';

//arrow function
const get2 = (a) => {return document.getElementById(a)};
get2("root");