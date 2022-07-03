//descomentar o html
//<input id="num" type="number" />
//<button onclick="multix()">calcular</button>
//<div id="res"></div>

function multix() {
    var num = (document.getElementById("num").value);
    var saida = document.getElementById("res");
    var mu = "";
    for(g=1;g<=10;g++)
    mu += num+' x '+g+' = '+num*g+'<br>';
    saida.innerHTML = mu;
}
