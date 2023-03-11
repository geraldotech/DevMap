# Vuetify 2

### Links

- ### Vue 3

  👉[https://next.vuetifyjs.com/getting-started/installation/](https://next.vuetifyjs.com/getting-started/installation/)

- ### Vue 2 👇

- [https://vuetifyjs.com/en/getting-started/installation/#font-installation](https://vuetifyjs.com/en/getting-started/installation/#font-installation)

- [https://next.vuetifyjs.com/en/getting-started/installation/](https://next.vuetifyjs.com/en/getting-started/installation/)

### CDN:

```js
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
```

# Some best Links

### API

> Tab API

```html
<v-app>
  <v-main>
    <v-container>
      <template>
        👉<!-- card -->
        <v-card>
          <v-card-title> </v-card-title>
          <v-card-text> </v-card-text>

          <v-card-actions>
            <v-btn color="success">Register</v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
        👉<!-- form -->
        <v-form>
          <v-text-field></v-text-field>
        </v-form>
        👉<!-- hr -->
        <v-divider></v-divider>
        👉<!-- btn + icon -->
        <v-btn> <v-icon>mdi-wifi-star</v-icon></v-btn>
      </template>
    </v-container>
  </v-main>
</v-app>
```

### All Components

[https://vuetifyjs.com/en/components/all/](https://vuetifyjs.com/en/components/all/)

### Colors

- [https://v2.vuetifyjs.com/en/features/theme/#customizing](https://v2.vuetifyjs.com/en/features/theme/#customizing)
- [https://v2.vuetifyjs.com/en/styles/colors/](https://v2.vuetifyjs.com/en/styles/colors/)

# Tips

### v-icon

[https://materialdesignicons.com/](https://materialdesignicons.com/)

### Get Started:

```js
new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {},
});
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
