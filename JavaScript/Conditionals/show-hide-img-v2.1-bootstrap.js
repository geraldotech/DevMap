<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <style>
body{
    background-color: rgb(14, 38, 70);
    color: #f2f2f2;
}

myopt{
    display: none;
}
img {
    max-width: 50%;
    margin-top: 20px;
}
    </style>
</head>
<body>
 <div class="container">
     <br>
     <br>
     <h2>Masterpiece</h2>
     <br>
<button class="btn btn-success" id="img">show</button><br>

    <img src="https://gpnotes.droppages.com/img/garden.jpg" class="dimg" style="display: none;" />
<hr>

<div id="nome" class="geraldo">Geraldo </div>


<div id="surname">Filho</div>
<input type="submit" onclick="changex()" value="Alterar">
<button onclick="window.location.reload()">Reload / Reset</button>




</div>
</body>
<script>
function changex(){
    const novo = prompt('Novo nome:');
    var sur = document.getElementById('surname');
    sur.innerHTML = novo;
    
}



//
var x = document.getElementById('nome');
if(x.className === 'geraldo'){
    x.innerHTML += 'petronilo';
} else {
    x.innerHTML = '';
}

    //versao com CSS inline
    //resolve o primeiro click bug
    //change button name sem declarar outra varial, call direct from function
    //versao querySelector, dispensa divs a menos que fosse um conjunto de imagens maybe
    //versao bootstrap 5.1.3
document.getElementById('img').onclick = function(){
    var dimg = document.querySelector('.dimg');    
    if(dimg.style.display === 'none'){
        dimg.style.display = 'block';
        img.innerHTML = 'hide';
        img.className = 'btn btn-danger'
    } else {
        dimg.style.display = 'none';
        img.innerHTML = 'show';
        img.className = 'btn btn-success';
       
    }
}
</script>
</html>