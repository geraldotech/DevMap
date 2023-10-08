<template>
  <div>
    <h1>Template Posts</h1>

    <section v-if="single">
      <p>{{ $route.params }}</p>
      <h1>{{ single.title }}</h1>
      <h5>Category: {{ single.category }} Data: {{ single.data }}</h5>
      <article v-html="single.article"></article>
    </section>
    <p v-else>nao tem posts</p>

    <hr />
    <section v-if="singleComputed">
      <h1>Computed</h1>
      <p>{{ singleComputed.slug }}</p>
    </section>
    <p v-else>nao tem posts com o find setado</p>
  </div>
</template>

<script>
import posts from '@/db/data.json'

export default {
  name: 'TemplatePosts',
  created() {
    this.RenderSingle()
  },
  data() {
    return {
      single: {},
    }
  },
  methods: {
    RenderSingle() {
      const getSingle = posts.blog.find(
        (val) => val.slug == this.$route.params.slug
      )
      console.warn(`find`, getSingle)
      return (this.single = getSingle)
    },
  },
  computed: {
    singleComputed() {
      const getOne = posts.blog.find((v) => v.id == 9)
      console.log(`computed`, getOne)
      return getOne
    },
  },
}
</script>

<style></style>
