## problem com @media screen and scoped

- [] Soluções para não consegui usar o **deep selector** na versão CDN com Vue Loader 2 para resolver os problema de media queries. Como o Vue-Loader se trata de um plug-in “hack” não oficialmente não suportado pelo Vue CDN.

- [] Resumo: usar classes iguais dentro e fora do @Media Queries não funcionam o style do @Media Queries

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

<!--
### Solution parent container

1 - Adicionar Media Queries para desktop

```css
/* deskop  */
@media (min-width: 650px) {
  .parent {
    color: rebeccapurple;
  }
}
/* mobile  */
@media (max-width: 650px) {
  .parent {
    color: darkcyan;
  }
}
```

2 - englobar todos em uma class `child` container

```html
<div class="parent">
  <section class="child">
    <h1>Welcome to my Website</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, quaerat!
    </p>
  </section>
</div>
```

```css
.parent {
  color: rebeccapurple;
}

/*  mobile  */
@media (max-width: 650px) {
  .parent .child {
    color: darkcyan;
  }
}
```

### Styling descenentes elements

- Não queremos todos os elementos de uma cor no parent e apenas o item específico

- Se remover a classe .parent fora do Media Queries, ainda vai continuar funcionando dentro do Media Queries

Especificar no @media o filho a ser estilizado

```css
/* deskop  */
@media (min-width: 650px) {
  .parent {
    color: rebeccapurple;
  }
}
/* mobile  */
@media (max-width: 650px) {
  .parent h1 {
    color: darkcyan;
  }
}
```
 -->

### Solution for All Scenarios

- Add @media queries desktop and mobile

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

- Use !important to force style

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

- Vue JS2 with Vue Loader 2 Not!
- Vue JS2 with vue2-sfc-loader: Yes!

# Vue JS 2.6.14 CLI using deep Selector

`Footer.vue`

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
