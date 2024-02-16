<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body onload="geturl()">
    <p>onload call function and load href</p>

    <script>
    function geturl(){
        location.href = "https://github.com/geraldotech?tab=repositories";
    }
//still works single line
    //location.href = "https://github.com/geraldotech?tab=repositories";
    </script>
</body>
</html>

modo chamar function
<button onclick="location.href=('#top')">TOP</button>
 modo window.scroll
 <button onclick="window.scrollTo(0,0)">scroll</button>
modo a href
<a href="#" onclick="location.href="('#top')">GO TOP</a>

modo mais simplest
<a href="#top">Go TOP</a>