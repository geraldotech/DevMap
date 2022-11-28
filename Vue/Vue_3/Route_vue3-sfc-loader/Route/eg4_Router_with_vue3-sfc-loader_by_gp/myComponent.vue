<template>
  <div>
    <h4>{{ load }}</h4>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      load: "Component junto com header",
    };
  },
};
</script>
<style>
/*global */
.hello {
  background-color: rgb(31, 31, 13);
  color: white;
}

h4 {
  color: orange;
}
</style>