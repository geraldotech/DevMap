<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <style>
            body{
                background: pink;
            }
            button {
                margin-bottom: 10px;
            }
        
        </style>
</head>
<body>
<div class="container">
    <h2>Click to show or hide img</h2>
    <button onclick="getimg()" id="btn" class="btn btn-outline-success">show img</button>
    <br>
    <dimg>
        <img src="https://gpnotes.droppages.com/img/garden.jpg" style="display: none;width:100%;max-width: 60%;"  class="fluid-img" />
    </dimg>
</div>
</body>
<script>
    //version Bootstrap
    //hide img CSS inline
    //faster onclick to show img
    function getimg(){
            var dimg = document.querySelector("img");
            var btn = document.getElementById("btn");
            if(dimg.style.display == 'none'){
                dimg.style.display = 'block';
                btn.innerHTML = 'hide img';
                btn.className = 'btn btn-danger';
            } else {
                dimg.style.display = 'none';
                btn.innerHTML = 'show img';
                btn.className = 'btn btn-success';
                
            }
        }
</script>

</html>