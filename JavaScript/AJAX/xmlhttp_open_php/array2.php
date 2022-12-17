<?php
$myArr = array("<h1>John</h1>", "Mary<br><img src='https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg'/>", "Peter", "Sally");

$myJSON = json_encode($myArr);

echo $myJSON;
?>