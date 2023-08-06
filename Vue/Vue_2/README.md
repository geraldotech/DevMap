## Vue 2

- Documentation
  [https://v2.vuejs.org/v2/guide/installation.html](https://v2.vuejs.org/v2/guide/installation.html) or [ptbr](https://br.vuejs.org/v2/guide/installation.html)
- The Vue Instance
  [https://v2.vuejs.org/v2/guide/instance.html](https://v2.vuejs.org/v2/guide/instance.html)

<details>
<summary>CDN Links: </summary>

Development Version: 2.7.14

```js
https://v2.vuejs.org/js/vue.js
```

```js
https://cdn.jsdelivr.net/npm/vue/dist/vue.js
```

```js
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

esm.browser - defina type module e use direto no main.js

```js
import Vue from "https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js";
```

### Prodution:

```js
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.13"></script>
```

</details>

### Get Started Basic and short way

```js
const app = new Vue({
  el: "#app",
  data: {
    message: "Geraldo",
  },
});

//v1 simpler usando el
new Vue({
  el: "#app",
});

//v2 usando $mount
new Vue({
  data: {},
}).$mount("#app");

//v3 using templates to show simple Hello, sem usar data()
const vm = new Vue({
  el: "#app",
  template: "<p>Hello</p>",
});

//v4 template, data
const vm = new Vue({
  el: root,
  data: {
    greeting: "Welcome",
  },
  template: `<div><h1>{{greeting}}</h1></div>`,
});
```

### this.root and this.{obj}
```js

console.log(this.$root) same than console.log(vm);

console.log(this.items) same than console.log(vm.items)
```

### Global Var
[global-variable-to-vuejs](https://stackoverflow.com/questions/40896261/apply-global-variable-to-vuejs)

  - Vue.prototype
```js
//main.js
Vue.prototype.$cdnimg23 = "https://gpnotes.droppages.com/geraldox.proxyfiles.com/2023/img";

//AnyComponent.vue
<p>{{$cdnimg23}}</p>

//binding
<figure>
        <img :src="`${$cdnimg23}/vuejs.png`" alt="" />
</figure>

```

 - using mixin Global

 ```js
 //main.js
 Vue.mixin({
  data: function() {
    return {
      globalVar:'global using mixin'
    }
  }
})

//Components.vue
  <h2>{{globalVar}}</h2>

  <figure>
     <img :src="imgmix+'/vuejs.png'" alt="">
  </figure>

  <figure>
     <img :src="`${imgmix}/vuejs.png`" alt="">
  </figure>
 ```

### Data na Vue instance declarar objects:

> vm (short for ViewModel)

```js
const vm = new Vue({
  el: "#app",
  data: {
    a: "sd",
  },
});

setTimeout(() => {
  vm.a = "ok";
}, 2000);

// no console variable
vm.a; //"ok"

console.log(app.a); //"ok"
```

### e.g Methods in Vue

```js
myfunc() {...}

myfunc: function(){...}

myfunc: () => {...}

data:() => {...}

```

### data functions should return an object

```js
- no return because is a obj
  	data: {...}

- return method Vue style
    data(){
      return{ ... }
    }

- return arrow function
  data: () => {
    return {...}
  }

- return extende mode
   data: function () {
          return {};
        },
```

### Exemplo de objects:

```js
<div id="app">{{name}}, {{idade}}, {{facul.curso}}</div>
    <script>
      const app = new Vue({
        el: "#app",
        data: {
          name: "Geraldo",
          idade: 30,
          facul: {
            status: "sim",
            curso: "Sistemas de Informaçao",
          },
        },
      });
    </script>
```

### Alterando variáveis

```js
 <div id="app">
      <p>{{nome}}</p>
      <button @click="nome = nome + 'eraldo'">Change name</button>
</div>

      new Vue({
        el: "#app",
        data: {
          nome: "G",
        },
      });

```

### Data and Methods

```js
// Our data object
var data = { a: 1 };

// The object is added to a Vue instance
var vm = new Vue({
  data: data,
});
console.log(data.a); //1

console.log(vm.a == data.a); // 1 true
vm.a = 2; // changing the data affects the original data
console.log(data.a); //2

//and vice-versa
data.a = 5;
console.log(vm.a); //5

//https://v2.vuejs.org/v2/guide/instance.html
```

### object-freeze

```js
 <div id="app">
      <p>{{eu}}</p>
      <button @click="eu = 'b'">change</button>
    </div>
    <script>
      let obj = {
        eu: "Eu",
      };

      //exemplo data pegando dados do object e com freeze para congelar mudanças
      Object.freeze(obj);

      new Vue({
        el: "#app",
        data: obj,
      });
```

### $watch is an instance method

> prefixed with $ to differentiate them from user-defined properties.

```js
 <div id="app">
      <p>{{eu}}</p>
      <button @click="eu = 'know'">change</button>
    </div>
    <script>
      let obj = {
        eu: "Eu",
      };

      const vm = new Vue({
        el: "#app",
        data: obj,
      });

      console.log(vm.$data === obj); //true
      console.log(vm.$el == document.getElementById("app")); //true
      //instante method chamando externamente
      vm.$watch("eu", function (newVal, oldVal) {
        console.log(newVal, oldVal);
      });
```

### v-bind

```js
<a v-bind:href="hreflink">{{hreflink}}</a>
<a :href="hreflink">{{hreflink}}</a>
   hreflink: "http://www.google.com",
        },

```

### Links

- [Template Syntax](https://v2.vuejs.org/v2/guide/syntax.html)
- [Truncar String usando filtro](https://acervolima.com/truncar-uma-string-usando-filtro-em-vue-js/)
