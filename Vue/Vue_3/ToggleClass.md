# ToggleClass Like a Pro

[link1](https://vuejs.org/guide/essentials/class-and-style.html#binding-html-classes)
[link2](https://renatello.com/vue-js-toggle-class/)

<hr>

```html
1 - :bind the class and set class to isActive Booelan:
<h1 :class="{active: isActive}">My title</h1>

2 - Set a methods or inline Toggle:
<button @click="isActive = !isActive">Toggle</button>

3 - in data:
<a> `data() { return { isActive: false, }; </a>

4 - Get Better Toggle button name:
<button @click="isActive = !isActive">
  {{isActive ? 'ativado' : 'desativado'}}
</button>

5 - Set a default class
<h1 class="static" :class="{active: isActive}">My title</h1>
```

Outra forma diferente com checkbox de fazer é atribuir uma `var` com `v-model` na input caso queira uma classe padrão, e um `watch` quando a `var` mudar atribuir um novo valor à `var` que está no bind da classe

```js

<h1 :class="static">My title</h1>

<label>
        <input type="checkbox" v-model="ativa" />
        {{ativa ? 'ativado' : 'desativado'}}
</label>



        data() {
          return {
            ativa: false,
            static: "",
          };
        },
        methods: {},
        watch: {
          ativa() {
            this.ativa ? (this.static = "active") : (this.static = "");
          },
        },


👉ou usar chamar um method

        data() {
          return {
            ativa: false,
            static: "",
          };
        },
        methods: {
          ativar() {
            this.ativa ? (this.static = "active") : (this.
static = "");
          },
        },
        watch: {
          ativa() {
            this.ativar();
          },
        },

👉  `static` onde ficou vázio podemos definir um default class

👉 checkbox using methods

 <h1 :class="{active : static}">My title</h1>
      <label>
    <input type="checkbox" @click="ativar" />
    {{static ? 'ativado' : 'desativado'}}
    </label>

      Vue.createApp({
        data() {
          return {
            static: false,
          };
        },
        methods: {
          ativar() {
            this.static = !this.static;
          },
        },
      }).mount(app);
```

Multiclass

```js

 <h1 :class="{'active' : static, 'text-danger': hasError}">My title</h1>
      <label>
        <input type="checkbox" @click="ativar" />
         {{hasError ? 'ativado' : 'desativado'}}
</label>


        data() {
          return {
            static: true,
            hasError: false,
          };
        },
        methods: {
          ativar() {
            this.static = !this.static;
            this.hasError = !this.hasError;
          },
        },
```
