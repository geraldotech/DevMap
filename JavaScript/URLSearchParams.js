<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>url search params</title>
    <!-- DEV ICON in your header -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">

</head>
<body>
<span id="win"></span>

<!-- in your body -->
<i class="devicon-devicon-plain"></i>          
          
<a id="myurl" href="/en-US/docs/HTMLAnchorElement?q=123">link</a>
<a id="myAnchor" href="/en-US/docs/HTMLAnchorElement?q=4567">link</a>

<footer>
  <p></p>
</footer>

<div id="linkk"></div>
</body>
<script>

document.getElementById("linkk").textContent = location.href;

//ok get only INT
const url = document.getElementById("myAnchor");
console.log(url.search); //456


const url4 = document.getElementById("myurl");
let params = new URLSearchParams(url4.search);
let q = parseInt(params.get("q")); // returns the number //123
console.log(q); //123


//get from new URL <string>
const url2 = new URL('https://example.com?foo=1&bar=2&number=');
console.log(url2.search)

//whatsapp
const wpp = new URL('https://api.whatsapp.com/send?phone=55219994444');
console.log(wpp.search);

// adiciona version=2 na URL original
const url5 = new URL('https://example.com?foo=1&bar=2');
const params5 = new URLSearchParams(location.search);
params5.set('version', 2.0);
window.history.replaceState({}, '', `${location.pathname}?${params5}`);




  
</script>

</html>