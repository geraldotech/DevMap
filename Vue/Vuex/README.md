<h1 align="center">Vuex</h1>

Armazenar e compartilhar estados entre os components:

# Install

> index.html

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/vuex/3.0.1/vuex.min.js"></script>
```

> main.js

```js
const store = new Vuex.Store({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
  },
});
```

> main.js adicionar que vai usar o store, e.g::

```js
... new Vue({
  data: {},
  store,
  template: `<App></App>`,
  components: {
    ...
```

> create a Increment.vue
> Podemos fazer o commit @click or create a function for this

```vue
<template>
  <div>
    <!--    direct commit -->
    <button @click="$store.commit('increment')">
      Increment Component direct commit
    </button>
    <!--   or call a function -->
    <button @click="increment">Increment from Increment.vue</button>
  </div>
</template>

<script>
module.exports = {
  methods: {
    increment() {
      this.$store.state.counter++;
    },
  },
};
</script>
```

> App.vue

```js
<template>
  <div>
    <button @click="increment">Increment from App.vue</button>
    <!-- component -->
    <Increment></Increment>
    <hr />
    <p>{{ $store.state.counter }}</p>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {};
  },
  components: {
    Increment: httpVueLoader("../src/components/Increment.vue"),
  },
  methods: {
    increment() {
      this.$store.state.counter++;
    },
  },
};
</script>
```

### Links:

https://www.koderhq.com/tutorial/vue/vuex/#setup
https://www.codingame.com/playgrounds/6661/vuex-tutorial
https://embed.plnkr.co/plunk/34vgXW
