<label for="opera">Selecionar a item from list:</label>
<select id="bank">
    <option value="">-choice-</option>
    <option value="sx">Santander</option>
    <option value="inter">Banco Inter</option>
    <option value="chi">Chicago</option>
</select>
<p></p>

    <script>
var select = document.querySelector('select');
var para = document.querySelector('p');
select.addEventListener('change', bank);

function bank() {
    var choice = select.value;
    if (choice === 'sx') {
        para.innerHTML = 'Solicitar SX <img src="https://www.santander.com.br/sites/WPC_CMS/imagem/21-09-08_194432_santander-logo.png" />';
    } else if (choice === 'inter') {
        para.innerHTML = 'Solicitar Inter';
    }  else if (choice === 'chi') {
        para.innerHTML = 'Illinois';
    }
    
    else {
        para.innerHTML = '';
    }
}
    </script>
