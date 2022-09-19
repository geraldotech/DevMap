<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>input radio button onClick</title>
    <style>

    </style>
</head>
<body>

    <h1><label for="plan">1 - No ID</label><br></h1>
    <input type="radio" name="plan" id="10" onclick="geta()">
    <label for="10">10GB</label>
    <input type="radio" name="plan" id="50" onclick="getb()">
    <label for="50">50GB</label>
    <g></g>
    <span id="res"></span>
<hr>
<h1><label for="banks">2 - Com ID</label><br></h1>
    <input type="radio" name="bank" id="sx">
    <label for="sx">Santander</label>
    <input type="radio" name="bank" id="bb">
    <label for="bb">Banco do Brasil</label>
    <input type="button" value="clean" id="cleanHtml"><br>
<b></b>
<g></g>
    
   <script>
//1 - Com ID
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

document.getElementById('cleanHtml').onclick = function(){
    //location.reload();
    // do not refresh page, apenas limpa os styles
    body.style.background = "";
}

//2 - No ID
var p = document.querySelector('g');
function geta(){
    p.innerHTML = '<div style="background-color:dodgerblue;width:300px;height:100px;color:white">10 gigas</div>';
};
function getb(){
    p.innerHTML = '<div style="background-color:purple;width:300px;height:100px;color:white">50 gigas</div>';
};

   </script>
</body>
</html>