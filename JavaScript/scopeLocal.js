/*👉 scopo local acessível apenas dentro da fun, porém ao chamar a fun e dependendo da posição, esse scopo deixa de ser local para global assim afetando os referidos valores.
 */

let cor = "blue";
function test() {
  cor = "verde"; // se fosse let cor = .. o cor do ultimo console seria red
  console.log("saida fun=>", cor); //verde
}

console.log(cor); //blue

cor = "red";
console.log(cor); //red
test();

//novo valor que da function
console.log(cor); // verde
