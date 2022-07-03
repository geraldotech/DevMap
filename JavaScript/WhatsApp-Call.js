<input id="num" />
<button onclick="bnt()">Do it
</button>
<br>

<div class="container">
<a id="res" target="_blank"></a>
</div>
<script>

//uncomment to test
    //version 1
function bnt() {
var num = document.getElementById("num").value;
var res = document.getElementById("res");

res.innerHTML = "Open in WhatsApp " +num;
res.href = "https://api.whatsapp.com/send?phone=55"+num+"&text=Ol%C3%A1%20";
}


//version 2

/* function bnt() {
var link1 = "https://api.whatsapp.com/send?phone=55";
var link2 = "&text=Ola";
var num = document.getElementById("num").value;
var res = document.getElementById("res");
res.innerHTML = "Open in WhatsApp "+num;
res.href = link1+num+link2;
} */
</script>