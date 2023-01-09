## Vue 2 CDN

## Documentation

[https://v2.vuejs.org/v2/guide/installation.html](https://v2.vuejs.org/v2/guide/installation.html) or [ptbr](https://br.vuejs.org/v2/guide/installation.html)

```js
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

### Development Version:

2.7.14

```js
https://v2.vuejs.org/js/vue.js
```

```js
https://cdn.jsdelivr.net/npm/vue/dist/vue.js
```

### Prodution:

```js
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.13"></script>
```

# The Vue Instance

[https://v2.vuejs.org/v2/guide/instance.html](https://v2.vuejs.org/v2/guide/instance.html)

### Basic script + short way

```js
const app = new Vue({
  el: "#app",
  data: {
    message: "Geraldo",
  },
});

//simpler
new Vue({
  el: "#app",
});

//v2
new Vue({
  data: {},
}).$mount("#app");
```

### Data na Vue instance declar variable

> > vm (short for ViewModel)

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

Exemplo de dados

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

## # Alterando variáveis

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

# Registrando components no HTML

- [https://v2.vuejs.org/v2/guide/components.html](https://v2.vuejs.org/v2/guide/components.html)
- [https://v2.vuejs.org/v2/guide/components-registration.html](https://v2.vuejs.org/v2/guide/components-registration.html)

> > Registrar fora da root instance

```js
//the component
 Vue.component("myd-content", {
        template: "#baixar",
        data() {
          return {
            we: "Welcome",
            list: [
              { id: 1, name: "A" },
              { id: 2, name: "B" },
              { id: 3, name: "C" },
            ],
          };
        },
      });

//No router
const Download = Vue.component("myd-content");

//No html
<template id="baixar">
      <div>
        <p>{{we}}</p>
        <ul>
          <li v-for="(item, index) in list" :key="item.name">{{item.name}}</li>
        </ul>
      </div>
</template>
```

Outras possibilidades:

```js
Vue.component("myd-content", {
  template: `<p>Baixe now Page {{we}}</p>`,
  data() {
    return {
      we: "Welcome",
    };
  },
});
//usando uma string
const Baixar = `<p>Baixe now Page</p>`;

Vue.component("myd-content", {
  template: Baixar,
  data() {
    return {
      we: "Welcome",
    };
  },
});

//importando, porém como você já sabe e se esquecer o erros vão te fazer lembrar, precisamos do nosso code em um arquivo separado + type module para fazer importações

import baixar from "./baixar.js";

Vue.component("myd-content", {
  template: baixar,
  data() {
    return {
      we: "Welcome",
      list: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
      ],
    };
  },
});

//baixar.js
const baixar = `
<div>
<p>{{we}}</p>
<ul>
  <li v-for="(item, index) in list" :key="item.name">{{item.name}}</li>
</ul>
</div>
`;

export default baixar;


//importando nível Ninja

//baixar.js
const baixar = `
<div>
<p>{{we}}</p>
<ul>
  <li v-for="(item, index) in list" :key="item.name">{{item.name}}</li>
</ul>
</div>
`;

const baixe = Vue.component("myd-content", {
  template: baixar,
  data() {
    return {
      we: "Welcome",
      list: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
      ],
    };
  },
});

export default baixe;


//main.js
import baixe from "./baixar.js";

//no path vai definir direto
 { path: "/download", component: baixe },

 //📍❌Apenas importando o arquivo sem chamar, caso esteja usando Vue.component, o mesmo será detectado automaticamente, porém vai é necessário Vue.component em cada arquivo o que deixa nosso code BAD
  { path: "/download", component: Vue.component("myd-content") },
```

### guide

- [components registration](https://v2.vuejs.org/v2/guide/components-registration.html)
- [Template Syntax](https://v2.vuejs.org/v2/guide/syntax.html)
