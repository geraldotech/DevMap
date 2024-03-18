### Render function, props, slots

https://vuejs.org/guide/extras/render-function

- always return a `return () => ...`
  - return () => 'Hello world'
  - return () => h('div', 'My custom')
  - return () => [template, template2]

- in `setup script` tag you cannot return a direct template, you must put it in a const fn and call this component in `template`


- reactive examples: `forms.jsx` return a full vnode template and `bar.jsx` return a direct elements
- go to RenderFN, uncomment each example on top

Create a jsx `Component.vue` with composition API direct component? - add setup and lang jsx

```jsx
<script setup lang="jsx">
const Render = () => {
  return h('div', 'Render')
}

const JsxNode = () => {
    return <div> text </div>;
  };

function Footer(){
  return <h1>h1</h1>
}
</script>
<template>
  <Footer/>

</template>
```

- **jsx**

```jsx
import List from './list'
import List from './list.jsx' //  is not a rule but can be a good practice

// documentation uses.jsx https://vuejs.org/guide/extras/render-function.html#components
```


