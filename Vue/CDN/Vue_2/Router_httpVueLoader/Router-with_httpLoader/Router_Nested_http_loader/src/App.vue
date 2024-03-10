<template>
  <div>
    <h1>Parent component</h1>

    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'abt' }">About</router-link>
    <router-link to="/download">Downloads</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
module.exports = {};
</script>

<style>
</style>