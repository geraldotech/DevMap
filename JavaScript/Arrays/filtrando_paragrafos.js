<p>I should not be left with my own devices, They come with prices and vices, I end up in crisis</p>
  
<p>Did you head my covert narcissism I disguise as altruism like some kind of congressman</p>

<p>I wake up screaming from dreaming</p>
<p>My up</p>



    <script>  
//pega todas as tags p e joga para um Array
const fil = Array.from(document.getElementsByTagName('p'));
//check se no innerHTML incluia keywork
let busca = fil.filter(name => name.innerHTML.includes("up"));
console.log(busca.length); //tamanho da busca
for(let i = 0; i < busca.length; i++){
  console.log(busca[i]); //loop para mostrar os resultados
}

    </script>
