const n = "Geraldo";
const a = ["Geraldo", "Filho"];

console.log(a[a.length - 1]); //Filh
console.log(n.slice(0, 2)); //Ge

//at string e arr
console.log("Gege".at(-1)); //e
console.log(a.at(-1)); //Filho
console.log("Geraldo".slice(-1)); // o

//spread para nao alterar o arr original
console.log([...a].pop()); //Filho

console.log(a.splice(-1)); //["Filho"]
console.log(a.slice(-1)); //["Geraldo"]

console.log(a.findLast((el) => true)); // Geraldo
console.log(["Geraldo", "Filho"].slice().pop()); //Filho

console.log(n[n.length - 1]); // o
