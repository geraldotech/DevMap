<template>
  <div>
    <button @click="all = !all">Show - all Fetch Files</button>
    <section v-show="all">
      <p>{{ allProdutos }}</p>
    </section>

    <h1>Nav by names:</h1>
    <section>
      <!--   do a loop button for each item -->
      <button
        v-for="itens in allProdutos"
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
      <li>Slug: {{ post.slug }}</li>
      <li>Article: <span v-html="post.article"></span></li>
    </ul>

    <select name="" id="" v-model="selecionado">
      <option :value="opt.id" v-for="opt of posts" :key="opt.id">
        {{ opt.slug }}
      </option>
    </select>
    <p>{{ selecionado }}</p>

    <h1>Router params with id</h1>
    <ul>
      <li v-for="render in posts" :key="render.id">
        <router-link
          :to="{
            name: 'threads',
            params: { id: render.id, slug: render.slug },
          }"
          >{{ render.slug }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
module.exports = {
  created() {
    this.fetchProdutos()
    // this.fetchProduto(`notebook`);
    this.fetchPosts()
  },
  data() {
    return {
      allProdutos: [],
      produto: [],
      all: false,
      posts: [],
      post: [],
      selecionado: ``,
    }
  },
  methods: {
    fetchProdutos() {
      fetch('./api/produtos.json')
        .then((r) => r.json())
        .then((r) => {
          this.allProdutos = r
        })
    },
    fetchProduto(itemName) {
      fetch(`./api/produtos/${itemName}/dados.json`)
        .then((r) => r.json())
        .then((r) => {
          this.produto = r
        })
    },
    /* List de posts */
    fetchPosts() {
      fetch('./api/posts.json')
        .then((r) => r.json())
        .then((r) => {
          this.posts = r
        })
    },
    /*  Fetch Post by Id */
    fetchPost(id) {
      fetch(`./api/blog/${id}/post.json`)
        .then((r) => r.json())
        .then((r) => {
          this.post = r
        })
    },
  },
}
</script>

<style>
section {
  margin: 15px 0;
}
</style>
