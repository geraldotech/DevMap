<script setup>
defineProps({
  variant: {
     type: String,
    // required: true
  },
})
</script>

<template>
  <p>
    for script setup checkout...
    <a href="https://vuejs.org/guide/components/props.html#props">https://vuejs.org/guide/components/props.html#props</a>
  </p>
  <div :class="`alert alert-${variant}`">Seu formulario foi enviado com sucesso</div>


</template>
<style scoped>
.alert {
  margin-top: .5rem;
  padding: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 6px;
  color: #fff;
  background-color: #333;
  font-weight: bold;
}

.alert-success {
  background-color: #42b983;
}
.alert-danger {
  background-color: red;
}
</style>
