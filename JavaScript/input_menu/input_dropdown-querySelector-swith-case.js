<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .flexbox-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-content: center;
            height: 500px;
        }
        .flex-item {
            width: 300px;
            height: 500px;
            
        }
        button {
            display: flex;
            padding: 7px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
        }
        img {
            max-width: 50%;
        }
       
    </style>
</head>
<body>
    <div class="flexbox-container">
    <div class="flex-item">
<h2>Consulta FGTS 2022</h2>  
<label for="mes">Nascidos em: </label>
<select id="mes">
    <option value="">--choice--</option>
    <option value="jan">Janeiro</option>
    <option value="fev">Fevereiro</option>
    <option value="mar">Março</option>
</select>
<p></p>
    <div id="res"></div>
</div>
</div>
</body>
<script>
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change',mes);

function mes() {
    var opt = select.value;
    switch (opt){
        case 'jan':
        para.innerHTML = '20 de Abril';
        break;

        case 'fev':
        para.innerHTML = '30 de Abril';
        break;

        case 'mar':
        para.innerHTML = '4 de Abril';
        break;

        default:
        para.innerHTML = 'nao encontrado!';

        
    }
}
</script>
</html>
