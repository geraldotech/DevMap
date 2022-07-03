	<h1>Boolen</h1>
  
  N1:<input type="number" id="n">
  N2:<input type="number" id="n2">
  <button onclick="get()">Confirm</button>
  <span id="res"></span>


<script>
  //Digite 2 números x * y = 81
/* 

function get(){
n = +document.getElementById("n").value;
n2 = +document.getElementById("n2").value;
document.getElementById("res");
s = n * n2;
x = Boolean (s === 81);
x == true ? res.innerText = "dev" : res.innerText = "try again!";
console.log(x);
}
 
*/


//example 2 user need Enter a n res = 32 to be true
//2^5 = ?
function get(){
let n = +document.getElementById("n").value;
let x = Math.pow(2,n);
a = Boolean(x == 32);
document.getElementById("res").innerHTML = a;
}


</script>
