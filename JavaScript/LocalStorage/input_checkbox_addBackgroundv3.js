<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            width: 100px;
            height: 100px;
            background: red;
            margin-top: 30px;
        }

        .borda{
            border: 6px solid black;
        }
    </style>
</head>
<body>

    <h1>O gato come ração</h1>
    
    <input type="checkbox" id="opt">
    <label for="opt">Option</label>

    <div class="box" id="box"></div>


    <script>
const box = document.querySelector("#box");
const opt = document.querySelector("#opt");
opt.addEventListener("click", verifica);

function verifica(){
    const valor = opt.checked;
    console.log(valor);
    valor ? box.classList.add("borda") : box.classList.remove("borda");
    salvar(valor);
}

function salvar(el){
    localStorage.setItem('opc', el);
}

function LoadS(){    
    const pega = JSON.parse(localStorage.getItem("opc"));
    opt.checked = pega
    if(opt.checked = pega) verifica();
    
}

LoadS();



    </script>
</body>
</html>