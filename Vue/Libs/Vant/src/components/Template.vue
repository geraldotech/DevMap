<template>
  <div>
    <h1>Single Post Template com props</h1>
    <p>{{ $route.params }}</p>
    <p>{{ $route.query }}</p>
    <p>{{ $route.params.slug }}</p>

    <article>
      <h1>Title: {{ single.title }}</h1>
      <p>Article: {{ single.article }}</p>
      <p>Category: {{ single.category }}</p>
    </article>
  </div>
</template>

<script>
module.exports = {
  created() {
    this.RenderPost()
  },
  props: {
    id: {
      type: Number,
    },
  },
  data() {
    return {
      post: {},
      single: {},
    }
  },
  methods: {
    RenderPost() {
      fetch('./src/db/data.json')
        .then((req) => req.json())
        .then((res) => {
          this.single = res.posts.find(
            (post) => post.slug === this.$route.params.slug
          )
        })
    },
  },
}
</script>

<style>
article {
  text-align: justify;
  padding: 10px;
}
article h1 {
  color: dodgerblue;
}
</style>
