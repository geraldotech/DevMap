<script setup lang="jsx">
import Foo from '../src/components/footer.vue'
import MyHeader from '../src/components/Header.vue'
</script>

<template>
  <div>

    <MyHeader />
   
    <router-view></router-view>

    <Foo />
  </div>
</template>

<style>
* {
  color-scheme: dark;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.hello {
  background-color: rgb(31, 31, 13);
  color: white;
}

h4 {
  color: orange;
}

ul li,
p {
  color: dodgerblue;
}
</style>
