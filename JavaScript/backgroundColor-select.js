//html
<label>Selecionar background-color:</label>
<select id="bk">
<option value="">--choice--</option>
<option value="gray">Gray</option>
<option value="dodg">Dodgerblue</option>
</select>
<p></p>


//js
const body = document.querySelector('body');
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', bk);

function bk() {
var opp = select.value;

if(opp === 'gray') {
para.innerHTML = 'CINZA';
body.style.backgroundColor = 'gray';
}
if(opp === 'dodg'){
body.style.backgroundColor = 'dodgerblue';
}
}
