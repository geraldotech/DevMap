  <style>
      html {
          background-color: #0C323D;
          color: white;
          font-size: 30px;
          text-align: center;
      }
  </style>
</head>
<body>

    <script>
const nome = prompt("Qual seu nome:");
const idade = prompt("Qual sua idade:");
const ano = 2022-idade;
var maior = document.getElementById('maioridade');
document.write("Ola "+nome+' você tem '+idade+' anos');
document.write(" nasceu no ano de "+ano);
if (idade >=18){
    document.write('<br> MAIOR DE IDADE');
} else {
    document.write("<br> MENOR DE IDADE");
}    
</script>
