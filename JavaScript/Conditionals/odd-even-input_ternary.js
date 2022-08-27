/*

<button onclick="bnt()">check out</button>
<input id="num" />
<br>
<div id="res">

</div>

*/


function bnt() {
    var x = document.getElementById("num").value;
    const res = window.res; //não  é recomendado usar o window, apenas um exemplo de possibilidade
    x %2 == 0 ? res.textContent = ("par") : res.textContent = ("impar");
    }
