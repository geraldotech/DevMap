<template>
  <div>
    <h1>myComponent junto com header</h1>
    <p class="hello">Hello {{ who }}</p>
    <ul>
      <li>support for scoped styles</li>
      <li>
        Básico load components.vue com CDN
        <a href="https://github.com/FranckFreiburger/vue3-sfc-loader">here</a>
      </li>
      <li>
        para Vue 2
        <a href="https://github.com/FranckFreiburger/http-vue-loader">here</a>
      </li>
      <li>criar a página html e importar os components</li>
      <li>
        Como pode perceber, esse e.g não tem rotas, simula bem um
        <code>ng-includes</code> os arquivos.html requer o mesmo
        <code>div#id</code> onde será renderizado os componenets, para não
        exibir um determinado component, basta não fazer o
        <code>div#id</code> deste item caso o mesmo tenho #id específico.
      </li>
    </ul>

    <p>{{ gp }}</p>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      who: "world",
      gp: "Geraldo",
    };
  },
};
</script>
<style>
/*global */
.hello {
  background-color: rgb(31, 31, 13);
  color: white;
}

h1 {
  color: orange;
}
code {
  text-decoration: underline #fff;
  color: coral;
}
</style>