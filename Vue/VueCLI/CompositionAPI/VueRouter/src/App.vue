<script setup>



</script>

<template>
  <!--   <HelloWorld msg="Vite + Vue" /> -->
 
 <nav class="nav">
  <RouterLink to="/">Home </RouterLink> | <RouterLink to="/about">About</RouterLink> |
  <RouterLink :to="{name: 'services'}">Services</RouterLink> |
  <RouterLink to="/usuarios/10">Users</RouterLink>
  <!-- set a manul router params for test
     <RouterLink to="/usuarios/10">Users</RouterLink>

     query: http://localhost:5173/#/usuarios/?page=10
     hash: http://localhost:5173/#/usuarios/?page=10#videos
   -->
 </nav>

  <RouterView />

  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>

  <!-- <p>{{ $route }}</p> -->
</template>

<style scoped>
.nav{
  position: absolute;
  top: 0;
  height: 50px;
  right: 0;
  padding: 10px;
 
}
.nav a {
  font-size: 1.5rem;
}
</style>
