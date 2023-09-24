<template>
  <div>
    <h1>Render Post</h1>

    <p>{{ $route.params.id }}</p>
    <p>{{ $route.params.slug }}</p>
    <p>{{ $route.fullPath }}</p>
    <p>{{ $route.path }}</p>

    <h1>{{ post.title }}</h1>
    <p>{{ post.slug }}</p>

    <article>{{ post.article }}</article>
  </div>
</template>

<script>
module.exports = {
  created() {
    console.log(this.$route.params.id)
    this.fetchPost()
  },
  data() {
    return {
      post: '',
    }
  },
  methods: {
    fetchPost(id) {
      fetch(`./api/blog/${this.$route.params.id}/post.json`)
        .then((r) => r.json())
        .then((r) => {
          this.post = r
        })
    },
  },
}
</script>

<style scoped>
h1 {
  color: coral;
}
</style>
