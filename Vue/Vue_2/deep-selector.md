## problem com @media screen and scoped

Make a component like `home.vue`:

```html
<div class="wel">
  <h1>Welcome to my Website</h1>
</div>
```

```css
.wel {
  color: blue;
}
/* mobile -  never works A menos que a classe .wel fora do `@media` não existisse */
@media (max-width: 650px) {
  .wel {
    color: coral;
  }
}
```

### Solution 1

Add @media queries desktop

```css
/* mobile */
@media (max-width: 650px) {
  .wel {
    color: coral;
  }
}
/* desktop */
@media (min-width: 650px) {
  .wel {
    color: rgb(255, 80, 238);
  }
}
```

### Vue JS 2.6.14 CLI

`Footer.vue`

```css
<style scoped > .parent ::v-deep h1 {
  color: blue;
}

@media (max-width: 650px) {
  .parent ::v-deep h1 {
    color: coral;
  }
}
</style>

 /* with :deep(...) */

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

## rascunhos

- [] How to fixed é ai que entra o [Deep Selector](https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors), basta adicionar na primeira classe

```css
.wel ::v-deep h1 {
  color: blue;
}
```
