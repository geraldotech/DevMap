# Contextualizando from scratch o uso do plugin

- `httpVueLoader` e `vue3-sfc-loader` são loaders do Vue o último funciona no Vue 2/3

- [Vue_2 httpVueLoader](#vue2)
- [Vue_3 SFC - Single File Component](#vue3)

Considerações:

# Vue_2

<a name="vue2"></a>
Vue + Loader:

```js
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.13/dist/vue.js"></script>
<script src="https://unpkg.com/http-vue-loader"></script>

```

## Bad Way

> > Do not use built-in or reserved HTML elements as component id: footer

name+Loader+path

```js
new Vue({
  el: "#app",
  data: {},
  components: {
    home: httpVueLoader("home.vue"),
    foo: httpVueLoader("footer.vue"),
  },
});
```

No components seguindo o padrão temos template+script+style"scoped"

```js
<template>
  <footer>
    <p>footer</p>
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

- Não é necessário usar `module.exports = ....`, contúdo além de ser considerado uma boa prática o uso do `data()` faz necessário essa estrutura padrão.

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

E pra finalizar basta chamar o components no index.html dentro do #app ` <home></home>` `<foo></foo> ` e declarar seu GLOBAL style.css no mesmo html.

- Apesar de funcionar baseado nos padrão do VueCLI, isso foi BAD ❌
- and we can do it BETTER parent + child components + Global CSS ✅

Deixando o index.html com poucas linhas registrando um component `pai` parent component, vamos chamar de `App.vue` e adotando a estrutura de pastas do Vue CLI o nosso projeto mesmo sendo via CDN terá uma estrutura profissional facilitando futuras manutenções, se pensou que poderia criar várias páginas HTML e chamar os `components` individualmente, sim também funciona, porém é mais inviável ainda, melhor implementar o Vue Router.

## Exemplo nas respectivas pastas:

- eg1_HTML_mode
- eg2_HTML_mode

## Beautiful Way

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

App.vue vai controlar os components filhos, viu como ficou bem melhor?

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

## Exemplo nas respectivas pastas:

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
