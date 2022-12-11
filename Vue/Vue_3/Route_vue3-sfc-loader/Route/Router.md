# VueJS Router From Scratch

A base usando CDN:

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

Adicionando uma Home Page:

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

Há exemplos usando type module, exports, components dinâmicos internos e .vue

# Named Routes

Rotas nomeadas, identificar a rota com um objeto name, em caso de mudar o `path` não é necessário voltar no HTML.

```js

//inves de definir assim
<router-link to="/msongs">Songs</router-link>

// bing the :to e passar um objecto com o nome do name
  <router-link :to="{name: 'songs'}">Songs</router-link>

// no routes path ficará assim
{ path: "/msongs", name: "songs", component: Songs },

//se mudar o path a rota ainda vai funcionar, pq foi passado o objeto com rota nomeada
{ path: "/rota-de-musicas", name: "songs", component: Songs },

```

[named-routes.html](https://v3.router.vuejs.org/guide/essentials/named-routes.html)

# sub rotas

```
//obter o params da rota
$route.params.name

//no data do app

 created() {
          console.log(this.$route);
          console.log(this.$router);
        },
```
