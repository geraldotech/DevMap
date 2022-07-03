//CSS
<style>
dimg {
  display: none;
       }
</style>

//HTML
<button onclick="getimg()" id="nome">show img</button><br>
<dimg id="dimg">
    <img src="https://gpnotes.droppages.com/blog-content/2022/imagem.jpg" style="max-width: 25%;"/>
</dimg>

//JS
function getimg(){
            var dimg = document.getElementById('dimg');
            var nome = document.getElementById('nome');
            if(dimg.style.display == 'none'){
                dimg.style.display = 'block';
                nome.innerHTML = 'hide img';
            } else {
                dimg.style.display = 'none';
                nome.innerHTML = 'show img';
            }
        }
