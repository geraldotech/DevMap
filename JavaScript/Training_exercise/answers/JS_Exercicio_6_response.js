//1
var sum = 0;
const n = [1,2,3,4];
for(var i = 0; i < n.length; i++){
    sum+= n[i]
}
console.log(sum)

//2
function somar(arr){
    let soma = 0;
    for(value of arr){
        soma += value;
    }
    return console.log(soma);
}
somar([5,9]); //14
somar(myarr);  //or call a arr


//3
busca = animais.filter((animal)=> animal.tipo === 'gato');
console.log(busca)

//4
dogage = animais.filter((animal) => animal.tipo === 'cao')
.map((cao)=> cao.idade +1)
console.log(dogage)



//5
busca = animais.filter((animal) => animal.tipo === 'cao')
.map((cao) => cao.idade +1)
.reduce((total, value)=> total+= value)
console.log(busca)

//6
busca2 = animais.reduce((total, element)=>{
    if(element.tipo === 'cao') return total+= (element.idade *=2);
    else return total},0)

console.log(busca2)

//7
    <input type="text" id="input" />
    <div id="re"></div>
    


input = document.querySelector("#input");
input.addEventListener("input", function(event) {
   const str = this.value;
   console.log(str)
   document.getElementById("re").innerHTML = str;
})

// 7 - DOM - Event alternative: oninput
      const input2 = document.querySelector("input[name='two']").oninput = function(){
        console.log(this.value);
        re.innerHTML = this.value;
      }

//7.1
input = document.querySelector("#res");

input.addEventListener("input", function (){
  const str = this.value;
  console.log(str);
  if(str == 'ge'){
    document.getElementById("out").innerHTML = "Geraldo";
  }
})

//8
input = document.querySelector("input");
+input.addEventListener("input", function(ele){

  let str = this.value;
  //console.log(str)
  const writtenN = {
  0: "Zero",
  1: "One",
  "G": "Geraldo"
}
const getn = str => {
  return writtenN[str] || "other" || '';
 
}  

console.log(getn(str))
document.getElementById("res").innerHTML = getn(str);
if(this.value.length === 0) {
  document.getElementById("res").innerHTML = '';
 }

})