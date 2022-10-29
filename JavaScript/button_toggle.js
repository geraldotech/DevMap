

    <button onclick="get(this)">sim</button>
      

    <script>
      function get(event) {
        let btn = event.innerHTML;
        console.log(btn);
        event.innerHTML = btn == "not" ? "sim" : "not"; //compara o valor atual
        btn.innerHTML == "sim" ? "nao" : "sim" 
      }
    </script>
  </body>
</html>
