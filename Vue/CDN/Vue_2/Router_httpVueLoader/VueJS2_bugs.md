# VueJS Components

- `Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.`

Ou seja somente um elemento pai que pode ser uma div englobando todos os itens

```html
<template id="baixar">
  <div>
    <p>content goes here</p>
  </div>
</template>
```

[https://stackoverflow.com/questions/45000510/vue-js-error-component-template-should-contain-exactly-one-root-element](https://stackoverflow.com/questions/45000510/vue-js-error-component-template-should-contain-exactly-one-root-element)

- Bug de Rotas... Abrir somente a pasta do projeto atual no server, bugs como 404 error podem acontecer ao tentar carregar o component.vue
