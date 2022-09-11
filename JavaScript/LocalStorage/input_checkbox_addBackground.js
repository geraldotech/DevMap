<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

        :root{
            color-scheme:dark;
        }

        .son{
            position: absolute;
            top: 50%;
            left: 50%;
            width: 200px;
            height: 200px;
           
        }
        .red{
            background: red;
        }
    </style>
</head>
<body>

    <div class="pai">
        <div class="son" id="son"></div>
    </div>

<input type="checkbox" id="checkbox1"/>
<label for="checkbox1">checkbox1</label>



<script>
const checkbox1 = document.querySelector("#checkbox1");
const son = document.querySelector("#son");

checkbox1.addEventListener("click", function(){
    localStorage.setItem("checkbox1", checkbox1.checked);
    const str = checkbox1.checked;
    console.log(str);
    str ? muda() : remove();
})

function muda(){
    son.classList.add("red");
}

function remove(){
    son.classList.remove("red");
}

function load(){
    const checked = JSON.parse(localStorage.getItem("checkbox1"));
    if(checkbox1.checked = checked) muda();
    
}
load();   


</script>
    
</body>
</html>