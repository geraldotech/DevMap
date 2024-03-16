### Render function, props, slots

https://vuejs.org/guide/extras/render-function

- return always return a () => ...
  - return () => 'Hello world'
  - return () => h('div', 'My custom')
  - return () => [template, template2]

Composition API direct component? - add setup and lang jsx

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
