<!DOCTYPE html>
<html lang="en" style="color-scheme:dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New document</title>
</head>
<body>

# Table of Contents
[[toc]]



## JS snippets


  <details>
  <summary>open</summary>
  <p>hello</p>
  </details>

## Import Code Snippets + {highlightLines}

> /codes/bar.js

<<< @/codes/bar.js{1} 

## Line Highlighting in Code Blocks

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
```
  ```

  ```js
  export default {
  name: 'app',
  data() {
    return {
      name: name,
    }
  },
}
  ```

## Custom Containers

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::



## Interpolation
<h5>https://v0.vuepress.vuejs.org/guide/using-vue.html#templating</h5>

`{{ 1 + 1 }}` =>  {{ 1 + 1 }}

## Access to Site & Page Data

{{ $page }}


::: v-pre
`{{ This will be displayed as-is }}`
:::

## components
<demo-1/>

### Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>
  
</body>
</html>