<template>
  <nav>
    <ul>
      <router-link to="/">Home - emit</router-link>
      <router-link to="/props">Props</router-link>
      <router-link to="/slots">Slots</router-link>
      <router-link to="/computed">Computed</router-link>
      <router-link to="/watch">Watch</router-link>
      <router-link to="/extra" title="exemplos de exports">Exemplos exports</router-link>
      <router-link to="/myref" title="Forms and res">Forms and refs</router-link>
      <router-link :to="{ name: 'tetsnew' }">Tests New</router-link>
    </ul>
  </nav>
</template>
<script></script>
<style scoped>
nav ul {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
}
</style>
