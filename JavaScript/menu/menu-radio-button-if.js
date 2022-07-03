<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Select option Radio Button</title>
    <style>
.flexcontainer {
    background-color: cadetblue;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
}
.flexitem{
    font-size: 20px;
}
button {
    font-size: 20px;
    background-color: cornflowerblue;
    border: 1px solid black;
    outline: none;
}
/* Create a custom radio button */
.checkmark {
  position: absolute;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
img {
 width: 250px;
}
    </style>
</head>
<body>
<div class="flexcontainer">
    <h2>Radio Button</h2>
    <div class="flexitem">
<!--N1:<input id="n1" type="number" /> <br>
N2:<input id="n2" type="number" /> <br> -->
<input type="radio" name="calc" id="sx"/>SX <br>
<input type="radio" name="calc" id="trigg" />Trigg<br>
<input type="radio" name="calc" id="bb" />BB<br>
<input type="radio" name="calc" id="nubank" />Nubank<br>
<button onclick="getcal()">Confirmar</button><br>

</div>
<div id="res"></div>
</div>
<script>
function getcal(){
    var res = document.getElementById('res');
    var txt = '';

    if(document.getElementById('sx').checked)
    txt = sx('');
    if(document.getElementById('trigg').checked)
    txt = trigg();
    if(document.getElementById('bb').checked)
    txt = bb();
    if(document.getElementById('nubank').checked)
    txt = nubank();

    res.innerHTML = txt;
}
function sx()
{
    return('<img src="https://www.santander.com.br/sites/WPC_CMS/imagem/21-09-08_194432_santander-logo.png" /> ');
}
function trigg()
{
    return ('<img src="http://cdn-content.geraldo.tech/img/cartao-de-credito-trigg-coringa.png"  />');
}
function bb()
{
    return  ('<img src="https://assets.weforum.org/organization/image/ilLBe16nTh4mtkP7ClVjA4TkEfcY0TCv65nq5QvUUSE.jpeg" />');
}
function nubank()
{
    return('<img src="https://www.idinheiro.com.br/wp-content/uploads/2020/07/cartao-nubank-nfc.png" />');
}
</script>
</body>
</html>
