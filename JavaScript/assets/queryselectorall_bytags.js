Codepen=> https://codepen.io/geraldopcf/pen/WNzmNaM

//html
<a href="#">link 1</a>
<a href="#">link 2</a>
<a href="#">link 3</a>
<a href="#">link 4</a>



//css
*{
  color-scheme: dark;    
}  
.linkr{
  color: rgb(216, 115, 0);
  font-size: 2rem;
  text-decoration: none;
  display: block;
}


//js
//set Atts

const pp = document.querySelectorAll("a");

console.log(pp.length);
 pp.forEach(el => {
  el.classList.add("linkr");
  el.href = "http://technotesbr.blogspot.com";  
  el.setAttribute("target","_blank");
  el.setAttribute("title","open new tab");
}); 

