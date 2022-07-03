function logar(){
    
var iframe = document.getElementById('myiframe');
var iframe2 = document.getElementById('myiframe2');
var user = document.getElementById('user').value;
var psw = parseInt(document.getElementById('psw').value)
if (user == 'geraldo' && psw == '9912') {
    iframe.style.display = 'block';
    iframe2.style.display = 'none';    
} else if (user == 'isabella' && psw == '9912'){
    iframe2.style.display = 'block';
    iframe.style.display = 'none';
} else {
    document.write('TRY AGAIN! <br> <button id="reload" onClick="document.location.reload(true)">Atualizar</button>');   
}
}


//logout
function logout(){
    var atualizar = document.getElementById('reload');
    document.write('Logout com sucesso!');
    atualizar.style.display = 'block';
 }