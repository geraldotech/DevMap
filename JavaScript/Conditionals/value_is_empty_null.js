
/*
<input id="n" />
<button onclick="getn()">confirmar</button>
*/

    function getn() {
        var n = document.getElementById('n').value;        
        if(n !== null && n !== '') {
            alert('OLA digitou: '+n);
        } else {
            alert('Campo Vazio!');
        }

    }



//type 2
if(!max || !num){
                alert('preencher todos os campos!');
            }

via: https://stackoverflow.com/questions/6003884/how-do-i-check-for-null-values-in-javascript


//type 3
if(name.length == 0 || age.length == 0 || lan.length == 0){
    alert("falta dados!");
} else {
	....
}