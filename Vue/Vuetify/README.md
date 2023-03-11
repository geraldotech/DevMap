# Vuetify 2

### Links

- for Vue 3 👉[https://next.vuetifyjs.com/getting-started/installation/](https://next.vuetifyjs.com/getting-started/installation/)

- [https://vuetifyjs.com/en/getting-started/installation/#font-installation](https://vuetifyjs.com/en/getting-started/installation/#font-installation)

- [https://next.vuetifyjs.com/en/getting-started/installation/](https://next.vuetifyjs.com/en/getting-started/installation/)

### CDN:

```js
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
```

### Get Started:

```js
new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {},
});
```

### Tags

```html
<v-app>
  <v-main>
    <v-container>
      <template> </template>
    </v-container>
  </v-main>
</v-app>
```

### Dark Mode:

```js
vuetify: new Vuetify({
    theme: { dark: true },
  }),
```

### Button:

> must wrap it in a v-app component

```html
//width: 100%
<v-app>
  <v-btn>Button</v-btn>
</v-app>

//width: container size
<v-app>
  <v-container>
    <v-btn>Button</v-btn>
  </v-container>
</v-app>
//button color //color => https://vuetifyjs.com/en/features/theme/
<v-app>
  <v-container>
    <v-btn color="warning">Button</v-btn>
  </v-container>
</v-app>
```
