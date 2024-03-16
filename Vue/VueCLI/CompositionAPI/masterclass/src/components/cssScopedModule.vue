<script setup>
import { ref } from 'vue'

const textColor = ref('seagreen')
</script>
<template>
  <div class="card">
    <h3>@ é um atalho para o src</h3>

    <h4>now can use scoped and module</h4>
  </div>

  <h1>- CSS Modules</h1>
  <p>{{ $style }}</p>
  <p :class="$style.red">This should be red</p>

   <h2>CSS Modules Custom Inject Name</h2>
   <aside :class="aside.sidebar">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
   </aside>

   <h1>v-bind() in CSS</h1>
   <div class="text">Hello VueJS</div>

  <p><a href="https://vuejs.org/api/sfc-css-features.html#sfc-css-features">READ MORE https://vuejs.org/api/sfc-css-features.html#sfc-css-features</a></p>
</template>
<style scoped>
.card {
  background-color: rgb(31, 47, 63);
  padding: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1rem;
  color: #fff;
  text-align: center;
  border-radius: 20px;
}
.text{
  color: v-bind(textColor);
  font-weight: bold;
  margin-block: 1rem;
  border-bottom: 1px solid #fff;
}
</style>
<style module>
.red {
  color: red;
}

.card {
  background-color: rgb(31, 47, 63);
  padding: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1rem;
  color: #fff;
  text-align: center;
  border-radius: 20px;
}
</style>

<style module="aside">
.sidebar {
  color: coral;
}
</style>

