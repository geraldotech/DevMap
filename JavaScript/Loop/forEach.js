//👉 1 - forEach alone function

const arr = [1, 2, 3, 4];
var sum = 0;
function add(x) {
  sum += x;
}
arr.forEach(add);
console.log(sum); //10

//👉2 forEach function includes

const mm = [1, 2, 3, 4];
var val = 0;
mm.forEach((value) => (val += value));
console.log(val); //10

//👉3 operadores [+] [-] [*] [/] [**]
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function multiplicar(y) {
  console.log(y * 2);
}
num.forEach(multiplicar); //2,4,8,10,12,14,16,20

//👉4 display ind and ele
num.forEach((ele, ind) => console.log(ind + ":" + ele));

//👉get arr index, values
const api = ["Geraldo", "CostAo", "Barrao"];
api.forEach((val,ind) => console.log(ind, val)); // index, value, 
api.forEach((val,ind) => console.log(ind, val);
  
//👉if statement
  [10,20,30,40,50].forEach((value,i) =>{
    if(value > 30){
      console.log(i,value); // 3 > 40 , 4 >50
    }
  });

  function getInd(arr){
    arr.forEach((val, ele) => {
     if(val > 20){
      console.log(val); //30,40
     }
    })
  }
  getInd([10,20,30,40])  
  
  
  function getVal(arr){
    arr.forEach((val,ele)=>{
      if(val.startsWith("G")){
        console.log(val); //Geraldo, Google
      }
    })
  }
  
  getVal(["Geraldo","Google","Microsoft"]);

//setAttribute and classListAdd 
//READ => setAttribute_vs_classList.html