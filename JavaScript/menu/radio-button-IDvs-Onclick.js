<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
       
    </style>
</head>
<body>
    <h1><label for="plan">1 - No ID</label><br></h1>
    <input type="radio" name="plan" onclick="geta()">10GB<br>
    <input type="radio" name="plan" onclick="getb()">50GB<br>
    <g></g>
    <span id="res"></span>
<hr>
<h1><label for="banks">2 - Com ID</label><br></h1>
    <input type="radio" name="bank" id="sx">Santander<br>
    <input type="radio" name="bank" id="bb">Banco do Brasil<br>
    <input type="button" value="clean" id="refresh"><br>
<b></b>
<g></g>

</body>
<script>
//2 - Com ID
const body = document.querySelector('body');
var b = document.querySelector('b');
document.getElementById('sx').onclick = function(){
    b.innerHTML = 'SX';
    body.style.backgroundColor = 'red';
}
document.getElementById('bb').onclick = function(){
    b.innerHTML = 'Petrobras';
    body.style.backgroundColor = 'orange';
}

document.getElementById('refresh').onclick = function(){
    location.reload();
}

//1 - No ID
var p = document.querySelector('g');
//var p = document.getElementById('res');
function geta(){
    p.innerHTML = '<div style="background-color:dodgerblue;width:300px;height:100px;color:white">10 gigas</div>';
}
function getb(){
    p.innerHTML = '<div style="background-color:purple;width:300px;height:100px;color:white">50 gigas</div>';
}
</script>

</html>