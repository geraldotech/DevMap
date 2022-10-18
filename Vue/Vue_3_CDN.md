## Vue 3 CDN

- **add in header**
```js
<script src="https://unpkg.com/vue@3"></script>  
//attribute "defer" the defer attribute tells the browser not to wait for the script
<script src="app.js" defer></script>
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
        greeting: 'Hello, World!'
      }
    }
  }).mount('#app')
  //.mount(app); //works too
```

Error: production build (*.prod.js) when deploying for production?: `https://unpkg.com/vue@3.1.1/dist/vue.global.prod.js`

## Directives 
has -v prefix [REF](https://vuejs.org/guide/essentials/template-syntax.html#directives)
- v-model
- v-if

## v-bind
title get a variavel message
```html
::before
<span title="hello">hello</span>
::after
  <span v-bind:title="message">v-bind</span>
::short hand
   <span :title="message">v-bind</span>
:: links
 <a :href="face">{{face}}</a> in date link: 'http...'
```
## v-on:click="func()" or @click="fun()"
`<button @click="msn()">btn</button>` now just create a method

```js
 methods: {
      msn(){
        alert('yes');
      }
    }
```

## Vue router CDN
[`https://unpkg.com/browse/vue-router@3.0.2/dist/`](https://unpkg.com/browse/vue-router@3.0.2/dist/)


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

### Do a form app

Fazer uma div que engloba tudo `<div id="app"> </div>` 
depois fazer o form com v-model e um output
```html
<form id="app">
<input type="text" v-model="input_name" placeholder="your name">
<p>Meu nome é {{name}}</p>
<p>Data bind: {{input_name}}</p>
</form>
```

Você pode ou não declarar uma const, o resultado foi o mesmo:

- const e Vue.createApp

```js
  const meuApp = {
    data(){
      return {
        name: "gmapdev",
        input_name: ""
      }
    },
    methods:{
      meuFormulario(){
        this.name = this.input_name;
      }
    }
  }
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

- [Vue refs (change element name @click)](https://www.nicesnippets.com/blog/vue-js-get-element-by-id-example)

> abrir o console e chamar o app."var". "adicionar ou true/false"


Input e Data Bind