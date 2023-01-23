# Contextualizando from scratch o uso do plugin

- `httpVueLoader` e `vue3-sfc-loader` são loaders do Vue o último funciona no Vue 2/3

- [Vue_2 httpVueLoader](#vue2)
- [Vue_3 SFC - Single File Component](#vue3)

# Vue_2

<a name="vue2"></a>
Vue + Loader:

```js
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.13/dist/vue.js"></script>
<script src="https://unpkg.com/http-vue-loader"></script>

```

> > Do not use built-in or reserved HTML elements as component id: footer, as vezes nav pode não funcionar porém nava works então pay for attention no nome

- Apesar de funcionar sem `module.exports = ....`, entratando além de ser uma boa prática o uso do `data()` faz necessário para essa estrutura padrão.

e.g para `httpVueLoader` `vue3-sfc-loader`

```js
<script>
module.exports = {
  data() {
    return {};
  },
};
</script>
```

## ❌ Bad Way

```js
new Vue({
  el: "#app",
  data: {},
  components: {
    home: httpVueLoader("home.vue"),
    foo: httpVueLoader("footer.vue"), //name+Loader+path
  },
});
```

Em components seguindo o padrão temos template+script+style"scoped"

```html
<template>
  <footer>
    <p>{{f}}</p>
  </footer>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        f: "Footer",
      };
    },
  };
</script>

<style scoped>
  p {
    color: coral;
    font-size: 1.2rem;
    text-align: center;
  }
</style>
```

E pra finalizar basta chamar o components no index.html dentro do #app ` <home></home>` `<foo></foo> ` e declarar seu GLOBAL style.css no mesmo html.

<hr>

- Apesar de funcionar baseado nos padrão do VueCLI, isso foi BAD ❌
- and we can do it BETTER parent + child components + Global CSS ✅

Deixando o index.html com poucas linhas registrando um component `pai` parent component, vamos chamar de `App.vue` e adotando a estrutura de pastas do Vue CLI o nosso projeto mesmo sendo via CDN terá uma estrutura profissional facilitando futuras manutenções, se pensou que poderia criar várias páginas HTML e chamar os `components` individualmente, sim também funciona, porém é mais inviável ainda, melhor implementar o Vue Router.

### Exemplo em Vue_2\Router_httpVueLoader\httpVueLoader_only

- eg1_HTML_mode
- eg2_HTML_mode

## ✔ Beautiful Way

Na instância do Vue a propriedade `template` tem suporte apenas para um root element, e como você deve imaginar será nosso `App.vue` sendo assim para renderizar esse component não será necessário ir no index.html declarar a respectiva tag `<App/>`.

main.js

```js
new Vue({
  template: `<App></App>`,
  components: {
    App: httpVueLoader("./App.vue"),
  },
}).$mount("#app");
```

App.vue vai encapsular os components filhos, viu como ficou bem melhor?

```js
<template>
  <div>
    <h1>{{ title }}</h1>
    <home></home>
    <Foo></Foo>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {
      title: "e.g Vue 2 com App.vue as Parent dos outros components",
    };
  },
  components: {
    Foo: httpVueLoader("./components/footer.vue"),
    Home: httpVueLoader("./components/Home.vue"),
  },
};
</script>
```

### Exemplo em Vue_2\Router_httpVueLoader\httpVueLoader_only

- eg3_parentCom

<hr>

# Vue 3

<a name="vue3"></a>

## # Vue vue3-sfc-loader

Vue + Loader

```js
<script src="https://unpkg.com/vue@3"></script>
<script src="https://cdn.jsdelivr.net/npm/vue3-sfc-loader/dist/vue3-sfc-loader.js"></script>
```

Consultar os exemplos, há mais de uma maneira de fazer

export default + render()

```js
<template>
  <div>
    <div v-html="rawHtml"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rawHtml: "<h1> This is some HTML </h1>",
    };
  },
  render() {
    return (
      <div>
        <div domPropsInnerHTML={this.rawHtml}> </div>
      </div>
    );
  },
};
```

Antes de usar os components precisamos e um código extra para iniciar o plugin sucedido pela instância do Vue.

## ❌ Start de um code bem sujo

```js
const options = {
  moduleCache: {
    vue: Vue,
  },
  async getFile(url) {
    const res = await fetch(url);
    if (!res.ok)
      throw Object.assign(new Error(res.statusText + " " + url), { res });
    return {
      getContentData: (asBinary) => (asBinary ? res.arrayBuffer() : res.text()),
    };
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement("style"), {
      textContent,
    });
    const ref = document.head.getElementsByTagName("style")[0] || null;
    document.head.insertBefore(style, ref);
  },
};

const { loadModule } = window["vue3-sfc-loader"];
```

### e.g Vue_3\Route_vue3-sfc-loader\vue3-sfc-loader_only

code completo do que deve ser evitado.

- eg1_Mult_instances_id_HTML

# e.g better 1.1

Código melhorado, App.vue encapsula os components filhos

- eg2_parent

# e.g better 1.2

Nosso code que inicializa o plugin em um arquivo separado é chamado em cada html assim com os demais

- eg3_parentCom

# ✔ e.g Beautiful 1.3

App.vue encapsulando todos os components

- eg4_module
