httpVueLoader load .vue files Router do router no refresh page

## Basic example

```js
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.13/dist/vue.js"></script>
```

```js
<script src="https://unpkg.com/http-vue-loader"></script>
```

```js
const app = new Vue({
  el: "#app",
  data: {},
  components: {
    foo: httpVueLoader("./views/foo.vue"),
  },
});
```

components:

```js
<template>
  <div>
    <p>{{ a }}</p>
  </div>
</template>
<script>
/*
requer module.exports... para logic
*/
module.exports = {
  data() {
    return {
      a: "footer",
    };
  },
};
</script>
```
