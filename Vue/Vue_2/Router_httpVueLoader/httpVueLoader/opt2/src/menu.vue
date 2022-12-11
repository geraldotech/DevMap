<template>
  <div class="menu">
    <ul>
      <li><a href="./index.html">Home</a></li>
      <li><a href="./about.html">About</a></li>
      <li><a href="./download.html">Download</a></li>
    </ul>
  </div>
</template>
<style scoped>
.menu {
  background: dodgerblue;
}
.menu ul {
  display: flex;
  max-width: 500px;
  height: 20px;
  padding: 5px 0;
  margin: 0 auto;
  justify-content: space-around;
}
.menu ul li {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
</style>