### Vue Router From Scratch

<div align="center">

[![](https://mermaid.ink/img/pako:eNpFkLFuwzAMRH-FYNb4BzwUaOIC7dAOTZGhVgZComshFhXQMoLA9r9XtYN0Ox4ficONaKNjLLHp4tW2pAm-KiPP9XFg-IxDYoVGY4CDVUq2PUFRPMFu3CtTehBv0icSy7OR3QJMm9b3Keptgn29eV316bFdz4rOy3mCqv6gwO7-q89UtVAvd__o-frnGsEtBtZA3uXAoxEAg6nlwAbLLB3p2aCROXM0pHi4icUy6cBbHC4u5608_SgFLBvq-uxeSL5j_J_Z-Rz0fW1kKWb-BUagYxc?type=png)](https://mermaid.live/edit#pako:eNpFkLFuwzAMRH-FYNb4BzwUaOIC7dAOTZGhVgZComshFhXQMoLA9r9XtYN0Ox4ficONaKNjLLHp4tW2pAm-KiPP9XFg-IxDYoVGY4CDVUq2PUFRPMFu3CtTehBv0icSy7OR3QJMm9b3Keptgn29eV316bFdz4rOy3mCqv6gwO7-q89UtVAvd__o-frnGsEtBtZA3uXAoxEAg6nlwAbLLB3p2aCROXM0pHi4icUy6cBbHC4u5608_SgFLBvq-uxeSL5j_J_Z-Rz0fW1kKWb-BUagYxc)

</div>

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
const Home = { template: `<p>Home Page</p>` }
const youtube = { template: `<p>About Page</p>` }
const NotFound = { template: `<h1>404</h1>` }

//maping the path

const routes = [
  { path: '/', component: Home },
  { path: '/youtube', component: youtube },
  //{ path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  { path: '*', name: 'NotFound', component: NotFound },
]

// * works too { path: "*", name: "NotFound", component: NotFound },

const router = new VueRouter({
  routes, // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
})
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
mode: 'history'
```

if add + mode history o hash permanece nada muda

```js
base: '#'
```

only this = hash direct ok

```js
base: '#'
```

e se remove mode: history o hash volta open direct

```js
base: window.location.origin
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
// 👉component now is `components`
 { path: "/", components: { default: Home, yt: youtube } },

 //HTML
  <router-view name="yt"></router-view>
```

# Nested Routers

Rotas aninhadas

- Escolher a rota que vai mostrar sub-rotas
- Fazer um component to `segurar esses sub-links` no parent component, ou seja o component pai permanence
- Dentro do compoment pai precisamos de router-link e router-view
- Adicionar o children seguindo o default com Named Routers `{ path: "music", name: "r1", component: musica`
- fazer os components

# redirect router

[https://router.vuejs.org/guide/essentials/redirect-and-alias.html](https://router.vuejs.org/guide/essentials/redirect-and-alias.html)

e.g /blog goes to /youtube
`{ path: "/blog", component: httpVueLoader("./src/Blog.vue"), redirect: "/youtube", },`

<hr>

# Router 4

### CLI Add Router to existend project

`vue add router`

o code será overwrite, será criado pasta router > index.js, pasta views, Se ocorrer erros no HomeView.vue o mesmo está tentando importa um component que não existe, então apagar essas linhas
Terá que importar todo os components em App.vue. [ref](https://vueschool.io/articles/vuejs-tutorials/how-to-use-vue-router-a-complete-tutorial/)

<a name="router4"></a>

[https://router.vuejs.org/](https://router.vuejs.org/)

### CDN

```js
<script src="https://unpkg.com/vue-router@4"></script>
```

[routing.html#simple-routing-from-scratch](https://vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch)

Básico para criar rota usando `component string template` na documentação oficial visitar [https://router.vuejs.org/guide/](https://router.vuejs.org/guide/)

```js
const { createRouter, createWebHashHistory, createWebHistory } = VueRouter
const { createApp } = Vue

// String templates
const Home = { template: `<p>Home Page</p>` }
const Youtube = { template: `<p>Youtube Page</p>` }

//map the component
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/youtube', component: Youtube },
]

const router = createRouter({
  history: createWebHashHistory(location.pathname),
  routes: routes,
})
//create and mount the root instance
const app = createApp({})
app.use(router).mount('#app')
```

HTML:

```html
<router-link to="/">Home Page</router-link>
<router-link to="/youtube">Youtube</router-link> <br />
<router-view></router-view>
```

Para remover o `#/` alterar para:

`history: createWebHistory(),`

Contudo páginas carregadas diretamente sem o `hash` retornaram erro

e.g com `hash Mode` [/test-hash.html#/linkedin](https://gmapdev.netlify.app/docs_demo/vuejs-Router/test-hash.html#/linkedin)

e.g com `HTML Mode` [test-nohash.html/linkedin](https://gmapdev.netlify.app/docs_demo/vuejs-Router/test-nohash.html/linkedin)

Ler mais aqui [https://router.vuejs.org/guide/essentials/history-mode.html#html5-mode](https://router.vuejs.org/guide/essentials/history-mode.html#html5-mode) e solucão aqui [History pushState](#history-pushState)

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

# Nested Routes

```html
//obter o params da rota $route.params.name //no data do app created() {
console.log(this.$route); //currently console.log(this.$router); //parametros e
funcionalidades },

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

## Programmatic Navigation - Navegação programaticamente/automaticamente

[https://router.vuejs.org/guide/essentials/navigation.html](https://router.vuejs.org/guide/essentials/navigation.html)

```js
    created() {
          this.$router.push({ name: "apple" });
        },


      this.$router.go({
        name: "threads",
        params: { category: "android", slug: "post-one" },
      });
      this.$router.go({ path: "/blog/android/post-one" });

       this.$router.go({
        name: "threads",
        params: { category: "android", slug: "post-one" },
      });
```

## Vue change url but not change router-view:

After months using a `button solution` to fucntion force a hot reload:

`<button @click="ClicktoRouterPush(autosearch.category, autosearch.slug)">{{ autosearch.title }}</button>`

```js

ClicktoRouterPush(ca, sl) {
this.$router.push({name: 'threads', params: { category: ca, slug: sl }, })
this.$router.go({name: 'threads', params: { category: ca, slug: sl }, })
}

```

Finally you can solve this issue using the default `router-link` add a attribute in `router-view`:

```js
<router-view :key="$route.path"></router-view>
```

A new version of button was is a href with _@click.prevent_ not bad showing user the link when mouse is hover, better than `button solution`

```js
<a :href="`/blog/` + relac.category + '/' + relac.slug"
          @click.prevent="ClicktoRouterPush(relac.category, relac.slug)">
          {{ relac.title.substring(0, 20) }}... - {{ relac.data }}
</a>
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

# History pushState

### Netlify

Seguindo a doc [https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps](https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps) arquivos para Netlify:

`_redirects`

```js
/* /index.html 200
```

### DigitalOcean

**Settings :arrow_right: App :arrow_right: Spec :arrow_right:**: `catchall_document: index.html` [thanks John Dave Deploy Your ReactJS](https://www.linkedin.com/pulse/deploy-reactjs-application-digitalocean-john-dave-decano/)

# Links

- [Getting Started](https://router.vuejs.org/guide/)
- [Navigation Guards](https://router.vuejs.org/guide/advanced/navigation-guards.html)
