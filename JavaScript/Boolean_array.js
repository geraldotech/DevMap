//Initialize boolean array with fill()
var n = [1,2,3,4];
var res = [3,1]

var arr = new Array().fill(false); 

for(var i = 0; i < n.length; i++){
var get = res.includes(n[i]);
arr.push(get)
}
arr.forEach((ele,index)=> console.log(index+':'+ele))
console.log(arr); //0:true 1:false 2:true 3:false



//get only true
var count = arr.filter(Boolean).length;
console.log(count); // 2




count != 0 ? console.log('true: '+count) : console.log('false: '+count); //true: 2

// booelan array with for loop

let meuarr = [];
for(let i = 0; i< 4; i++){
    meuarr.push(true)
}

console.log(meuarr); //(4) [true, true, true, true]



/* 
https://stackoverflow.com/questions/42317140/count-the-number-of-true-members-in-an-array-of-boolean-values

https://bobbyhadz.com/blog/javascript-initialize-array-boolean-values

https://simplernerd.com/js-create-boolean-array-with-defaults/
*/

