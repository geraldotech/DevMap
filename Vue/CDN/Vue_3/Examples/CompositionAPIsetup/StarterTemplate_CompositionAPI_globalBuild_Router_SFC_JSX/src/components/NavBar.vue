<template>
    <nav>
      <ul>
        <router-link to="/">Home</router-link>
        <router-link to="/radio">Radio</router-link>
        <router-link :to="{name: 'tetsold'}">Tests Old</router-link>
        <router-link :to="{name: 'tetsnew'}">Tests New</router-link>
        <router-link to="/about">About</router-link>
      </ul>
    </nav>
</template>
<script>
</script>
<style scoped>
nav ul {
  display: flex;
  justify-content: space-between;
  width: 432px;
  text-transform: uppercase;
}</style>