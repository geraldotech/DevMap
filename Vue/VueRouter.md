### Vue Router From Scratch

repository for Vue Router
[https://github.com/vuejs/router](https://github.com/vuejs/router)

- [Router 3 for Vue 2](#router3)
- [Router 4 for Vue 3](#router4)

<hr>

# Router 3

<a name="router3"></a>

[https://v3.router.vuejs.org/](https://v3.router.vuejs.org/)

CDN

```js
<script src="https://unpkg.com/vue-router@3.0.2/dist/vue-router.js"></script>
```

```js
<script src="https://unpkg.com/vue-router@3.6.5/dist/vue-router.js"></script>
```

- [Vue 2 Router article](https://shouts.dev/articles/vue-js-routing-from-scratch-using-cdn-without-cli)

Básico para criar rota [https://v3.router.vuejs.org/guide/](https://v3.router.vuejs.org/guide/)

Contextualizando Rotas:

- use router-link component for navigation
- render the components that matched
- Define the route templates / components
- Define map paths
- Create the Router instance
- Create and mount the root instance.
- Set router-link + router-view

```html
<router-link to="/">Home Page</router-link>
<router-link to="/youtube">Youtube</router-link> <br />
<router-view></router-view>
```

```js
const Home = { template: `<p>Home Page</p>` };
const youtube = { template: `<p>About Page</p>` };

//maping the path

const routes = [
  { path: "/", component: Home },
  { path: "/youtube", component: youtube },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  el: "#app",
  router,
});
```

# Tips

Assim já faz o hash open direct

```js

var router = new VueRouter({
  routes: routes,
}
```

remove o hash

```js
mode: "history";
```

if add + mode history o hash permanece porém não abre direto nada muda

```js
base: "#";
```

only this = hash direct ok

```js
base: "#";
```

e se remove mode: history o hash volta open direct

```js
base: window.location.origin;
```

outras:

```js
base: "/#apps",
base: "/app",
```

# Named views

Sometimes you need to display multiple views at the same time instead of nesting them, e.g. creating a layout with a.... [https://v3.router.vuejs.org/guide/essentials/named-views.html#nested-named-views](https://v3.router.vuejs.org/guide/essentials/named-views.html#nested-named-views)

## e.g na Home exibindo 2 components

```js
 { path: "/", components: { default: Home, yt: youtube } },

 //HTML
  <router-view name="yt"></router-view>
```

<hr>

# Router 4

<a name="router4"></a>

[https://router.vuejs.org/](https://router.vuejs.org/)

CDN

```js
<script src="https://unpkg.com/vue-router@4"></script>
```

[routing.html#simple-routing-from-scratch](https://vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch)

Básico para criar rota usando `component string template` na documentação oficial visitar [https://router.vuejs.org/guide/](https://router.vuejs.org/guide/)

```js
const { createRouter, createWebHashHistory, createWebHistory } = VueRouter;
const { createApp } = Vue;

// String templates
const Home = { template: `<p>Home Page</p>` };
const Youtube = { template: `<p>Youtube Page</p>` };

//map the component
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/youtube", component: Youtube },
];

const router = createRouter({
  history: createWebHashHistory(location.pathname),
  routes: routes,
});
//create and mount the root instance
const app = createApp({});
app.use(router).mount("#app");
```

HTML:

```html
<router-link to="/">Home Page</router-link>
<router-link to="/youtube">Youtube</router-link> <br />
<router-view></router-view>
```

Para remover o #/ alterar para:

`history: createWebHistory(),`

Contudo páginas carregadas diretamente sem o `hash` retornaram erro

e.g com `hash Mode` [/test-hash.html#/linkedin](https://gmapdev.netlify.app/docs_demo/vuejs-Router/test-hash.html#/linkedin)

e.g com `HTML Mode` [test-nohash.html/linkedin](https://gmapdev.netlify.app/docs_demo/vuejs-Router/test-nohash.html/linkedin)

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
          console.log(this.$route); //currently
          console.log(this.$router); //parametros e funcionalidades
       },

        <section>
        <h1>$route</h1>
        <p>{{$route.params.name}}</p>
        <p>{{$route.fullPath}}</p>
        <p>{{$route.href + 'my-slug'}}</p>
        <p>{{$route.path}}</p>
        <p>{{$route.name}}</p>
        <p>{{$route.name == 'apple'}}</p>
        <p>{{$route.name}} {{$route.href}}</p>
        <p>{{$route}}</p>
        <p>{{$route}}</p>

        <div style="width: 100%; height: 2px; background: coral"></div>
        <h1>$router</h1>
      </section>
```

# navegação programaticamente/automaticamente

```
    created() {
          this.$router.push({ name: "apple" });
        },
```

## Catch 404

[https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes](https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes)

## Props na Sidebar

```js
//na router add
  props:{sidebar: true},

//vai ficar assim
 {
            path: "/my-musicas",
            name: "songs",
            component: Songs,
            props:{sidebar: true},
 }

//entao no data() nesse component, podemos chamar o created para imprimir o estado real da prop, além de definir o nome+tipo de prop
 created(){
          console.log(this.sidebar)
        },
        props: {
          sidebar: Boolean,
        },
```

# Links

[Getting Started](https://router.vuejs.org/guide/)
[Navigation Guards](https://router.vuejs.org/guide/advanced/navigation-guards.html)
