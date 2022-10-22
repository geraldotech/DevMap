const one = document.querySelector("#one");
const two = document.querySelector("#two");
const sks = document.querySelectorAll("input[type='checkbox']");
const res = document.querySelector("#res");

sks.forEach(el => {
  el.addEventListener("change", showop)});

(sks)[0].checked = true; // check opção 0 como true
Hide();  // DOM é carregado escondendo todos as section
one.style.display = 'block'; // mostra a opção block como default
 Active([1]); // default active 

function showop(){
  let gOpt = Array.from(sks).filter(i => i.checked).map(i => +i.id);
  console.log(gOpt);
  //console.log([1,2].some(val => sum.includes(val)));
     Verifica(gOpt); // includes mostrar todos os checks marcados
    getopt(gOpt); // mostra apenas 1 condição por vez mesmo se marcar todos os checks
    Active(gOpt);
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
//adiciona uma classe ativa ao item selecionado

function Active(sel){
  sks.forEach((item)=> {
    if([1,2].every(a => sel.includes(a))){
      tim.classList.add("active");
      vivo.classList.add("active");
      return;
    } 
    if(sel.includes(1)){
      vivo.classList.add("active");  
      tim.classList.remove("active");     
      return;
    }
    if(sel.includes(2)){
      tim.classList.add("active");
      vivo.classList.remove("active");
      return;
    }
     
   vivo.classList.remove("active");
    tim.classList.remove("active"); 
  })
}