<div id="res"></div>
<div id="rooting"></div>
    


    
//basic show object in HTML
const lista = [
  {name:"Geraldo", age:30},
  {name:"Felipe", age:28},
  {name:"Isabella", age:25},
];
// way 1
lista.map((el) => {
    const code = document.createElement("code");
    code.innerHTML = `${el.name} : ${el.age} <br>`;
    document.body.appendChild(code);
  });

// way 2
  rooting.innerHTML = lista.map((a) => {
    return `<code>${a.name} : ${a.age} </code>`
  }).join("");
