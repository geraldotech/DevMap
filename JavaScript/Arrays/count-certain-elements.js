//Count certain Elements in a Array
//via https://linuxhint.com/count-certain-elements-in-array-in-javascript/
const n = [1, 2, 3, 4, 5, 6, 44, 5, 6, 5, 5, 5, 5];
//DESAFIO contando o número de ocorrências em um Array

//filter
let target = 5;
const filtro = n.filter((val) => val == target);
console.log(filtro.length);

// Reduce

let reduce = n.reduce((accumulator, curVal) => {
  return curVal == target ? accumulator + 1 : accumulator;
}, 0);
console.log(reduce);

// for loop
let counter = 0;
for (let i = 0; i < n.length; i++) {
  if (n[i] == target) counter++;
}
console.log(counter);
