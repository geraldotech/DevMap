<input id="num" />
<button onclick="check()">verificar</button>
<div id="res"></div>

function check() {
var num = parseInt(document.getElementById("num").value);
var res = document.getElementById("res");
num %2 == 0 ? res.innerHTML = 'PAR' : res.innerHTML = 'impar';
console.log(num);
}
