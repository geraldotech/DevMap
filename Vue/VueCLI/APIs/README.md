# API styles

- https://vuejs.org/guide/essentials/reactivity-fundamentals.html `export default set() vs <script script>`

- https://vuejsdevelopers.com/2022/06/01/ref-vs-reactive/

Vue components can be authored in two different API styles [READ MORE](https://vuejs.org/guide/introduction.html#api-styles)

- Options API `data()....`
- Composition API `Vue 3.0`
  - ref - define .value
  - reactive
    - para usar Composition API pode ser por:
    - [ x ] [export default setup() and return](./APIsetupExport.vue) `<APIsetupExportVue title="My Title Props" city="Rio de Janeiro" state="Alagoas"/>`
    - [ x ] [script setup()](./APIscriptsetup.vue) - [Example 2 script-setup](./script-setup.vue)

```js
