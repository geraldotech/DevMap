<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fetch Search JSON</title>
    <style>
      body {
        margin: 0 100px;
      }
      #resfinal {
        margin-top: 15px;
      }
      #photo{
       
      }
      .img_profile img{
        width: 100%;
        max-width: 300px;
        max-height: 400px;
      }
      .container{
          display: flex;
          flex-direction: column;
          justify-content: center;
      }
    </style>
  </head>
  <body>
    <h2>Fetch Search JSON</h2>

    <fieldset>
      <legend>Local JSON</legend>
      <label for="res">Enter a name:</label>
      <input type="text" id="res" value="geraldo" />
      <button onclick="search()">Find</button>
      <div id="resfinal"></div>
      <div class="container">
        <span id="nome"></span>
        <span id="surname"></span>
        <span id="age"></span>
        <div class="img_profile">
          <span id="photo"></span>
        </div>
      </div>
    </fieldset>
  </body>
  <script>
   
    const myjson = "persons-find-photo.json";

    async function persons(url) {
      const data = await fetch(url);
      const response = await data.json();

      console.log(response);
      if (response) {
        showdata(response);
      }
    }
    const arr = [];
    function showdata(response) {
      for (value of response) {
        arr.push(value);
      }
    }
    function search() {
      let resfinal = document.querySelector("#resfinal");
      let name = document.getElementById("res").value;
      let find = arr.find((el) => el.nome === name.toUpperCase());
      console.log(find);

      if (!find) {
        cleanHtml("Not Found!");
        return;       
      }
      dataHtml(find);     
      return;
    }
        
    persons(myjson);

    function dataHtml(el){
        document.getElementById("nome").innerHTML = `Nome: ${el.nome}`;
        document.getElementById("surname").innerHTML = `Surname: ${el.surname}`;
        document.getElementById("age").innerHTML = `Age: ${el.age}`;
        document.getElementById("photo").innerHTML = `Photo: <img src="${el.photo}" alt='phofile' />`;
    }

    function cleanHtml(el){
        document.getElementById("nome").innerHTML = el;
        document.getElementById("surname").innerHTML = "";
        document.getElementById("age").innerHTML = "";
        document.getElementById("photo").innerHTML = "";
    }


  </script>
</html>
