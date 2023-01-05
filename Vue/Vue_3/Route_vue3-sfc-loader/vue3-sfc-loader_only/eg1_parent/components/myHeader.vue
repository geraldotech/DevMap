<template>
  <div>
    <header>
      <h1>h1 Header</h1>
    </header>
    <nav>
      <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./about.html">About</a></li>
      </ul>
    </nav>
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
</style>


<style scoped>
/*
scoped only for this header
*/
h1 {
  color: rgb(255, 17, 17);
}
nav ul {
  display: flex;
  width: 300px;
  justify-content: space-evenly;
}
</style>