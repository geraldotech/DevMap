//CSS
<style>
   body {
    display: block;
    margin: 20px;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    background-color: #f1f1f1;
    padding: 5px;
  }
  /*pode usar qualquer nome e.g: b.k*/
div {
   display: none; 
   flex-wrap: wrap;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   height: auto;
   margin-left: auto;
   margin-right: auto;
  
}    
.imagem {
 width: 20%;
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
    display: inline;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 50%;
}
ul li {
    list-style: none;
}
  </style>

//html
    <h1>CONSULTA CARTÕES</h1>
       
        <select name="option" id="options">
        <option value="1">Selecionar: </option>
        <option value="2">Santander</option>
        <option value="3">Trigg</option>
        <option value="4">Banco do Brasil</option>
        <option value="5">test </option>
        </select>

        <div id="1" style="display: block"></div>
        <div id="2"><img src="https://www.santander.com.br/sites/WPC_CMS/imagem/21-09-08_194432_santander-logo.png" class="imagem"/>
        <br>Santander SX: 8600 
        <br><p class="limite">Limite: R$ 5.000</p>Disponivel: R$ 1,500<br></div>
        <div id="3">
        <img src="http://cdn-content.geraldo.tech/img/cartao-de-credito-trigg-coringa.png" class="imagem" />
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
        <div id="4"><img src="https://assets.weforum.org/organization/image/ilLBe16nTh4mtkP7ClVjA4TkEfcY0TCv65nq5QvUUSE.jpeg" class="imagem"/></div>
        <div id="5">Test 5</div>


        <footer>
            <ul>
                <li>Geraldo Filho - <ano id="ano"> </ano> </li>
            </ul>
        </footer>

//JS
<script>
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
</script>
