//html
//<div id="data"></div>

<script>
const d = new Date();
let dia = d.getDate();
let ano = d.getFullYear();
let mes = d.getMonth() +1;
let hora = d.getHours();
let min = d.getMinutes();
let segs = d.getSeconds();
document.getElementById("data").innerHTML = "Data: "+dia +"/"+mes+"/"+ano+'<br>';
if (dia == 6){
	document.write("7 de Março");
} else {
	document.write("is not day seven");
}
console.log(hora+':'+min+':'+segs);
</script>

<script>
//inline
const dd = new Date(document.lastModified);
let hora = dd.getHours() +':'+ dd.getHours()+':'+dd.getMinutes()+':'+dd.getSeconds();
document.write('Last Update:'+hora);
</script>

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const startOfWeek = new Date()
const today = weekday[startOfWeek.getDay()]
console.log(`Today is ${today}`)
