<template>
  <div>
    <button @click="all = !all">Show</button>
    <section v-show="all">
      {{ produtos }}
    </section>

    <section>
      <button
        v-for="itens in produtos"
        :key="itens.id"
        @click="fetchProduto(itens.name)"
      >
        {{ itens.name }}
      </button>
      <p>{{ produto }}</p>
    </section>

    <hr />
    <h2>All Posts</h2>
    <p>{{ posts }}</p>

    <hr />
    <h1>posts.id</h1>
    <ul>
      <li v-for="itens in posts" :key="itens.id">
        <a :href="itens.slug" @click.prevent="fetchPost(itens.id)">{{
          itens.title
        }}</a>
      </li>
    </ul>
    <!--   render using data v-html for post html -->
    <ul>
      <li>Title: {{ post.title }}</li>
      <li>Cat: {{ post.category }}</li>
      <li>Article: <span v-html="post.article"></span></li>
    </ul>

    <select name="" id="" v-model="selecionado">
      <option :value="opt.id" v-for="opt of posts" :key="opt.id">
        {{ opt.slug }}
      </option>
    </select>
    <p>{{ selecionado }}</p>
  </div>
</template>

<script>
module.exports = {
  created() {
    this.fetchProdutos();
    // this.fetchProduto(`notebook`);
    this.fetchPosts();
  },
  data() {
    return {
      produtos: [],
      produto: [],
      all: false,
      posts: [],
      post: [],
      selecionado: ``,
    };
  },
  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json")
        .then((r) => r.json())
        .then((r) => {
          this.produtos = r;
        });
    },
    fetchProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`)
        .then((r) => r.json())
        .then((r) => {
          this.produto = r;
        });
    },
    fetchPosts() {
      fetch("./api/posts.json")
        .then((r) => r.json())
        .then((r) => {
          this.posts = r;
        });
    },
    fetchPost(id) {
      fetch(`./api/blog/${id}/post.json`)
        .then((r) => r.json())
        .then((r) => {
          this.post = r;
        });
    },
  },
};
</script>

<style></style>
