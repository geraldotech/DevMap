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

HTML:

```html
<router-link to="/youtube">Youtube</router-link> <br />
<router-view></router-view>
```

Criando uma rota raiz: root adicionando uma Home Page:

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

e.g com hash [https://gpnotes.droppages.com/vuejs-Router/test-hash.html#/linkedin](https://gpnotes.droppages.com/vuejs-Router/test-hash.html#/linkedin)

e.g sem hash `HTML Mode` [https://gpnotes.droppages.com/vuejs-Router/test-nohash.html/linkedin](https://gpnotes.droppages.com/vuejs-Router/test-nohash.html/linkedin)

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

## Props na sidebar

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
