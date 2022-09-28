const one = document.querySelector("#one");
const two = document.querySelector("#two");
const sks = document.querySelectorAll("input[type='checkbox']");
const res = document.querySelector("#res");

sks.forEach(el => {
  el.addEventListener("change", showop)});

(sks)[0].checked = true; // check opção 0 como true
Hide();  // DOM é carregando escondendo todos
one.style.display = 'block'; // mostra a opção block como default

function showop(){
  let gOpt = Array.from(sks).filter(i => i.checked).map(i => +i.id);
  console.log(gOpt);
  //console.log([1,2].some(val => sum.includes(val)));
     Verifica(gOpt); // includes mostrar todos os checks marcados
    getopt(gOpt); // mostra apenas 1 condição por vez mesmo se marcar todos os checks
};

function Hide(){
  one.style.display = 'none';
  two.style.display = 'none';
}

function Verifica(el){
   Hide();
  if(el.includes(1) ){
    one.style.display = 'block';
  }
  if (el.includes(2) ) {
    two.style.display = 'block';
  }
  if([1,2].every(a => el.includes(a))){
   console.log('marcou todos');
  }
}

function getopt(a){
  if(a == 1) res.innerHTML = "marcou vivo";
  if(a == 2) res.innerHTML = "marcou tim";
  if([1,2].every(el => a.includes(el))) res.innerHTML = "check every condition";   
  if(a.length == 0) res.innerHTML = ""; // if array vazio = limpar o campo html
}