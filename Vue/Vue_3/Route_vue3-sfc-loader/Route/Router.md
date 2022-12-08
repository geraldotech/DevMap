# VueJS Router From Scratch

A base usando CDN

```js
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-router@4"></script>
```

O básico para criar uma rota usando component string template

```js
const { createRouter, createWebHashHistory, createWebHistory } = VueRouter;
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      Title: "VueJS Ninja Way",
    };
  },
});

// String templates
const Youtube = { template: `<p>Youtube Page</p>` };

//Router
const router = createRouter({
  history: createWebHashHistory(location.pathname),
  routes: [{ path: "/youtube", component: Youtube }],
});

app.use(router).mount("#app");
```

HTML

```html
<router-link to="/youtube">Youtube</router-link> <router-view></router-view>
```

Tudo funcionando agora vamos adicionar uma HOME Page só adicionar:

```js

//component string template
  const Home = { template: `<p>Home Page</p>` };

//rota
 { path: "/youtube", component: Youtube }

//html
<router-link to="/">Home Page</router-link>
```

Para remover o #/ altera para:

`history: createWebHistory(),`

Contudo páginas carregadas diretamente sem o `hash` retornaram erro

e.g com hash [https://gpnotes.droppages.com/test-hash.html#/linkedin](https://gpnotes.droppages.com/test-hash.html#/linkedin)

e.g sem hash `HTML Mode` [https://gpnotes.droppages.com/linkedin](https://gpnotes.droppages.com/linkedin)

Ler mais aqui [https://router.vuejs.org/guide/essentials/history-mode.html#html5-mode](https://router.vuejs.org/guide/essentials/history-mode.html#html5-mode)

Ha exemplos usando type module e exports, além de carregar um component
