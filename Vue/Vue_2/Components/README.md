# [Components](https://v2.vuejs.org/v2/guide/components.html)

Components are reusable Vue instances with a name.

- [Why Name Components?](https://v2.vuejs.org/v2/guide/components-registration.html#Component-Names)
- [Global-Registration](https://v2.vuejs.org/v2/guide/components-registration.html#Global-Registration)
  - Assim o mesmo vai ficar disponível Globalmente em todos os `components`

```js
/_ globally, using Vue.component: _/;

Vue.component("notebook", {
  template: "<div><h1>Notebooks</h1></div>",
});
```

- [Local-Registration](https://v2.vuejs.org/v2/guide/components-registration.html#Local-Registration)
  Global registration often isn’t ideal...[read docs...]
  - Using JavaScript objects:

```js
// Component names should conform to valid custom element name in html5 specification.
// mesmo sem usar o nome deve aplicar um nome
const smartphones = Vue.component("mysmartphones", {
  template: "<div><h1>My Smartphones</h1></div>",
});
//🟢 but podemos deixar o code mais clean usando apenas JS Object Templates / string templates
const smartphones2 = {
  template: "<div><h1>My Smartphones 2</h1></div>",
};

//registrar em components
 components: {
    Bestsmartphones: smartphones,
    Bestsmartphones2: smartphones2,
  },
```

# Registrando components no HTML

> Registrar fora da root instance

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

 //📍❌Apenas importando o arquivo sem chamar, caso esteja usando Vue.component, o mesmo será detectado automaticamente, porém é necessário Vue.component em cada arquivo o que deixa nosso code BAD
  { path: "/download", component: Vue.component("myd-content") },
```

# Components Exists:

[vue-js-check-if-a-component-exists](https://stackoverflow.com/questions/37389788/vue-js-check-if-a-component-exists)

```javascript
 created() {
    console.warn("Vue-options", Vue.options);
    //get All Vue Global Components Name
    console.warn("Vue-options", Object.keys(Vue.options.components));
    console.warn("this.$options.components", this.$options.components);

    //get All Vue Global Components Name cheking a name
    console.warn(
      "Exists Global",
      Object.keys(this.$options.components).includes("Menua")
    );
    console.log(`----------------------------------------`);
    console.log("Local Components", Object.keys(this.$options.components));
    console.log(
      "Exists",
      Object.keys(this.$options.components).includes("Foo")
    );
    console.log("Exists", "Foo" in this.$options.components);
  },
```

Async Component

```js

Vue.component("Asynexample", function (resolve,
reject) { setTimeout(() => { resolve({ template: "
<div>I am async!</div>
", }); }, 1000); });
```

### Links:

- [components registration](https://v2.vuejs.org/v2/guide/components-registration.html)
- [Dynamic Components](https://v2.vuejs.org/v2/guide/components.html#Dynamic-Components)
  - [#keep-alive-with-Dynamic-Components](https://v2.vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components)
