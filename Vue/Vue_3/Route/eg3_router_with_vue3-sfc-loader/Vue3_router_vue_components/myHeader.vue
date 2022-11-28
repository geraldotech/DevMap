<template>
  <div>
    <header>
      <h1>header</h1>
      <p>
        mais um exemplo de rotas components são pré carregados direitamentos em
        #id
      </p>
    </header>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {};
  },
};
</script>


<style>
/*
global header all pages
*/
* {
  color-scheme: dark;
}
ul li,
p {
  color: dodgerblue;
}
nav ul {
  display: flex;
  justify-content: space-evenly;
  width: 332px;
}
</style>


<style scoped>
/*
scoped only for this header
*/
header {
  color: rgb(255, 17, 17);
  text-align: center;
}
nav ul {
  display: flex;
  width: 300px;
  justify-content: space-evenly;
}
</style>

