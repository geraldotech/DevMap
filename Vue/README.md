<h1 align="center">The Progressive JavaScript Framework</h1>



{{MVC 
  - Vue is in View
- [CursoVue3](https://github.com/tiagomatosweb/curso-gratuito-vue3)

Tudo é component
Tudo é reativo

Look for Vue CDN files ?
https://cdn.jsdelivr.net/npm/vue@2.7.13/dist/

Vue 2 Github https://github.com/vuejs/vue/blob/main/CHANGELOG.md

Vue 3 Github https://github.com/vuejs/core


# Quick recap

- Filter return a Array requires iterate:
  - **v-for** single in posts => single.title - Filter you can use:

```html
<ul>
  <li v-for="single in posts" key="single.id">{{single.title}}</li>
</ul>
```

- Find returns unique object: <p>{post.title}</p>

- Filter params:

```js
Array.filter((val) => { const lower = val.toLowerCase() }) return lower.includes(input.value)
```
