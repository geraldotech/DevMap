const vm = new Vue({
  el: "#app",
  data: {
    htmlcode: `<style>
    h1{
      color: red;
    }
  section{
  width: 500px;
   display: flex;
  justify-content: space-between;
  margin: 10px auto;
  }


input[type="checkbox"]:checked + label {
color: seagreen;
}
  </style>
  <main>
  <section>
  
  <h1>title</h1>
  <h2>title 2 </h2>
  
  </section>
      
<input type="checkbox" id="op" />
<label  for="op">checkbox</label>  
</main>
`,
  },
  //template: `<p>Hello</p>`,
});

document.documentElement.style = `color-scheme:dark`;
