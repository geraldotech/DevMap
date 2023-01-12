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

4 - Toggle button name:
<button @click="isActive = !isActive">
  {{isActive ? 'ativado' : 'desativado'}}
</button>

5 - Set a default class
<h1 class="static" :class="{active: isActive}">My title</h1>
```

Outra forma diferente com checkbox de fazer é atribuir uma `var` com `v-model` na input caso queira uma classe padrão, e um `watch` quando a `var` mudar atribuir um novo valor à `var` que está no bind da classe

6 - CSS:
.active {
color: green;
}
.padrao {
text-decoration: underline blue;
}

```js
👉Multiclass
 <input type="checkbox" v-model="ativa" id="to" />
<label for="to">Toogle</label>
<h1 :class="{'static': ativa, 'active': ativa }">My title</h1>



data() {
          return {
            ativa: false,
            static: "",
          };
        },
        watch: {
          ativa() {
            this.ativa ? (this.static = "active") : (this.static = "");
          },
      },

👉ou usar chamar um `method`

       <input type="checkbox" v-model="ativa" id="to" />
      <label for="to">Toogle</label>
      <h1 :class="{'static': ativa, 'active': ativa }">My title</h1>

          data() {
          return {
            ativa: false,
            static: "",
          };
        },

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

Multiple Values

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

Arrays e.g from [vuejs...](https://vuejs.org/guide/essentials/class-and-style.html#binding-html-classes)

```js
👉CSS
  .active {
        color: green;
      }
      .erroClass {
        text-decoration: underline blue;
      }

👉HTML

<div id="app">
      <button @click="isActive = !isActive">Toggle</button>
      <!--
        Em Array ocorre o inverso esta ativo? ok, senão em branco, e ainda a classe default é erroClass
      -->
      <div :class="[isActive ? active : '', erroClass]">
        Lorem ipsum dolor sit damet consectetur adipisicing elit. Aliquid odio
      </div>
</div>

👉JS

        data() {
          return {
            isActive: false,
            erroClass: "erroClass",
            active: "active",
          };
        },


```

# Binding to Objects

```
👉CSS:
.verde {
        color: green;
      }
      .red {
        color: red;
      }

👉html:
 <h1 :class="css.ver">Binding multiple classes</h1>
      <h2 :class="css.verm">Isabella</h2>

👉JS:
 data() {
          return {
            css: {
              ver: "verde",
              verm: "red",
            },
          };
        },

```
