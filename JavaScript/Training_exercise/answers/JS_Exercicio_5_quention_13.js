<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script>

  //version do while with function
    function show_prompt() {
  var i = 1;
  var sum = 0;//declare a variable to keep the sum of numbers
  do {
    var number = prompt(`Please Enter a Number ${i}`);
    sum += parseInt(number); //sum the numbers here
    i++;

    document.write("Number: " + number);
    document.write("<br>");

  }
  while (i < 5);

  document.write('Average of scores : ' + sum / i);//use the sum of the numbers divide by the the numbers the user enters
}
show_prompt();





//media float version 2 by me

  var i = 1;
  var sum = 0;//declare a variable to keep the sum of numbers
  do {
    var number = prompt(`Please Enter a Number ${i}`);
    sum += parseFloat(number); //sum the numbers here
    i++;

    document.write("Number: " + number);
    document.write("<br>");

  }
  while (i < 5);
  document.write('Average of scores : ' + sum / 4);
  //use the sum of the numbers divide by the the numbers the user enters



  //version while by me
let [cont,sum] = [1,0];
let n = prompt("Quantas notas:");
while(cont <=n){
let notas = +prompt(`Nota ${cont}`);
sum += (notas) //faz a soma
//document.write(`Nota ${cont} : ${notas}`);
document.getElementById("notas").innerHTML += `Nota: ${cont} : ${notas} <br>`;
document.write('<br>');
  cont++;
}
document.write("A soma: "+sum);
document.write('<br>');
document.write(`A media: ${sum /2}`); 




//version for by me
somar = 0;
var i;
for(i= 1; i< 3;i++) {
  var x = prompt(`Digite um numero ${i}`);
  somar += parseInt(x);
}
console.log('soma: '+somar+' media: '+somar /2);
</script>
</html>