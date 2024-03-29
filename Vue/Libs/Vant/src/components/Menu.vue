<template>
  <div id="rotas">
    <nav>
      <ul>
        <li><router-link to="/"> Home </router-link></li>
        <li>
          <router-link :to="{ name: 'about' }"> Sobre </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'blog' }"> Blog </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
module.exports = {}
</script>
