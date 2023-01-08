## Vue 3 CDN

Temos Vue.createApp, components

- **add in header**

```js
<script src="https://unpkg.com/vue@3"></script>
//attribute "defer" the defer attribute tells the browser not to wait for the script
<script src="app.js" defer></script>
//link altenativo que extrai do https://github.com/FranckFreiburger/http-vue-loader
<script src="https://unpkg.com/vue@next"></script>
```

- **body**

```html
<div id="app">{{ greeting }}</div>
```

- **basic script**

```js
Vue.createApp({
  data() {
    return {
      greeting: "Hello, World!",
    };
  },
}).mount("#app");
//.mount(app); //works too
// .mount(document.body); works too tks VueLoader
```

Error: production build (\*.prod.js) when deploying for production?: `https://unpkg.com/vue@3.1.1/dist/vue.global.prod.js`

## Vue Router CDN

```js
<script src="https://unpkg.com/browse/vue-router@3.0.2/dist/"></script>
<script src="https://unpkg.com/vue-router@4"></script>
```

[routing.html#simple-routing-from-scratch](https://vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch)

## Lifecyle hooks

[https://vuejs.org/guide/essentials/lifecycle.html](https://vuejs.org/guide/essentials/lifecycle.html)

## Properties

- methods
- watch
- computed

## Directives

has -v prefix [REF](https://vuejs.org/guide/essentials/template-syntax.html#directives)

- v-model
- v-if
- [v-bind](#v-bind)
- [v-on](#v-on)
- [v-show](#v-show)
- v-for
- v-html

## v-bind

Atributos dinâmicos

```html
::DOM html
<span title="hello">hello</span>
::after
<span v-bind:title="message">v-bind</span>
::before
<span :title="message">v-bind</span>
::links
<a :href="face">{{face}}</a> in date link: 'http...'
```

## v-on

> > (parenteses são dispensáveis)

- `<button v-on:click="hello()">hello</button>`
- `<button @click="msn">btn</button>`
  - @[event] [REF](https://vuejsbr-docs-next.netlify.app/guide/template-syntax.html#abreviacao-de-v-bind)
    - <input type="text" @change="handleChange" />
    - <input type="text" @click="handleChange" />
    - <input type="text" @mouseover="handleChange" />
    - <input type="text" v-model="nome" v-on:input="Complete" />

now just create a method

```js
 methods: {
      msn(){
        alert('yes');
      }
    }

//getting value target in select options
 handleChange(event){
    const selel = event.target.value;
       console.log(selel);
    }

```

## v-show

```js
<button @click="ativar">Ativar</button>
<span v-show="ativou">Ativou!</span>


//in data   ativou: false,

 ativar() {
this.ativou = !this.ativou;
},

```

## simples minimum to input return

```js
  <div id="app">
    <input type="text" v-model="input_num">
    <p>{{input_num}}{{email}}</p>
    <span></span>
  </div>

Vue.createApp({
  data(){
    return{
      input_num: '',
      email: "@hotmail.com"
    }
  }
}).mount(app);

```

### Form app

Fazer uma div que engloba tudo `<div id="app"> </div>`
depois fazer o form com v-model e um output

```html
<form id="app">
  <input type="text" v-model="input_name" placeholder="your name" />
  <p>Meu nome é {{name}}</p>
  <p>Data bind: {{input_name}}</p>
</form>
```

Você pode ou não declarar uma const, o resultado foi o mesmo:

- const e Vue.createApp

```js
const meuApp = {
  data() {
    return {
      name: "gmapdev",
      input_name: "",
    };
  },
  methods: {
    meuFormulario() {
      this.name = this.input_name;
    },
  },
};
Vue.createApp(meuApp).mount(app);

/* Vue.createApp({
  data(){
    return {
      name: "Geraldo",
      input_name: "",
    }
  },
  methods: {
    meuForm(){
      this.name = this.input_name;     
    }
}
  }).mount('#app');
 */
```

submitForm é referente ao v-on:click
` <input type="submit" value="Enviar" v-on:click="submitForm">`

## How preventDefault:

```js
//@click
<button @click="enviar">Enviar 2</button>

methods: {
    enviar(e){
      e.preventDefault();
      //console.log('here')
      this.name = this.input_name;
    }

//direct in form
   <form action="" @submit.prevent="enviar">

 methods: {
    enviar() {
      code...
    }
    }

//more complex
  <form action="" @submit="enviar($event)">

   methods: {
    enviar(e) {
      e.preventDefault();
    }
   }
```

[CodePen LiveDemo](https://codepen.io/geraldopcf/pen/ExEMjob)

## Templates para englobar vários elementos

exemplo

```js
 <div id="app">
        <span v-if="isUnderAge">vc precisa ser maior de 18 anos</span>
  <template v-else>
        <span>veja os itens</span>
        <ul>
            <li>Black label</li>
            <li>Chivas</li>
        </ul>
    </template>

```

## radio box value and checkbox true/false with change name

```js

 <input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked  ? 'Hide' : 'Show'}}</label>

    <p v-if="checked">Testando</p>

    <input type="radio" name="tech" value="java" id="java" v-model="tech">
    <label for="java">Java</label>
    <input type="radio" name="tech" value="node" id="node" v-model="tech">
    <label for="node">node</label>
    <p>{{tech}}</p>
    <p v-if="tech == 'node'"><span>NODE is a JavaScript</span></p>
    <p v-if="tech == 'java'"><span>Java mobile back-end</span></p>

    //in data return
    data(){
    return {
      checked: false,
      tech:[]
    }

```

## created()

```js
  created(){
   console.log("Hello!");
  },
```

- [Vue refs (change element name @click)](https://www.nicesnippets.com/blog/vue-js-get-element-by-id-example)

> abrir o console e chamar o app."var". "adicionar ou true/false"

# props

Envia dados para componentes, melhor uso para comportamento

# slots

Envia conteúdo extra para os componentes

[Form Input Bindings](https://vuejs.org/guide/essentials/forms.html)
