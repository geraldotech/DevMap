<template>
  <nav>
    <ul>
      <router-link to="/">Home</router-link>
      <router-link to="/radio">Radio</router-link>
      <router-link :to="{ name: 'tetsnew' }">Tests New</router-link>
      <router-link to="/Props">Props</router-link>
      <router-link to="/Slots">Slots</router-link>
    </ul>
  </nav>
</template>
<script></script>
<style scoped>
nav ul {
  display: flex;
  justify-content: space-between;
  width: 432px;
  text-transform: uppercase;
}
</style>
