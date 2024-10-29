Example import components

```js
const ButtonAlpha = imports('./src/components/Button.vue')
```

- Nomes para component

```css
Meucomponent - ok
MeuComponnent - not
sga-custom - not
'sga-custom' - ok between ''
'sga-Custom' - not
custombutton - ok
```

- Todos os components são renderizados como uma div

```js
/* minimum to export a component */
export default {}
```
