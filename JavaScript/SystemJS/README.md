# SystemLoader

By default if you try in `type module`:

```js
//works great beucase provide export default
import Vue from "https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js";
//but does not provide an export named 'default' (at main.js:2:8)
import VueRouter from "https://unpkg.com/vue-router@3.0.2/dist/vue-router.js";
```

but using SystemJS will works

## !important

- System.import("tritons"); only works se o script foi declarado no index, esse call não funciona para chamar o main.js, use o prox item
- `<script type="systemjs-module" src="import:neptune"></script>`

# SystemJS CND:

```js
https://cdn.jsdelivr.net/npm/systemjs/dist/system.js
```

[YouTube Video](https://www.youtube.com/watch?v=AmdKF2UhFzw&t=729s)

e.g in `youtube-eg-vue-hello`

# Dynamic Import

e.g in `dynamic-import-vueRouter`

# System.register basic

```js
//📌html
<script type="systemjs-importmap">
      {
        "imports": {
          "main": "./main.js"
        }
      }
<!-- load a locally hosted module -->
<script type="systemjs-module" src="import:main"></script>

//📌JS
System.register([], function () {
  return {
    execute: function () {
      console.log("Import works");
    },
  };
});
```
