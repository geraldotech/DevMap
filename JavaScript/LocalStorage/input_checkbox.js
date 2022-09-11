<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>input_checkbox</title>
</head>
<body>

<input type="checkbox" id="checkbox1"/>
<label for="checkbox1">checkbox1</label>

<script>
const inputVal = document.querySelector("#checkbox1");

inputVal.addEventListener("click", function(){
    localStorage.setItem("checkbox1", inputVal.checked);
    const str = inputVal.checked;
    console.log(str);
    str ? console.log('verdade') : console.log('false');
})

function load(){
    const checked = JSON.parse(localStorage.getItem("checkbox1"));
    inputVal.checked = checked;
}
load();
    

</script>
    
</body>
</html>