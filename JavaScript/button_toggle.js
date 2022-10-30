<button onclick="get(this)">sim</button> 

    <script>
      function get(event) {
        let btn = event.innerHTML;
        console.log(btn);
        event.innerHTML = btn == "not" ? "sim" : "not"; //compara o valor atual
        btn.innerHTML == "sim" ? "nao" : "sim" 
      }
    </script>
  
//e.g 2 by gmap

<button onclick="getx(this)">show</button>
    <p>
      The cloned node has no parent and is not part of the document, until it is
      added to another node that is part of the document
    </p>

<script>     

function getx(event) {
  console.log(this);
  console.log(this.event); // this.event
  console.log(event.innerHTML); // sim button name
  //let nome = event.innerHTML;
  event.innerHTML = event.innerHTML == "hide" ? "show" : "hide"; // btn name
  event.innerHTML == "hide" ? show("block") : show("none"); // btn name and show p
}
show('none'); //default is hidden

function show(el) {
  document.querySelector("p").style.display = el;
}
</script>
