# ToggleClass Like a Pro

> Always check out documentation
> [vuejs guide](https://vuejs.org/guide/essentials/class-and-style.html#binding-html-classes) > [link 2](https://renatello.com/vue-js-toggle-class/)

# Binding to Objects

<hr>

```js
// 👉 1 - :bind the class and set class to isActive Booelan:

// modo verboso
<h1 :class="{'title-home': isHome ? true : false}">Curso VueJS</h1>

// just...
<h1 :class="{active: isActive}">My title</h1>

// 👉 2 - Set a methods or inline Toggle:
<button @click="isActive = !isActive">Toggle</button>

// 👉 3 - in data: data() { return { isActive: false, }} <br />

// 👉 4 - Toggle button name:
<button @click="isActive = !isActive">{{isActive ? 'ativado' : 'desativado'}}</button>

// 👉 5 - Set a default class
<h1
  class="static"
  :class="{active: isActive}">
  My title
</h1>

// or
  <h1  :class="`default ${classVar}`">Curso VueJS</h1>
  <h1  :class="{'title':true, 'title-home': isHome }"> ... </h1>

6 - 👉CSS: 

.active { 
  color: green; 
  } 
  .padrao { 
    text-decoration: underline blue; 
    }
```

### Object.values

```js

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

👉CSS:
 .verde {
   color: green;
 }
 .red {
   color: red;
 }
```

Uma forma diferente usando checkbox é atribuir uma `var` com `v-model` na input caso queira uma classe padrão, e um `watch` quando a `var` mudar atribuir um novo valor à `var` que está no bind da classe.

## Multiple Values

```js

👉HTML
<input type="checkbox" v-model="ativa" id="to" />
<label for="to">Toogle</label>
<h1 :class="{'static': ativa, 'active': ativa }">My title</h1>
//sem ''
<h1 :class="{active: ativa, static: ativa}">My title</h1>

// 👉CSS
  .active {
      color: green;
      }
  .static {
      text-decoration: underline red;
      }

// 👉JS
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

// 👉 Using `methods`

      <input type="checkbox" v-model="ativa" id="to" />
      <label for="to">Toogle</label>
      <h1 :class="{'static': ativa, 'active': ativa }">My title</h1>

          data() {
          return {
            ativa: false,
            static: "",
          };
        },

// 👉 Using methods + checkbox

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

// 👉Pass direct Multiple Values
    <h1 :class="{active, static}">My title</h1>

      data() {
          return {
            ativa: false,
            active: "active",
            static: "static",
          };
        },
```

## Multiple Values 2

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

# Binding to Arrays

<hr>

Arrays e.g from [vuejs...](https://vuejs.org/guide/essentials/class-and-style.html#binding-html-classes)

```js
// 👉CSS
      .active {
        color: green;
      }
      .erroClass {
        text-decoration: underline blue;
      }

// 👉HTML

<div id="app">
      <button @click="isActive = !isActive">Toggle</button>
      <!--
        Em Array ocorre o inverso esta ativo? ok, senão em branco, e ainda a classe default é erroClass
      -->
      <div :class="[isActive ? active : '', erroClass]">
        Lorem ipsum dolor sit damet consectetur adipisicing elit. Aliquid odio
      </div>
</div>

// 👉JS
        data() {
          return {
            isActive: false,
            erroClass: "erroClass",
            active: "active",
          };
        },

// 👉Pass direct Multiple Values
 <h1 :class="[active, static]">My title</h1>

        data() {
          return {
            ativa: false,
            active: "active",
            static: "static",
          };
        },

// 👉Toggle  Multiple Values

<h1 :class="[ativa ? {active,static} : '']">My title</h1>
//return o próprio 'ativa'
<h1 :class="[ativa ? {static, active} : ativa]">My title</h1>

    data() {
          return {
            ativa: false,
          };
    }

// 👉 Array + object conditional
 <p :class="['text', {'title-home': isHome}]"> ...


```

```js
// define one a variable

<h1  :class="pClass">Curso VueJS</h1>

// Data API
isHome: true,
pClass: {'title':true, 'title-home': this.isHome },


// direct styles
<p :style="{'color': 'red', 'backgroundColor': '#000'}">

// or set a var  
inlineStyle: {'color': 'red', 'backgroundColor': '#000'},

// DOM Style Object https://www.w3schools.com/jsref/dom_obj_style.asp
inlineStyle: {color: 'red', backgroundColor: '#000'},

```