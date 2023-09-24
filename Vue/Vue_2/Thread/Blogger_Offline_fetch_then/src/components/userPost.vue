<template>
  <div>
    <p>{{ post }}</p>
    <h1>{{ post.title }}</h1>
    <p>
      slug: <b>{{ post.slug }}</b>
    </p>
    <p>article</p>
    <article>{{ post.article }}</article>

    <router-view></router-view>
    <hr />
    <h1>Renderizar Posts</h1>

    <p>{{ $route.params.id }}</p>
    <p>{{ $route.params.slug }}</p>
    <p>{{ $route.fullPath }}</p>
    <p>{{ $route.path }}</p>
  </div>
</template>

<script>
module.exports = {
  created() {
    console.log(this.$route.params.id);
    this.fetchPost();
  },
  data() {
    return {
      post: "",
    };
  },
  methods: {
    fetchPost(id) {
      fetch(`./api/blog/${this.$route.params.id}/post.json`)
        .then((r) => r.json())
        .then((r) => {
          this.post = r;
        });
    },
  },
};
</script>

<style scoped>
h1 {
  color: coral;
}
</style>
