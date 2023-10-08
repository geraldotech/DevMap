<template>
  <div>
    <h1>Posts Links</h1>
    <ul class="post">
      <li v-for="single in allposts" :key="single.id">
        <router-link :to="{ name: 'template', params: { slug: single.slug } }">
          {{ single.slug }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import posts from '@/db/data.json'
export default {
  name: 'BlogPosts',
  created() {
    this.GetPosts()
  },
  data() {
    return {
      allposts: {},
    }
  },
  methods: {
    GetPosts() {
      this.allposts = posts.blog
    },
  },
}
</script>

<style scoped>
ul li {
  padding: 10px;
  list-style: none;
}
</style>
