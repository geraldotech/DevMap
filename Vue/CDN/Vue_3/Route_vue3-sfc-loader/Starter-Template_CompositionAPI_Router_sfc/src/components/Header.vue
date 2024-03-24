<template>
  
    <header>
      <NavBarVue/>
    </header>
  
</template>

<script setup>
import NavBarVue from "./NavBar.vue";



</script>

<style scoped>
/*
scoped only for this header
*/
header{
  background: #333;
  padding: .3rem;
}
h1 {
  color: rgb(255, 17, 17);
}
nav ul {
  display: flex;
  width: 300px;
  justify-content: space-evenly;
}
</style>

