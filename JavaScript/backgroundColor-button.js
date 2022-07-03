<label for="">Selecionar Operadora:</label>
<select id="opera">
    <option value="">--escolher--</option>
    <option value="tim">TIM</option>
    <option value="vivo">VIVO</option>
</select>
<button onclick="changebk()">azul</button>
<button onclick="changebk1()">gray</button>
<p></p>
<script>
var select = document.querySelector('select');
var para = document.querySelector('p');
var body = document.querySelector('body');
select.addEventListener('change', opera);

function opera(){
    const body = document.querySelector('body');
    var x = select.value;
    if(x === 'tim'){
        para.innerHTML = 'VIVER SEM FRONTEIRAS';
        body.style.backgroundColor = 'dodgerblue';
    } else if (x === 'vivo'){
        para.innerHTML = 'VIVO';
        body.style.backgroundColor = 'purple';
    }
}

function changebk() {
    const body = document.querySelector('body');
    body.style.backgroundColor = 'dodgerblue';
}

function changebk1() {
    const body = document.querySelector('body');
    body.style.backgroundColor = 'gray';
}

</script>
