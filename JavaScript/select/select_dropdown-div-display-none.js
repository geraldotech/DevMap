/*
version 2.0
https://gmapdev.netlify.app/projects/consulta-limites/index.html
*/

//CSS
body {   
  margin:  0 100px;
  height: 100vh;
  background-color: #f1f1f1;
  padding: 5px;
}
/*pode usar qualquer nome e.g: b.k*/
div {
 display: none; 

 align-items: center;
 height: auto;
 margin-left: auto;
 margin-right: auto;

}    

main.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
img.imagem {
width: 50%;
max-width: 50%;
}
.limite {
color: green;
font-weight: bold;
}
h1 {
font-size: 30px;
}
select {
     margin-bottom: 10px;
     margin-top: 10px;
     outline: 0;
     background: #040806;
     color: #fff;
     border: 1px solid crimson;
     padding: 4px;
     border-radius: 9px;
   }
   
th, td {
background-color: lightgray;
border: 1px solid black;
}
table {
width: 50%;
text-align: center;
font-family: arial, sans-serif;
border-collapse: collapse;
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
ul li {
  list-style: none;
}
  </style>

//html
<main class="container">
<section>
<h1>input_menu display_div</h1>       
<select name="option" id="options">
<option value="1">Selecionar: </option>
<option value="2">A</option>
<option value="3">B</option>
</select>

<div id="1" style="display: block"></div>
<div id="2">
     <img src="https://www.santander.com.br/sites/WPC_CMS/imagem/21-09-08_194432_santander-logo.png" class="imagem"/>
<br>Santander SX: 8600 
<br><p class="limite">Limite: R$ 5.000</p>Disponivel: R$ 1,500<br></div>
<div id="3">
<table>
<tr>
<th>FINAL</th>
<th>Limite</th>
<th>Disponível</th>
</tr>
<tr>
<td>5633</td>
<td>R$ 10,000</td>
<td>R$ 3,000</td>
</tr>
</table>
</div>  


<footer>
 <ul>
     <li>Geraldo Filho - <ano id="ano"> </ano> </li>
 </ul>
</footer>
</section>
</main>

//JS
document.getElementById("options").onchange = function () {
    var i = 1;
    var myDiv = document.getElementById(i);
    while (myDiv) {
        myDiv.style.display = 'none';
        myDiv = document.getElementById(++i);
    }
    document.getElementById(this.value).style.display = 'block';
}
//get ano
const d = new Date();
let ano = d.getFullYear();
document.getElementById("ano").innerHTML = ano;
//inline
// document.getElementById("ano").innerHTML = new Date().getFullYear();
    </script>
    