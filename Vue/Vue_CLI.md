
## create app
`vue create 2_projeto_vue`

- Manually select features > select Babel > choose version Vue 3.x > dedicated files > Save this preset ? N

run server:  
`npm run server`

# Componentes

- instalar a extensão Vetur para sugestões, formatar code, identificar erros
Dividir nosso layout em partes, cada um pode ser seu CSS 
- deletar o conteudo de App.vue e deletar o HelloWord.vue

Em App.vue criar: 
```html
<template>
  <h1>My life!</h1>
</template>
```
OBS em 2022 não foi necessário fazer a exportações como foi mostrado no vídeo: 

```js
<script>
export default {
  name: 'App'
}
</script>
```

## criando um componente, ir na pasta de Componentes > MeuPrimeiro.vue

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

Voltar no `App.vue` e importar o componente criado, além de definir o nome do components

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

Depois alterar o h1 do App.vue para
```html
<template>
  <MeuPrimeiro />
</template>
```

# Dados em componentes (data)

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

# Lifecycle hooks

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

No App.vue 
- importar `import LifeCycle from './components/LifeCycle.vue'` além de chamar no component

- declarar na lista de:
```js
components: {
    MeuPrimeiro,
    LifeCycle
  },
``` 
- declarar no template:
    `<LifeCycle />`


# Diretivas são muitas
>Aprendar ou masterizar as diretivas
- e.g: v-if