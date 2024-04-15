<h1 align="center">The Progressive JavaScript Framework</h1>

{{MVC 
  - Vue is in View
- [CursoVue3](https://github.com/tiagomatosweb/curso-gratuito-vue3)

Tudo é component
Tudo é reativo

- :pushpin: Vue 2 Oficial Github 
    - https://github.com/vuejs/vue/blob/main/CHANGELOG.md

- :pushpin: Vue 3 Oficial Github 
    - https://github.com/vuejs/core


# How check versions

```js
// CDNs
Global build => console.log(Vue.version)
EMS => import {version} from 'link...' => console.log(version)


```


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
