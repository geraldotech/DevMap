## problem com @media screen and scoped

- [ ] Soluções para não consegui usar o **deep selector** na versão CDN com Vue Loader 2 para resolver os problema de media queries. Como o Vue-Loader se trata de um plug-in “hack” não oficialmente não suportado pelo Vue CDN.

- [ ] Resumo: usar classes iguais dentro e fora do @Media Queries não funcionam o style do @Media Queries

### Styling the parent container

Make a component like `Home.vue` e set a class in div parent para todos os descenentes elementos change color.

```html
<div class="parent">
  <h1>Welcome to my Website</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, quaerat!
  </p>
</div>
```

```css
<style scoped>
.parent  {
  color: rebeccapurple;
}


@media (max-width: 650px ){ /* mobile -  never works a menos que a classe .parent fora do `@media` não existisse */
  .parent {
    color: darkcyan;
  }
}
<style>
```

### Solutions for All Scenarios

- Add **@media queries** desktop and mobile

```css
/* desktop */
@media (min-width: 650px) {
  .parent .child {
    color: rgb(197, 0, 0);
  }
}

/*  mobile  */
@media (max-width: 650px) {
  .parent .child {
    color: rgb(0, 197, 197);
  }
}
```

- Use **!important** to force style

```css
.parent .child {
  color: rgb(197, 0, 0);
}

/* desktop */
@media (min-width: 650px) {
}

/*  mobile  */
@media (max-width: 650px) {
  .parent .child {
    color: rgb(0, 197, 197) !important;
  }
}
```

# :deep support:

- Vue JS2 with Vue Loader 2: Not!
- Vue JS2 with vue2-sfc-loader: Yes!

# Vue JS 2.6.14 CLI using deep Selector

Create a SFC `Footer.vue`

```css
<style scoped>

.parent ::v-deep h1 {
  color: blue;
}

@media (max-width: 650px) {
  .parent ::v-deep h1 {
    color: coral;
  }
}
</style>

 /* ===== with :deep(...) ===== */
<style scoped>
.parent :deep(h1) {
  color: blue;
}

@media (max-width: 650px) {
  .parent :deep(h1) {
    color: coral;
  }
}
</style>
```
