
//css

.myclass.Name{
  background: purple;
  color: white;
}


//html
  <h1 id="name" class="myclass">GERALDO</h1>

//js
x = document.getElementById("name");
if(x.className === "myclass"){
  //space means => dot . ponto
  x.className += " Name";
} else {
  x.className = "myclass";
}


