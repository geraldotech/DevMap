//Converter-Arr-Str
//👉String to Arr
const str = "JavaScript is a good";
console.log(str.split()); //todas words em um index
console.log(str.split(" ")); //cada word em um index

console.log(str.slice(""));
console.log([...str]);

//👉Arr to String
let itens = "";
["Gera", "dsd"].forEach((item) => {
  itens += item;
});
console.log(itens); //Geradsd

console.log(["Gera", "dsd"].toString()); //Gera, dsd
console.log(["Gera", "dsd"]); //Gera, dsd
