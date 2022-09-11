Codepen=> https://codepen.io/geraldopcf/pen/rNdRaZO

//html
<a href="#"> link </a>
<hr>
<div>
  <a class="li" href="#">link _blank </a>
  <a class="li" href="#">link  _blank</a>
  <a class="li" href="#">link  _blank</a>
  <a class="li" href="#">link  _blank</a>  
</div>



//css
:root{
  color-scheme: dark;
}
.li{
  display: block;
  text-decoration: none;
  font-size: 1.5rem;
  color: red;
}


//js
const links = document.querySelectorAll("a.li");
console.log(links);
links.forEach((el,event) => {
  el.setAttribute("target","_blank");
  el.setAttribute("class","li");
});
