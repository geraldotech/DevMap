    <title>CALCULADORA JS</title>
    <style>
.flexcontainer {
    background-color: cadetblue;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    width: 400px;
}
.flexitem{
    font-size: 20px;
}
button {
    font-size: 20px;
    background-color: cornflowerblue;
    border: 1px solid black;
    outline: none;
    bo
}
    </style>
</head>
<body>


<div class="flexcontainer">
    <h2>Calculadora</h2>
    <div class="flexitem">
N1:<input id="n1" type="number" /> <br>
N2:<input id="n2" type="number" /> <br>
<input type="radio" name="calc" id="soma" />+ <br>
<input type="radio" name="calc" id="sub" />-<br>
<input type="radio" name="calc" id="mult" />* <br>
<input type="radio" name="calc" id="div" />/<br>
<button onclick="getcal()">calcular</button><br>
<div id="res"></div>
</div>
</div>
<script>
function getcal(){
    var res = document.getElementById('res');
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var txt = '';

    if(document.getElementById('soma').checked)
    txt = soma(n1,n2);
    if(document.getElementById('sub').checked)
    txt = sub(n1,n2);
    if(document.getElementById('mult').checked)
    txt = mult(n1,n2);
    if(document.getElementById('div').checked)
    txt = div(n1,n2);

    res.innerHTML = 'Resultado: ' +txt;
}

function soma(x,y)
{
    return(x+y);
}

function sub(x,y)
{
    return(x-y);
}
function mult(x,y)
{
    return(x*y);
}
function div(x,y)
{
    return(x/y);
}
</script>
