# scratch para uso desse plugin

- Não é necessário usar `module.exports = ....`, contúdo além de ser considerado uma boa prática o uso do `data()` faz necessário uma estrutura formal.

e.g para `httpVueLoader` `vue3-sfc-loader`

```js
module.exports = {
  data() {
    return {
      foo: "Footer",
    };
  },
};
```

- `vue3-sfc-loader` é um loader de arquivos.vue
- `VueRouter` faz as rotas
- Ambos podem ser usado em conjunto, consultar exemplos!

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
