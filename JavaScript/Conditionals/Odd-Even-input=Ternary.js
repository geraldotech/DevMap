<button onclick="bnt()">check out</button>
<input id="num" />
<br>
<div id="res">

</div>



function bnt() {
var x = document.getElementById("num");
x %2 == 0 ? document.write('par') : document.write('IMPAR');
}

