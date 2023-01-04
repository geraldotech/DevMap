# scratch de uso plugin

## Basic example for Vue 2 "httpVueLoader" criando um footer

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

No foo component:

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

E pra finalizar basta chamar o components na página `<foo></foo>`

- Não é necessário usar `module.exports = ....`, contúdo além de ser considerado uma boa prática o uso do `data()` faz necessário uma estrutura formal.

e.g para `httpVueLoader` `vue3-sfc-loader`

```js
<script>
module.exports = {
  data() {
    return {};
  },
};
</script>
```

- `httpVueLoader` e `vue3-sfc-loader` são um loader de arquivos.vue o último funciona no Vue 2/3
- `VueRouter` faz as rotas
- Ambos podem ser usado em conjunto, consultar exemplos!

# Vue vue3-sfc-loader

```js
 <script src="https://unpkg.com/vue@3"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue3-sfc-loader/dist/vue3-sfc-loader.js"></script>
```

consultar os exemplos prontos, há mais de uma maneira de fazer
