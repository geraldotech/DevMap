## Vue 2 CDN

[Download and CDN](https://v2.vuejs.org/v2/guide/installation.html)

```js
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

//latest version:
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.13/dist/vue.js"></script>

```

### Vue Router

[https://cdnjs.com/libraries/vue-router](https://cdnjs.com/libraries/vue-router)

### for Prodution:

```js
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.13"></script>
```

### Basic script

```js
const app = new Vue({
  el: "#app",
  data: {
    message: "Geraldo",
  },
});
```

For CDN components

```js
const app = new Vue({
  el: "#app",
  data: {},
  components: {
    home: httpVueLoader("home.vue"),
    foo: httpVueLoader("footer.vue"),
  },
});
```
