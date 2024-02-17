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
