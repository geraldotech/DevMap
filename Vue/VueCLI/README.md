<h1 align=center>VueJS</h1>

# Start Project

- ## Vite

```js
//vue + vite
npm init vue@latest

// vite
npm create vite@latest

//install Global
npm install -g @vue/cli

//check version
vue -V

Digite o comando `vue` para verificar às opções:
```

- ## create app

  - `vue create 2_projeto_vue`
  - Manually select features > select Babel > choose version Vue 3.x > dedicated files > Save this preset ? N

  - run server:

  ```js
  cd <project>
  npm run serve
  npm run server
  ```

## Components:

[https://vuejs.org/guide/essentials/component-basics.html](https://vuejs.org/guide/essentials/component-basics.html)

- instalar a extensão `Vetur` para sugestões, formatar code, identificar erros, dividir nosso layout em partes
- deletar o conteudo de App.vue e deletar o HelloWord.vue

`App.vue` criar:

```html
<template>
  <h1>My life!</h1>
</template>
```

Necessário export default, também vai encapsular tudo do `data()`:

```js
<script>
export default {
  name: 'App'
}
</script>
```

## criando um componente:

- ir na pasta de `Componentes > MeuPrimeiro.vue`

- Fast template+script+style: start typing: `vue`

```js
<template>
    <h1>Olá Vue</h1>
</template>

<script>
export default {
    name: 'MeuPrimeiro'
}
</script>
```

Voltar no `App.vue` e importar o componente criado, e invocar o nome do component em `components: {...}`

```js
<script>
import MeuPrimeiro from './components/MeuPrimeiro.vue'
export default {
  name: 'App',
  components: {
    MeuPrimeiro
  }
}
</script>
```

Depois alterar o h1 do `App.vue` para

```html
<template>
  <MeuPrimeiro />
</template>
```

## Dados em components (data)

Envolver os itens em uma div para resolver o erro de root base

```js
<template>
    <div>
    <h1>Olá Vue</h1>
   <p>Meu nome é {{nome}}</p>
    </div>
</template>

<script>

export default {
    name: 'MeuPrimeiro',
    data(){
        return {
            nome:"Geraldo",
            profissao: "Developer",
        }
    }
}
</script>
```

## Lifecycle hooks

- Criar um novo components `LifeCycle.vue`

```js
<template>
<h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      nome: "não sei",
    }
  }
}
</script>
```

- No **App.vue** `import LifeCycle from './components/LifeCycle.vue'`

- além de chamar no component declarar na lista de:

```js
components: {
    MeuPrimeiro,
    LifeCycle
  },
```

- declarar no template:
  `<LifeCycle />`

## Fazer um console no hooks

```js
 created() {
    this.lifeCycle()
  },
 methods:{
    lifeCycle(){
      console.log('executou!');
    }
  }

```

## Diretivas são muitas

> Aprendar ou masterizar as diretivas
> [https://vuejs.org/api/built-in-directives.html](https://vuejs.org/api/built-in-directives.html) consultar também VueJS3_CDN.

- e.g: v-if

## Methods [yt](https://www.youtube.com/watch?v=745aPtV_W60&list=WL&index=2&t=94s)

- são como funções, podemos executá-los baseados em eventos ou por alguma lógica do app
- exemplo show email button

```js
 <div>
  <button @click="showEmail">Mostrar e-mail</button>
</div>

data =>  show_email: false,

methods:{
    showEmail(){
      this.show_email = !this.show_email;
    }
```

- checkbox version v-show and v-if

```js
<input type="checkbox" id="checkbox" v-model="checkbox">
<label for="checkbox">{{checkbox ? 'hide' : 'show' }}</label>
<p v-show="checkbox">Envia uma mensagem para: {{email}}</p>
<p v-if="checkbox">Envia uma mensagem para: {{email}}</p>
data =>  checkbox: false,
```

- change button name @click

```js
<button @click="showEmail">{{txtbtn}}</button>
data =>  txtbtn: 'show'

 methods:{
    showEmail(){
      this.show_email = !this.show_email; //case this.show_email for ao ao contrário
      if(!this.show_email){
        this.txtbtn = "show"
      } else {
        this.txtbtn = "hide"
      }
    }

```

- change button name @click v2

```js
<button @click="showEmail">{{show_email ? 'hide' : 'show'}}</button>

data =>   show_email: false,
```

- Criar methods no LifeCyle console.log;

```js
created() {

this.life2(); //chamar o method
}


  methods:{
life2(){
      console.log('ress')
    }
  }
```

## CSS Global and scoped

- Global - basta adicionar no sim do script, geralmente se adiciona no App.vue o main, contudo em qualquer componente será global.

```css
<style>
body{
  background-color: #333;
  color: dodgerblue;
}
a{
  color: red;
}
</style>
```

- scoped

```css

<style scoped>
    ul{
        list-style: none;
        display: flex;
        background-color: #CCC;
        padding: 10px;
    }
    li{
        margin-right: 10px;
    }
    a{
        color: #DDD;
        text-decoration: none;
        transform: 1s;
    }
    a:hover{
        color: turquoise;
    }
</style>

```

## Renderização de listas (v-for)

```js
<ul>
<li v-for="(technology, index) in backend_tech" v-bind:key="index">{{technology}}</li>
</ul>

in data put:
backend_tech: ["JavaScript", "PHP", "Python"]
```

Array object:

```js
<ul>
<li v-for="technology in frontend_tech" :key="technology.id">{{technology.lang}}</li>
</ul>

data:

frontend_tech:[
{id: 1, lang: 'HTML'},
{id: 2, lang: 'CSS'},
{id: 3, lang: 'Vue'},
]
```

## Múltiplos eventos

- Ativar 2 methods com apenas 1 evento

```js
<button @click="primeiro(), segundo()">Ativar multiplos</button>
<p>{{ multiplos_eve }}</p>


 methods: {
    primeiro() {
      this.multiplos_eve = "Primeiro evento ativado!";
    },
    segundo() {
      setTimeout(() => (this.multiplos_eve = "Segundo evento"), 500);
    },
  },
```

- Alternative de argumentos

```js
<button @click="primeiro(txt), segundo(txt2)">Ativar multiplos</button>

methods: {
    primeiro() {
      this.multiplos_eve = this.txt;
    },
    segundo() {
      setTimeout(() => (this.multiplos_eve = this.txt2), 500);
    },
    terceiro() {
      setTimeout(() => (this.multiplos_eve = ""), 1500);
    },
  },

```

## Reutilização de components

- independência de components
- cada component será completamente independente
- Declarar o compoments varias vezes e testar

```js
<Reutilizacao />
<Reutilizacao />
<Reutilizacao />

<template>
  <div>
    <button @click="ativar">Click here!</button>
    <span v-show="ativou">Ativado!</span>
  </div>
</template>
<script>
export default {
  name: "Reutilizacao",
  data() {
    return {
      ativou: false,
    };
  },
  methods: {
    ativar() {
      this.ativou = !this.ativou;
    },
  },
};
</script>
```

## Passar dados como props

- Os components podem receber dados, recurso é chamado de `props`
- As `props` podem ser passados por valores do data
- Precisamos declarar as propriedades recebidas pelos componentes em um array ou objeto chamado props.
- ação de passar dados do parent to children.

Component pai declarado: `<Info value/>`

filho acima data:

```js
 props: {
    email: String,
  },
  data() {
  ...
  }

//html
 <p>{{ comEmail }}</p>
```

Resumindo em vez de declarar a `var` em `data() {...}` definir em `props() {email: String, }` esse dado deve ser definido no momento que em o component estiver sendo chamado/declarado, se nada for passado também não vai retornar erros.

### Multiple props e Boolean value use :bind:

`<Info comEmail="dev@vuejs.com" :esta_trabalhando="false" />`

### Props in data(): ? just bind the prop

Em vez de...`<Info email="geraldo...." />`

Fazer... `<Info :email="email" />`

```js
data(){
  return{
    email: "mail.."
  }
}
```

### Arrays

```js
<li v-if="esta_logado"><a href="#">Meu perfil</a></li>
<li v-if="esta_logado2"><a href="#">Meu perfil 2</a></li>


props: ["esta_logado", "esta_logado2"],
};


//declaration
 <MHeader :esta_logado="true" :esta_logado2="true" />

//checkbox
<MHeader :esta_logado="true" :esta_logado2="logado2" />

 data() {
    return {
      logado2: false,
    }
  },
```

# Button Props with default value

```js
;<template>
  <div>
    <button>{{ title }}</button>
  </div>
</template>

export default {
  name: 'AppButton',
  props: {
    title: {
      type: String,
      default: 'Botao',
    },
  },
}
```

parent

```js
 <AppButton title="Editar" />
 <AppButton title="Comprar" />
 <AppButton />
```

## Ouvindo events com $emit

- Utilizando o #emit é possível ouvir um `event` de um component filho em um component `pai`
  Com isso, podemos ativar comportamentos "como métodos" no component pai
- O **`evento deve ser registrado`** no componente
- E é preciso definir o que será feito com a ativação do evento na chamada do componente.

- Temos um component Picture em que o `data(){...} return` a imagem
- Fazemos um component `MudarImagem.vue`

```js
<template>
  <div>
    <button @click="$emit('mudarImagem')">Trocar imagem</button>
  </div>
</template>

<script>
export default {
  name: "MudarImagem",
  emits: ["mudarImagem"],
};
</script>
```

Ao declarar o component devemos associar a um method do component pai

`<MudarImagem @mudarImagem="trocarImagem" />`

### outro exemplo

`footer` has uma prop $msn e um method que apaga essa string, então usando o created() definimos o $emit

```js
 created() {
    this.$emit("criado");
  },

  ...

   props: {
    foot: String,
  },
```

In our parent component, we will listen to that event, method criadoFun a ser criado no parent

```js
 <Footer :foot="foot" @criado="criadoFun" />
```

## Contextualizando

- props - component pai envia o prop para o filho
- emits - algo ocorrer no filho emitir ao pai que ativa o method
  [ref 7:00](https://www.youtube.com/watch?v=RXldGbtzZdI)

# API JSON Server

`npm install json-server`

create `db` folder and `file.json`

`$ npx json-server --watch db/db.json`

## Or in scripts in package.json add

`"backend": "json-server --watch ./db/db.json"`
then run `npm run backend`

# slots nos components, não requer props

Em vez de

```js
//child
  <button>
    {{mybutton}}
    </button>

    //parent

     <AppButton title="Comprar" />
```

Fazer

```js
//child
<button>
  <slot />
</button>

//parent
<AppButton>btn one</AppButton>

```

# slots with props default value

```js

  <button>
      <slot>padrao</slot>
    </button>

    //parent
      <AppButton>Button</AppButton>
        <AppButton></AppButton>//padrao


    //pegando o title da props no slot
       <slot>{{ title }}</slot>

    props: {
    title: {
      type: String,
      default: "Botao",
    },
  },
```

Podemos adicionar um spinner dentro do botão que está sendo chamado ou definir para todos no slots

```html
<button :class="baseClass">
  <span
    class="spinner-border spinner-border-sm"
    role="status"
    aria-hidden="true"></span>
  <slot>{{ title }} </slot>
</button>
```

## Não é regra, porém é uma boa lógica para se levar em consideração

- props para comportamento
- slot para conteúdo

Definindo estado do `button`, criando uma `prop` e usar o `v-if`

```js
 busy: {
      type: Boolean,
      default: false,
    },


<button :class="baseClass">
      <span
        v-if="busy"
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true">
 </span>
    </button>


Então ao chamar o button adicinar essa `prop` para true

<AppButton busy> </AppButton>

Para false seria necessário:

:busy="false"
```

# slot name v-slot

Existem slots default e com name

Alterar o loading do button usando o slot:name

```js
  <button :class="baseClass">
      <slot name="loading" v-if="busy">
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      </slot>

      <slot>{{ title }} </slot>
    </button>


    //no parent... slots sem name são sempre padrão, não precisa chamar assim:


    <AppButton busy>
      <template v-slot:default> Salvar </template>
    </AppButton>

    //...então adicionar o novo icone ou qualquer texto


    <AppButton busy>
      <template v-slot:loading>
        <span
          class="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
      </template>
    </AppButton>
```

# Router 3

> add Vue Router 3 as plugin Vue 2 CLI [https://v3.router.vuejs.](https://v3.router.vuejs.org/installation.html#vue-cli)

```js
add Vue Router 3 as plugin Vue 2 CLI: via
vue add router
```
