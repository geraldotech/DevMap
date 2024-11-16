#### sfc-loader-autoimports.js by Geraldo Filho

```js
// native way without autoLoader
components: {
    Mbutton: Vue.defineAsyncComponent(() => loadModule('./src/components/Button.vue', options)),
}

```

### with AutoLoader PLUGIN

Easy way to import vue components using the SFCLoader

## How install?

replace current `sfc-loader.js` file to `fc-loader-autoimports.js`

```js

// using: imports
const ButtonAlpha = imports('./src/components/Button.vue')

// using: auto import [set default components path before use it]
components: {
   youtubecom: autoimports('Youtube'),
}

app.component('youtubecom', autoimports('Youtube'))

// using: autoload  set default components path before use it]

autoload('Typescript')

// after whatever imports mount the vue!
app.mount('#app')
```

imports

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
