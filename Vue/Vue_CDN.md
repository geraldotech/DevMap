- v-model
- v-on:click="getx"
- v-if
- v-bind

### 


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

## Vue 2 CDN

```js
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

example html CDN put <head>


## Vue 3 CDN

Error: production build (*.prod.js) when deploying for production?: `https://unpkg.com/vue@3.1.1/dist/vue.global.prod.js`

- **add in header**
```js
<script src="https://unpkg.com/vue@3"></script>
  <script src="app.js" defer></script>
```
- **body**
```html
<!--html-->
<div id="app">{{ greeting }}</div>
```

- **script**
```js
  Vue.createApp({
    data() {
      return {
        greeting: 'Hello, World!'
      }
    }
  }).mount('#app')
```

## Vue router
[`https://unpkg.com/browse/vue-router@3.0.2/dist/`](https://unpkg.com/browse/vue-router@3.0.2/dist/)


## simples minimum to input return
```js
 <div id="app">
  <input type="text" v-model="input_num">
  <p>{{input_num}}</p>
  </div>

Vue.createApp({
  data(){
    return{
      nome:""
    }
  }
}).mount(app);

```

# Do a form app

Fazer uma div que engloba tudo `<div id="app"> </div>` 
Agora fazer o form com v-model e um output
```js
<form id="form_app">
<input type="text" v-model="input_name" placeholder="your name">
</form>

 <p>Meu nome é {{name}}</p>
 <p>Data bind: {{input_name}}</p>
```

Nos testes você pode ou não declarar uma const, o resultado foi o mesmo, não esquecer também de fazer um arquivo apenas para o vue.js.

## versão sem const
```js
Vue.createApp({
  data(){
    return {
      name: "Geraldo",
      input_name: "",
    }
  },
  methods: {
    submitForm(e){
      e.preventDefault();
      this.name = this.input_name;
    }
}
  }).mount('#app')

```

## versão com const
```js
const MyNameApp = {
  data(){
    return {
      name: "Geraldo",
      input_name: "",
    }
  },
  methods: {
    submitForm(e){
      e.preventDefault();
      //console.log('here')
      this.name = this.input_name;
    }
  }
}
Vue.createApp(MyNameApp).mount("#app");

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

## button click
`<button @click="msn()">btn</button>` now just create a method

```js
 methods: {
      msn(){
        alert('yes');
      }
    }
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
      esta_trabalhando: true,
      checked: false,
      tech:[]
    }

```

- [Vue refs (change element name @click)](https://www.nicesnippets.com/blog/vue-js-get-element-by-id-example)

> abrir o console e chamar o app."var". "adicionar ou true/false"


Input e Data Bind