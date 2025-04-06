<template>
  <div>
    <h1>Blog Posts</h1>
    <p>Depois migrar para lib local</p>
    <h2>[x]Rendener o conteudo no proprio pai: usar href @click.prevent</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <a :href="post.slug" @click.prevent="SinglePost($event)">{{
          post.title
        }}</a>
      </li>
    </ul>
    <ul>
      <li>{{ single.id }}</li>
      <li>{{ single.title }}</li>
      <li>{{ single.article }}</li>
    </ul>
    <hr />
    <h2>[x]Rendener posts in Template.vue</h2>
    <ul>
      <li v-for="single in posts" :key="single.id">
        <router-link
          :to="{
            name: 'post',
            params: { slug: single.slug, id: single.id },
          }"
          >{{ single.slug }}</router-link
        >
      </li>
    </ul>
    <!--  <router-link
      :to="{
        name: 'post',
        params: { slug: 'speed-test', array: [1, 2, 3, 4] },
      }"
      >TESTE PROPS</router-link
    > -->
  </div>
</template>
<script>
module.exports = {
  created() {
    this.GetPosts()
  },
  data() {
    return {
      posts: {},
      single: {},
    }
  },
  methods: {
    GetPosts() {
      fetch('./src/db/data.json')
        .then((req) => req.json())
        .then((res) => {
          this.posts = res.posts
        })
    },
    SinglePost(e) {
      const currentslug = e.target.getAttribute('href')
      this.single = this.posts.find((pos) => pos.slug == currentslug)
    },
  },
}
</script>

<style scoped></style>
